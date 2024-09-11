import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function Archive() {

// ARCHIVE SAVING
const [patientsData, setPatientsData] = useState([]);

let getPatientsData=async()=>{
 let {data}= await axios.get('http://localhost:8000/patients')
  setPatientsData(data.Data)
  console.log(data.Data);
}
useEffect(() => {
  getPatientsData()
}, [])

  return (
    <>
    <section>
      <div className="container d-flex justify-content-cente">
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">Cholesterol</th>
      <th scope="col">Glucose</th>
      <th scope="col">Smoking</th>
      <th scope="col">Alcohol Intake</th>
      <th scope="col">Active</th>
      <th scope="col">Body Mass Index</th>
      <th scope="col">Blood Pressure</th>
      <th scope="col">Prediction</th>
    </tr>
  </thead>
<tbody>
 
    {patientsData.map((patient,index)=>
    
    <tr key={index}>
      <td className='text-center'>{patient.id}</td>
      <td >{patient.name}</td>
      <td className='text-center'>{patient.age}</td>
      <td className='text-center'>{patient.gender}</td>
      <td className='text-center'>{patient.cholesterol}</td>
      <td className='text-center'>{patient.gluc}</td>
      <td className='text-center'>{patient.smoke}</td>
      <td className='text-center'>{patient.alco}</td>
      <td className='text-center'>{patient.active}</td>
      <td className='text-center'>{patient.bmi}</td>
      <td className='text-center'>{patient.MBP}</td>
      <td className='text-center'>{patient.prediction}</td>
      </tr>
    
    )}
  
</tbody>
</table>
      </div>
    </section>
    
    </>
  )
}
