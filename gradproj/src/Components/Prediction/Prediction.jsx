import React, { useState } from 'react'
import styles from './Prediction.module.css'
import axios from 'axios'


export default function Prediction() {
const [name, setname] = useState('')
const [age, setAge] = useState('')
const [gender, setGender] = useState('')
const [bmi, setbmi] = useState('')
const [MBP, setMBP] = useState('')
const [cholesterol, setCholesterol] = useState('')
const [gluc, setGluc] = useState('')
const [smoke, setSmoke] = useState('')
const [alco, setAlco] = useState('')
const [active, setActive] = useState('')





const handleSubmit = async (e) => {
  e.preventDefault()
  const params = { age,gender, bmi, MBP,cholesterol,gluc,smoke,alco,active }
  convertToNumber()
  axios
  .post('http://localhost:8080/prediction', params)
  .then((res) => {
    const data = res.data.data

    // const parameters = JSON.stringify(params)
    const msg = `Interpretation: ${data.interpretation}\n`   // Prediction: ${data.prediction}\n\n
      alert(msg)
    
    // reset()
  })
  .catch((error) => alert(`Error: ${error.message}`))
}


// const reset = () => {
// setAge('')
// setGender('')
// setbmi('')
// setMBP('')
// setCholesterol('')
// setGluc('')
// setSmoke('')
// setAlco('')
// setActive('')
// }
function convertToNumber() {
  var selectElement = document.getElementById("mySelect");
  var selectedValue = selectElement.value;
  selectElement.value = parseInt(selectedValue);
}


const handleArchive = (e) => {
  e.preventDefault();
  const data = {
    name: name,
    age: age,
    gender: gender,
    bmi: bmi,
    MBP: MBP,
    cholesterol: cholesterol,
    gluc: gluc,
    smoke: smoke,
    alco: alco,
    active: active,
  };
  axios.post('http://localhost:8000/prediction',data).then(function(response){
    console.log(response.data);
  })
  .catch(function(error){
    console.log(error);
  });
};

window.alert = function (message, timeout=null){
  const alert = document.createElement('div');
  const alertButton = document.createElement('button')
  alertButton.innerText= "OK";
  alert.classList.add('alert');
  alert.setAttribute('style',`
      position:fixed;
      top:150px;
      left:50%;
      padding:20px;
      border-radius: 10px;
      box-shadow: 0 10px 5px 0 #00000022;
      display:flex;
      flex-direction:column;
      border: 1px solid #333;
      transform: translateX(-50%);
      background:white;
      color: black;
      font-family: 'Kanit', sans-serif;
      font-size: 18px
  `);
  alertButton.setAttribute('style',`
    border: 1px solid #333;
    background: white;
    border-radius:5px;
    padding: 5px;
  `);
  alert.innerHTML= `<span style="padding:10px">${message}</span>`;
  alert.appendChild(alertButton);
  alertButton.addEventListener('click', (e)=>{
    alert.remove()
  });
  // if(timeout !=null){
  //   setTimeout(() => {
  //       alert.remove();
  //   }, Number (timeout));
  // }
  document.body.appendChild(alert);
}

  return (
    <>
    <section id='prediction' className={`${styles.prediction} mt-`}>
    <div className="container-fluid ">
<div>
<h2 className={`${styles.prediction_h2}`}>Prediction Tool</h2>
<div className= {styles.brdr1} />
<div className={styles.brdr2} />
<div className={styles.brdr4} />
</div>
      <div className="row">
        <div className={`${styles.left_form}  rounded-3 pt-5 pb-4 mb-5 col-lg-4 offset-lg-1 `}>
      <form onSubmit={(e) => handleSubmit(e)}    className={styles.form}>
          <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-hospital-user "></i></span>
          <input required  type="text" value={name} onChange={(e) => setname(e.target.value)} name='name' className={`${styles.name} form-control shadow-none`} placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" />
          </div>
          <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-hospital-user "></i></span>
          <input required id='age' value={age} onChange={(e) => setAge(e.target.value)}  type="number" className="form-control shadow-none" name='age' placeholder="Age" aria-label="Age" aria-describedby="basic-addon1" />
          </div>
          {/* <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-venus-mars"></i></span>
          <input required id='gender' value={gender} onChange={(e) => setGender(e.target.value)} type="number" className="form-control shadow-none" name='gender' placeholder="Gender" aria-label="gender" aria-describedby="basic-addon1" />
          </div> */}
          <select onChange={(e) => setGender(e.target.value)} id="mySelect" name="gender" className="form-select mb-3 shadow-none" aria-label="Default select example">
          <option selected disabled>Gender</option>
          <option value = "1" >Male</option>
          <option value="2">Female</option>
          </select>
          <select onChange={(e) => setCholesterol(e.target.value)} id="mySelect" name="cholesterol" className="form-select mb-3 shadow-none" aria-label="Default select example">
          <option selected disabled>Cholesterol</option>
          <option value = "1" >Normal</option>
          <option value="2">Above Normal</option>
          <option value="3">Well above normal</option>
          </select>
          {/* <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-droplet text-danger"></i></span>
          <input required id='cholesterol' value={cholesterol} onChange={(e) => setCholesterol(e.target.value)}  type="number" className="form-control shadow-none" name='cholesterol' placeholder="Cholesterol" aria-label="Diastolic" aria-describedby="basic-addon1" />
          </div> */}
          {/* <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-droplet text-danger"></i></span>
          <input required id='gluc' value={gluc} onChange={(e) => setGluc(e.target.value)}  type="number" className="form-control shadow-none" name='gluc' placeholder="Glucose" aria-label="Diastolic" aria-describedby="basic-addon1" />
          </div> */}
          <select onChange={(e) => setGluc(e.target.value)} id="mySelect" name="gluc" className="form-select mb-3 shadow-none" aria-label="Default select example">
          <option selected disabled>Glucose</option>
          <option value = "1" >Normal</option>
          <option value="2">Above Normal</option>
          <option value="3">Well above normal</option>
          </select>
          <select onChange={(e) => setSmoke(e.target.value)} id="mySelect" name="smoke" className="form-select mb-3 shadow-none" aria-label="Default select example">
          <option selected disabled>Smoking</option>
          <option value = "1" >Yes</option>
          <option value="0">No</option>
          </select>
          <select onChange={(e) => setAlco(e.target.value)} id="mySelect" name="alco" className="form-select mb-3 shadow-none" aria-label="Default select example">
          <option selected disabled>Alcohol Intake</option>
          <option value = "1" >Yes</option>
          <option value="0">No</option>
          </select>
          {/* <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-droplet text-danger"></i></span>
          <input required id='smoke' value={smoke} onChange={(e) => setSmoke(e.target.value)}  type="number" className="form-control shadow-none" name='smoke' placeholder="Smoking" aria-label="Diastolic" aria-describedby="basic-addon1" />
          </div> */}
          {/* <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-droplet text-danger"></i></span>
          <input required id='alco' value={alco} onChange={(e) => setAlco(e.target.value)}  type="number" className="form-control shadow-none" name='alco' placeholder="Alcohol intake" aria-label="Diastolic" aria-describedby="basic-addon1" />
          </div> */}
          {/* <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-droplet text-danger"></i></span>
          <input required id='active' value={active} onChange={(e) => setActive(e.target.value)}  type="number" className="form-control shadow-none" name='activity' placeholder="Activity" aria-label="Diastolic" aria-describedby="basic-addon1" />
          </div> */}
          <select onChange={(e) => setActive(e.target.value)} id="mySelect" name="active" className="form-select mb-3 shadow-none" aria-label="Default select example">
          <option selected disabled>Physical Activity</option>
          <option value = "1" >Yes</option>
          <option value="0">No</option>
          </select>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-weight-scale "></i></span>
          <input required id='bmi' value={bmi} onChange={(e) => setbmi(e.target.value)}  type="number" className="form-control shadow-none" name='bmi' placeholder="Body mass index" aria-label="Weight" aria-describedby="basic-addon1" />
          </div>
          <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-droplet text-danger"></i></span>
          <input required id='MBP' value={MBP} onChange={(e) => setMBP(e.target.value)} type="number" className="form-control shadow-none" name='MBP' placeholder="Blood Pressure" aria-label="Diastolic" aria-describedby="basic-addon1" />
          </div>


        


            <div className="div text-center">
            <button type="submit" className={`${styles.pred_btn} btn btn-primary py-2 px-5 me-4`}>Predict</button>
            <button onClick={handleArchive} className={`${styles.pred_btn} btn btn-primary py-2 px-5`}>Archive data</button>  
            </div>
            
          </form>
        </div>
<div className="right_desc col-lg-3 offset-lg-4">
  <p className={styles.req}>Requirements Description</p>
<div className="accordion accordion-flush" id="accordionFlushExample">
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed shadow-none shadow-none py-2 px-2 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
    <i class="fa-solid fa-hospital-user pe-1"></i> Name
    </button>
  </h2>
  <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">In this field, we'd like you to provide the full name of the patient, including both their first name and surname.</div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed shadow-none shadow-none py-2 px-2 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
    <i className="fa-solid fa-hospital-user pe-1"></i> Age
    </button>
  </h2>
  <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body"> In this field, we'd like you to provide the patient's age in Years</div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed shadow-none shadow-none py-2 px-2 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
    <i class="fa-solid fa-venus-mars pe-1"></i> Gender
    </button>
  </h2>
  <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">In this field, we'd like you to provide the patient's gender.</div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed shadow-none shadow-none py-2 px-2 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
    <i className="fa-solid fa-weight-scale pe-1"></i> Body Mass Index
    </button>
  </h2>
  <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">In this field, we'd like you to provide the patient's body mass index. This value is calculated based on their weight and height.</div>
  </div>
</div>
{/* <div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed shadow-none shadow-none py-2 px-2 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
    <i class="fa-solid fa-weight-scale pe-1"></i> Weight
    </button>
  </h2>
  <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
  </div>
</div> */}
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed shadow-none shadow-none py-2 px-2 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
    <i className="fa-solid fa-droplet text-danger pe-1"></i> Blood Pressure
    </button>
  </h2>
  <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">In this field, we'd like you to provide the patient's Blood pressure. typically represented as two values (e.g., systolic over diastolic pressure).</div>
  </div>
</div>
{/* <div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed shadow-none shadow-none py-2 px-2 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
    <i class="fa-solid fa-droplet text-danger pe-1"></i> Diastolic Blood Pressure
    </button>
  </h2>
  <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
  </div>
</div> */}
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed shadow-none shadow-none py-2 px-2 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
    <i className="fa-solid fa-droplet text-danger pe-1"></i> Cholesterol
    </button>
  </h2>
  <div id="flush-collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">In this field, we'd like you to provide the patient's choleterol level We categorize it into three levels: normal (Less than 200mg/dL), above normal (200-239 mg/dL), and well above normal (240mg/dL and above).</div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed shadow-none shadow-none py-2 px-2 bg-transparent " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
    <i className="fa-solid fa-droplet text-danger pe-1"></i> Glucose
    </button>
  </h2>
  <div id="flush-collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">In this field, we'd like you to provide the patient's choleterol level We categorize it into three levels: normal ( Less than 140 mg/dL), above normal (140-199 mg/dL), and well above normal (200 mg/dL and above).</div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed shadow-none shadow-none py-2 px-2 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
    <i className="fa-solid fa-smoking pe-1"></i> Smoking
    </button>
  </h2>
  <div id="flush-collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">In this field, we'd like you to provide the patient's smoking state (Yes / No)</div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed shadow-none shadow-none py-2 px-2 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseEleven">
    <i className="fa-solid fa-wine-bottle pe-1"></i> Alcohol intake
    </button>
  </h2>
  <div id="flush-collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">In this field, we'd like you to know if the patient consume alcohol (Yes / No)</div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed shadow-none shadow-none py-2 px-2 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwelve" aria-expanded="false" aria-controls="flush-collapseTwelve">
    <i className="fa-solid fa-person-running pe-1"></i> Physical Activity
    </button>
  </h2>
  <div id="flush-collapseTwelve" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">In this field, we'd like to find out if the patient engages in regular exercise or physical activities.</div>
  </div>
</div>
</div>

        </div>
      </div>
    </div>
    </section>

  </>  
  )
}





