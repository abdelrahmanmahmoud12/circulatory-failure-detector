import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import accuracy_score

# Load the data into a DataFrame
data = pd.read_csv('cardio_train.csv', sep=';')

#Calculate the age by year
def ageRound(age):
    age = round(age/365.25)
    return age

data['age'] = data.age.apply(lambda x : ageRound(x))

# Calculate Body Mass Index (BMI)
data['bmi'] = round(data['weight'] / (data['height'] / 100) ** 2, 1)

# Classify Blood Pressure
# MBP = diastolic blood pressure (DBP) + 1/3 [systolic blood pressure (SBP) – DBP].
data['MBP'] = round (data['ap_lo'] + 1/3 * ((data['ap_hi']) - (data['ap_lo'])))



# Dropping unnecessary columns
data.drop(['id', 'height', 'weight', 'ap_hi', 'ap_lo'], axis=1, inplace=True)

# One-hot encoding
categorical_cols = ['gender', 'cholesterol', 'gluc', 'smoke', 'alco', 'active']
data_encoded = pd.get_dummies(data, columns=categorical_cols, drop_first=True)

# Splitting data into features and target
X = data.drop('cardio', axis=1)
y = data['cardio']

# Selecting top features
# k = 10
# top_features = pd.Series(RandomForestClassifier().fit(X, y).feature_importances_, index=X.columns).nlargest(k).index
# X_top_features = X[top_features]

# Splitting data into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Creating a Random Forest classifier
rf_model = RandomForestClassifier(n_estimators=200,max_depth=5, random_state=42)

# Cross-validation
cv_scores = cross_val_score(rf_model, X_train, y_train, cv=7)

# Training the Random Forest classifier
rf_model.fit(X_train, y_train)

# Making predictions on the test set
y_pred = rf_model.predict(X_test)

# Calculating the accuracy score
accuracy = accuracy_score(y_test, y_pred)
print("Random:")
print("Cross-Validation Scores:", cv_scores)
print("Mean Cross-Validation Score:", cv_scores.mean())
print("Test Score:", accuracy)


import pickle
pickle.dump(rf_model, open('prediction.pkl', 'wb'))


loaded_model = pickle.load(open('prediction.pkl', 'rb'))
result = loaded_model.score(X_test, y_test)
print(result)