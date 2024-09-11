import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
   <>
<header id='header' className={`${styles.header} mb-5 `}>
  <div className={`${styles.overlay} d-flex justify-content-center align-items-center `}>
    <div className="container">
      <div className="row mt-3">
        <div className="left col-lg-4 col-md-12 col-sm-12 text-white">
          <h1 className='mt-4 '>CircuCare</h1>
          <h3> Advanced AI-Powered Circulatory Failure Prediction.</h3>
          <p>Introducing CircuCare: Our AI-powered solution for precise circulatory failure prediction. By leveraging advanced algorithms and machine learning. CircuCare enables healthcare professionals to proactively identify potential failures </p>
          
       <button className={`${styles.wrapper}`}>
  <div className={styles.link_wrapper}>
    <Link className={styles.btn} to="prediction">TRY PREDICTION</Link>
    <div className={styles.icon}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
      </svg>
    </div>
  </div>
</button>



        </div>
<div className="right col-lg-6 offset-lg-2 col-md-12 col-sm-12  ">
 <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2700">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={require('../../images/wepik-export-20230619235851vSTb.jpeg')} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={require('../../images/wepik-export-20230619233537iEM7.jpeg')} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={require('../../images/wepik-export-2023062000345121kn.jpeg')} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev z-0" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next z-0" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


</div>
      </div>
    </div>
  </div>
</header>

<div id='about' className={`${styles.about} d-flex justify-content-center align-items-center py-5  `}>
<div className="container ">
<div>
  <h2 className={styles.about_h2}>ABOUT US</h2>
  <div className= {styles.brdr1} />
  <div className={styles.brdr2} />
  <div className={styles.brdr4} />
</div>

  <div className="row justify-content-center align-items-center">
  <div className={`${styles.aboutImg} col-lg-5 col-md-12 mt-5`}>
      <img src={require('../../images/160.jpg')} className="w-100" alt=''/>
      </div>
    <div className={`${styles.aboutCaption} col-lg-6 col-md-12 shadow p-5 mt-5`}>
      <h2>CircuCare</h2>
      <p className={styles.about_p}>At Circucare, we are dedicated to making a significant impact on the early detection and intervention of circulatory failure, a critical condition with potentially severe consequences for patients. Through our innovative web application, we have developed a system that utilizes machine learning to predict circulatory failure in high-risk patients. Our user-friendly platform empowers healthcare providers to make informed decisions based on data-driven predictions. Join us on our mission to transform patient care and make a lasting impact on the field of circulatory failure detection and treatment.</p>
    </div>

  </div>
</div>
</div>

{/*------contact -------*/}
<section id="contact" className={`${styles.contact} mt-5 pb-5`}>
  <div className={styles.layer2}>
  <div>
  <h2 className={`${styles.contact_h2} pt-4`}>CONTACT US</h2>
  <div className= {styles.brdr1} />
  <div className={styles.brdr2} />
  <div className={styles.brdr4} />
</div>
    <div className="container">
      <div className="row pt-5 ps-5 pe-5 bg-white shadow">
        <div className="col-lg-6">
          <div className={styles.left_contact}>
            <h3>Send Us a Message</h3>
            <div className="brdr5" />
            <form>
              <input type="text" name="name" placeholder="Name" className="d-block" required />
              <input type="email" name="mail" placeholder="Your mail" className="d-block" required />
              <input type="text" name="subject" placeholder="Subject" className="d-block" required />
              <textarea rows={5} placeholder="Message" name="message" className="d-block ps-2" required defaultValue={""} />
              <button type="submit" className="d-block m-auto my-5 px-4 py-2 rounded-5">Send Message</button>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          <div className={styles.right_contact}>
            <h3>Get in Touch</h3>
            <div className="brdr5" />
            <h4>We would love to hear from you! If you have any questions, feedback, or inquiries, please don't hesitate to reach out to us. You can contact us through the following channels:</h4>
            <p> <i className={`${styles.icons_contact} fa-solid fa-location-dot`} />Address: Nile University, Sheikh Zayed, Giza, Egypt.</p>
            <p> <i className={`${styles.icons_contact} fa-solid fa-mobile-screen`} />Phone: 16453</p>
            <p><i className={`${styles.icons_contact} fa-solid fa-envelope`} />Email: Nile.University@nu.edu.eg</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




   
<a href="#header"><i className={`${styles.arrow} fa-solid fa-arrow-up rounded-pill`}></i></a>
   </>

  )
}
