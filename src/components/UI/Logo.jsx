import React from 'react'

 import img2 from '../../assets/newimage/Group (10).png'
 import img3 from '../../assets/newimage/Group (11).png'
 import img4 from '../../assets/newimage/Group (12).png'
 import img5 from '../../assets/newimage/Group (13).png'
 import img6 from '../../assets/newimage/Group (14).png'
import '../../styles/logo.css'

function Logo() {
  return (
    <div className='logo_all'>
        <div className='logo_all_title'>
            <h1 className='logo_all_title_h1'>
            تولید کنندگان

            </h1>

        </div>
        <div className='logo_item_all'>
            
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" className='logo_6' />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
           


        </div>
    </div>
  )
}

export default Logo