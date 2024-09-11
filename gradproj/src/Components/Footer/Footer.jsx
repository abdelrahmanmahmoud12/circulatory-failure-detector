import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
  <footer className='pt-4 pb-3 bg-dark text-white text-center'>
      
<div className={`${styles.footer_container}`}>
  <h4 className='h5 py-4 text-center'>Copy Right 2023 © By <span className={styles.nu}>NU Students.</span> All Rights Reserved</h4>
</div>
  </footer>
    </>
  
  )
}
