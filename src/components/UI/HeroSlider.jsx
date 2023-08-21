import React from 'react'
import img1 from '../../assets/allimage/Group 5972.png'
import '../../styles/heroslider.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {MdOutlineNavigateNext} from 'react-icons/md'
import {MdNavigateBefore} from 'react-icons/md'
const HeroSlider = () => {
  return (
    <div className='hero_baner'>
        <div className="hero-img-dec">
            <div className="left-hero-img">
                <span className='flash_next'><MdNavigateBefore className='next-f'/></span>
                <img src={img1} alt="" className='image-slider'/>

            </div>
            <div className="right-hero-dec"> 
            <div className="left">
                <span className='flash_back'><MdOutlineNavigateNext className='next-f'/></span>
            </div>
            <div className='right'>             
                <h1>پلتفرم<br/>خرید و فروش <span className='color-def'>محصولات دیجیتال</span></h1>
                <p className='decription'>اگر خریدار عمده محصولات دیجیتالی هستید پلتفرم ما محصولاتی متنوع را برای<br/> شما فراهم آورده که میتوانید از فروشگاه تهیه و خرید کنید</p>

                <div className='button-click'>
                    <button className='btn-button' >
                    
                        شروع کنید    
                        <span className='iconss'>
                        <AiOutlineArrowLeft/>
                        </span>
                    </button>
                </div>

                </div> 
                
                

            </div>
           
        </div>
       
    </div>
  )
}

export default HeroSlider