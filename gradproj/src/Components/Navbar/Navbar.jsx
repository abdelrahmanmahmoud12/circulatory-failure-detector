// import React, {useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function NavBar() {
  return (
    <>
    <nav className={`${styles.nav} ${styles.navcolor} position-relative  navbar navbar-expand-lg`}>
  <div className="container-fluid mt-3 mb-3 ">
    <Link className= {`${styles.logo} navbar-brand text-white fw-bold ms-5`} to="">      <img className={styles.logo} src={require('../../images/PhotoRoom-20230708_220745.png')}alt="..." /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className={`${styles.navlink} nav-link fw-bold me-5`} aria-current="page" to=''>HOME</Link>
        </li>
        <li className="nav-item">
          <Link className={` ${styles.navlink} nav-link fw-bold me-5`} to="prediction">PREDICTION</Link>
        </li>
        <li className="nav-item">
          <Link className={`${styles.navlink} nav-link fw-bold me-5`} to="archive">ARCHIVE</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

 
     </>
     
  )
}

