import React from 'react'
import Navbar from "../Navbar/Navbar"
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Headroom from 'react-headroom';


export default function MasterLayout() {
  return (
    <>
    <Headroom>
      <Navbar/>
    </Headroom>
      
    <div className="">
      
      <Outlet></Outlet>
      
    </div>
    <Footer/>
    </>
  )
}
