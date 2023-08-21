import React from 'react'
import '../../styles/offcolection.css'
import img3 from '../../assets/allimage/111 1.png';
import img1 from '../../assets/allimage/toppng 4.png'
import img2 from '../../assets/allimage/kisspng-iphone-xs-apple-unlocked-5-8-in-iphone-ipad-5d028e2b316052 1 (2).png'
import {AiOutlineArrowLeft} from 'react-icons/ai'
const OffColection = () => {
  return (
    <div className='off_colection'>
        <div className='left_off'>
          <div className="left2_img">
            <img src={img3} alt="" />

          </div>
          <div className="right2_dec">
            <h1 className=''>
               هندزفری  بیسیم <span className='p2_dec'>شارک </span>

            </h1>
            <p className='r-decription'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم 

            </p>
            <button className='btn_left'>
                  مشاهده  
                  <AiOutlineArrowLeft className='icons-offf'/>
            </button>

          </div>

        </div>
        <div className='right_off'>
            <div className='left_img'>
            <img src={img2} alt="" className='img_2'/>
            <img src={img1} alt="" className='img_1'/>
                
            </div>
            <div className='right-dec'>
                <h1>
                 فروش ویژه <span className='consolgame'>کنسول بازی </span><br/>ومحصولات <span className='apple'>اپل</span>
                </h1>
                <p className='decription_p'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم 
                </p>
                <button className='btn_right'>
                مشاهده
                <AiOutlineArrowLeft className='icons-ff'/>
                </button>

            </div>

        </div>

    </div>
  )
}

export default OffColection