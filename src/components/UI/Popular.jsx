import React from 'react'
import '../../styles/popular.css'
import { popularData } from '../../assets/data/popular'
import { banerPopuler } from '../../assets/data/popular'
const Popular = () => {
  return (
    <div className='popular-1'>
    <div className='popular'>
        {/*Part 1 */}
        <div className='popular_part1'>
            <h1 className='popular_part1_h1'>دسته بندی های پر طرفدار</h1>
        </div>
        {/*Part 2*/}
        <div className='popular_all'>
            {popularData.map(item=>(
                <div className='popular_all_items'>
                    <img src={item.img} alt="" />
                    <p>{item.title}</p>

                </div>
            ))}
        </div>
        </div>
        {/*Part 3 */}
        <div className='popular_title_part3'>
            <h1 className='popular_title_h1'>رسانه و مطالب </h1>
            <p className='popular_title_p'>برای مشاهده ی آخرین مطالب رسانه و مطالب <span className='popular_title_span'>اینجا کلیک کنید</span></p>

        </div>
        {/*Part 4 */}
        <div className='popular_baner'>
            {banerPopuler.map(item=>(
                <div className="popular_baner_item">
                    <img src={item.img} alt="" className="popular_baner_img" />
                    <p className="popular_baner_title">{item.titel}</p>
                    <p className="popular_baner_title2">{item.title2}</p>
                    <p className='popular_baner-dec'>{item.dec}</p>
                    <div className='popular_baner_end'>
                    <p className='popular_baner_date'>{item.date}</p>
                        <div className='popular_baner_end_2'>
                        <p className='popular_baner_btn'>{item.btn}</p>
                        <span className='popular_baner_span'>{item.btn1}</span>
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>

    
    </div>
  )
}

export default Popular