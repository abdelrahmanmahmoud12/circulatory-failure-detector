# Importing necessary libraries
import uvicorn
import pickle
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd


# Initializing the fast API server
app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Loading up the trained model
model = pickle.load(open('../model/prediction.pkl', 'rb'))

# Defining the model input types
class Patient(BaseModel):
    age: int
    gender: int
    bmi: float
    MBP:float
    cholesterol: int
    gluc: int
    smoke: int
    alco: int
    active: int
    


# Setting up the home route
@app.get("/")
def read_root():
    return {"data": "Welcome to circulatory failure prediction model"}

# Setting up the prediction route
@app.post("/prediction/")
async def get_predict(data: Patient):
    sample = [[
        data.age * 365.25,
        data.gender,
        data.cholesterol,
        data.gluc,
        data.smoke,
        data.alco,
        data.active,
        data.bmi,
        data.MBP,
       

    ]]
    print(sample[0])
    # sample[0]=data.age 
    icu = model.predict(sample).tolist()[0]

    return {
        "data": {
            'prediction': icu,
            'interpretation': 'patient needs ICU.' if icu == 1 else 'patient does not need ICU.'
        }
        
    }
    
    
# Configuring the server host and port
if __name__ == '__main__':
    uvicorn.run(app, port=8080, host='0.0.0.0')