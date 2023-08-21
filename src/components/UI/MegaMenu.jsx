import React from 'react'
import {BiPhoneCall} from 'react-icons/bi'
import {TbDeviceAirpods} from 'react-icons/tb'
import {MdCable} from 'react-icons/md'
import{CiSearch} from 'react-icons/ci'
import {BsLaptop} from 'react-icons/bs'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {AiOutlineMenu,AiOutlineShop,AiOutlineUser,AiOutlineApple} from 'react-icons/ai'
import {TfiLayoutMediaOverlay} from 'react-icons/tfi'
import {RiHomeLine,RiShieldUserLine,RiHardDrive3Line} from 'react-icons/ri'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {CgShoppingCart} from 'react-icons/cg'
import {LuGamepad} from 'react-icons/lu'
import {FiSpeaker} from 'react-icons/fi'
import img1 from '../../assets/newimage/Group 7105.png'
import '../../styles/megamenu.css'
function MegaMenu() {
  return (
    <div className='MegaMenu1'>
    <div className='MegaMenu'>
        {/*part 1 */}
        <div className='MegaMenu_left'>
            <div className='MegaMenu_left_item1'>
                <span className='MegaMenu_left_item1-span'>
                    <CgShoppingCart className='MegaMenu_left_item1-icon'/>
                    <p className='MegaMenu_left_item1-p'>3</p>

                </span>
            </div>
            <div className='border_1'>

            </div>
            <div className='MegaMenu_left_item2'>
                <button className='MegaMenu_left_item2-btn'>
                    <p>حساب کاربری</p>
                    <AiOutlineUser className='MegaMenu_left_item2-icon'/>
                </button>
            </div>

        </div>
        {/*part 2 */}
        <div className='MegaMenu_between'>
            {/*part2-1 */}
            <div className='MegaMenu_between_2-1'>
                <span>
                <CiSearch/>
                </span>

            </div>

            <div className='border_1'>

            </div>
            {/*part2-2 */}
            <div className='MegaMenu_between_2-2'>
                {/*1 */}
                <div className='MegaMenu_between_2-2-1'>
                    <p className='p-size-b'>درباره ما</p>
                    <RiShieldUserLine className='icons11'/>

                </div>
                {/*2 */}
                <div className='MegaMenu_between_2-2-1'>
                    <p className='p-size-b'>تماس با ما</p>
                    <BiPhoneCall className='icons11'/>

                </div>
                {/*3*/}
                <div className='MegaMenu_between_2-2-1'>
                    <p className='p-size-b'>همکاری با ما</p>
                    <MdOutlineWorkOutline className='icons11'/>

                </div >
                {/*4 */}
                <div className='MegaMenu_between_2-2-1'>
                    <p className='p-size-b'>رسانه ها</p>
                    <TfiLayoutMediaOverlay className='icons11'/>

                </div>
                {/*5 */}
                <div className='MegaMenu_between_2-2-1'>
                    <p className='p-size-b'>فروشگاه</p>
                    <AiOutlineShop className='icons11'/>

                </div>
                {/*6*/}
                <div className='MegaMenu_between_2-2-1'>
                    <p className='p-size-b'>خانه</p>
                    <RiHomeLine className='icons11'/>

                </div>

            </div>

            <div className='border_1'>

</div>
            {/*part2-3 */}
            <div className='MegaMenu_between_2-3'>
                <p className='p-size-b'>دسته بندی کالاها</p>
                <AiOutlineMenu className='icons11'/>

            </div>
        </div>
        {/*part3 */}
        <div>
            <img src={img1} alt="" />
        </div>
        {/*part 4 */}
        <div>
            
        </div>
    </div>
    <div className='item_dropdown'>
        {/*1 */}
        <div className='item_dropdown_item'>
            <p className='item_dropdownp'>کامپیوتر</p>
            <HiOutlineDesktopComputer/>

            

        </div>
        {/*2 */}
        <div className='item_dropdown_item'>
            <p>لوازم جانبی موبایل</p>
            <TbDeviceAirpods/>

        </div>
        {/*3 */}
        <div className='item_dropdown_item'>
            <p>ذخیر سازی</p>
            <RiHardDrive3Line/>

        </div>
        {/*4 */}
        <div className='item_dropdown_item'>
            <p>کنسول بازی</p>
            <LuGamepad/>

        </div>
        {/*5 */}
        <div className='item_dropdown_item'>
            <p>کابل و تبدیل</p>
            <MdCable/>

        </div>
        {/*6 */}
        <div className='item_dropdown_item'>
            <p>صوتی و تصویری</p>
            <FiSpeaker/>

        </div>
        {/*7 */}
        <div className='item_dropdown_item'>
            <p>محصولات اپل</p>
            <AiOutlineApple/>

        </div>
        {/*8 */}
        <div className='item_dropdown_item'>
            
            <p>تبلت و لپ تاپ</p>
            <BsLaptop/>
            
        </div>

    </div>
    </div>
  )
}

export default MegaMenu