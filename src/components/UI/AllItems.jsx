import React from 'react'
import allitems from '../../assets/data/allitems'
import '../../styles/allitems.css'
import {MdNavigateBefore} from 'react-icons/md'
import {MdOutlineNavigateNext} from 'react-icons/md'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import img1 from '../../assets/allimage/Group (2).png'
import img2 from '../../assets/allimage/Group (3).png'
import img3 from '../../assets/newimage/Group (8).png'
import img4 from '../../assets/allimage/Group (5).png'

const AllItems = () => {
  return (
    <div className='all'>
        {/*item1 */}
        <div className='title-top'>
            <h1 className='title_top_h1'>جدیدترین محصولات </h1>
            <p className='title_top_p'>برای مشاهده ی جدیدترین محصولات <span className='title_top_p_span'>اینجا کلیک کنید</span></p>
      </div>
      {/*item 2 */}

      <div className="all_item-top">
        <MdNavigateBefore className='all_item-top-bl'/>
        {allitems.map(item=>(
            <div className="all-top">
                <img src={item.img} alt="" />
                <p className='all_top_title'>{item.title}</p>
                <p className='all_top_name'>{item.name}</p>
                <span className='all_top_star'>{item.star}</span>
                <div className='all_top_last'>
                    <p className='all_top_last_p'>{item.price}</p>
                <span className='all_top_last_span'>{item.like}</span>        
                </div>
            </div>
        ))}
        <MdOutlineNavigateNext className='all_item-top-br'/>
      </div>
{/*item 3 */}
      <div className='mid_item'>
        <div className='mid_item_img'>
            <img src={img1} alt=""  className='mid_item_img_img'/>
            <img src={img2} alt="" className='mid_item_img_img2' />
            <img src={img3} alt="" className='mid_item_img_img3'/>
            <img src={img4} alt="" className='mid_item_img_img4'/>

        </div>
        <div className='mid_item-2'>
            <h1 className='mid_item_h1'>
            محبوب ترین های هوشمند این هفته
            </h1>
            <button className='mid_item_button'>
            مشاهده
                <AiOutlineArrowLeft />
            </button>

        </div>
      </div>

      {/*item 4*/}
      <div className='title_last'>
        <h1 className='title_top_h1'>مشاهده </h1>
        <p className='title_top_p'>برای مشاهده ی جدیدترین محصولات <span className='title_top_p_span'>اینجا کلیک کنید</span></p>
      </div>

      {/*item5 */}

      <div className="all_last_items">
      <MdNavigateBefore className='all_item-top-bl'/>
        {allitems.map(item=>(
            <div className="all_last_items2">
                <img src={item.img} alt="" />
                <p className='all_last_title'>{item.title}</p>
                <p className='all_last_name'>{item.name}</p>
                <span className='all_last_span'>{item.star}</span>
                <div className='all_top_last'>
                    <p className='all_top_last_p'>{item.price}</p>
                <span className='all_top_last_span'>{item.like}</span>        
                </div>
            </div>
            
        ))}
        <MdOutlineNavigateNext className='all_item-top-br'/>
      </div>
        
    </div>
  )
}

export default AllItems