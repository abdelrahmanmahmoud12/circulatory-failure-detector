import React from 'react'
import NotFoundErr from '../../images/6324728.jpg'

export default function NotFound() {
  return (
    <>
    <div className=" d-flex justify-content-center align-items-center ">
    <img className='w-50' src={NotFoundErr} alt="Not Found" />
    </div>
    </>
  )
}
