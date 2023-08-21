import React from 'react'
import img1 from '../../assets/newimage/Mask group.png'
import '../../styles/baner.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'
function Baner() {
  return (
    <div className='baner_all'>
        {/*part 1 */}
        <div className='baner_all_img'>
<img src={img1} alt="" className='baner_all_img-img'/>
        </div>
        {/*part 2 */}
        <div className='baner_all_right'>
            <h1 className='baner_all_right-h1'>آسان سرویس</h1>
            <p className='baner_all_right-p'>خدمات گارانتی محصولات خریداری شده از آسان مارکت در آسان سرویس <br/>، با پر کردن فرم گارانتی میتوانید از خدمات آسان سرویس بهره مند شوید </p>
            <button className='baner_all_right-btn'>
                <span><AiOutlineArrowLeft/></span>
                <p>مشاهده سایت</p>

            </button>
        </div>

    </div>
  )
}

export default Baner