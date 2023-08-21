import React from 'react'
import '../../styles/newcolection.css'
import colectiondata from '../../assets/data/colectuon'
import img1 from '../../assets/allimage/Group 134.png'
import {AiFillStar,AiOutlineHeart} from 'react-icons/ai'

const NewColection = () => {
  return (
    
    <div className='new_colectin'>
        <div className='new_col-l'>
{colectiondata.map(item=>(
    <div className='new-col-l-l'>
        <img src={item.img} alt="" className='image-list' />
        <p className='title_items'>{item.title}</p>
        <p className='name_items'>{item.name}</p>
        <span className='icons-items_s'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span>
        <div className='limit_like'>
            <p>{item.price}</p>
            <AiOutlineHeart className='like_icons'/>
        </div>
    </div>
    
))}
        </div>
        <div className='img_new_cl'>
            <img src={img1} alt="" />

        </div>
    </div>
    
  )
}

export default NewColection