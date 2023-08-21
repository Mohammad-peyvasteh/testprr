import React from 'react'
import imgData from '../../assets/data/image'
import '../../styles/image.css'
const Image = () => {
  return (
    <div className='image_items1'>
        {imgData.map(item=>(
            <div className='image_item_all'>
                <img src={item.img} alt="" className='image_all'/>
            </div>
        ))}
    </div>
  )
}

export default Image