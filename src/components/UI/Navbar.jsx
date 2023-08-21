import React from 'react'
import { useState } from 'react'
import {BiLogIn,BiPhoneCall} from 'react-icons/bi'
import{CiSearch} from 'react-icons/ci'
import {AiOutlineMenu,AiOutlineShop} from 'react-icons/ai'
import {TfiLayoutMediaOverlay} from 'react-icons/tfi'
import {RiHomeLine,RiShieldUserLine} from 'react-icons/ri'
import {MdOutlineWorkOutline} from 'react-icons/md'
import MegaMenu from './MegaMenu'
import img1 from '../../assets/newimage/Group 7105.png'

import '../../styles/navbar.css'

const Navbar = () => {
    const [isActive,setIsActive]=useState(false)
  return (
    <nav className='navigation'>
         <div className='navigation_all'>
            {/*part1 */}
            <div className='navigation_all-1'>
                <button className='navigation_all-btn'>
                    <p className=''>ثبت نام</p>
                    <div className=''></div>
                    <p className=''>ورود</p>
                    <BiLogIn className='navigation_all-btn-icon' />
                </button>
            </div>
            {/*part 2 */}
            <div className='navigation_all-2'>
                {/*2-1 */}
                <div className='navigation_all-2-1'>
                    <span>
                        <CiSearch/>
                    </span>

                </div>

                <div className='border_1'>

                </div>
                {/*2-2 */}
                <div className='navigation_all-2-2'>
                    {/*1*/}
                    <div className='navigation_all-2-2div'>
                        <p>درباره ما</p>
                        <span><RiShieldUserLine/></span>

                    </div>
                    {/*2 */}
                    <div className='navigation_all-2-2div'>
                    <p>تماس با ما</p>
                        <span><BiPhoneCall/></span>

                    </div>
                    {/*3 */}
                    <div className='navigation_all-2-2div'>
                    <p>همکاری با ما</p>
                        <span><MdOutlineWorkOutline/></span>

                    </div>
                    {/*4 */}
                    <div className='navigation_all-2-2div'>
                    <p>رسانه ها</p>
                        <span><TfiLayoutMediaOverlay/></span>

                    </div>
                    {/*5 */}
                    <div className='navigation_all-2-2div'>
                    <p>فروشگاه</p>
                        <span><AiOutlineShop/></span>

                    </div>
                    {/*6 */}
                    <div className='navigation_all-2-2div'>
                    <p>خانه</p>
                        <span><RiHomeLine/></span>

                    </div>

                </div>
                <div className='border_1'>

                </div>
                {/*2-3 */}
                <div className='navigation_all-2-3'>
                    <div className='navigation_all-2-3d'>
                        <p >دسته بندی کالاها</p>
                        <span onClick={(e)=>setIsActive(!isActive)}><AiOutlineMenu/></span>
                        {
                            isActive && <div className='mega-nav' onClick={(e)=>setIsActive(!isActive)}><MegaMenu/></div>
                        }
                    </div>

                </div>

            </div>

            {/*part 3 */}
            <div className='navigation_all-3'>
                <img src={img1} alt="" />
            </div>

         </div>
    </nav>
    
  )
}

export default Navbar