import React from 'react'

import itemData from '../../assets/data/item'
import '../../styles/category.css'
function CategotyItems() {
  return (
    
           <div className='items'>
           
        {itemData.map(item=>(
          
          <div className='item_category'>
            
            <img src={item.img} alt="" className='img_category'/>
            
            
            <p className='dec-category'>{item.dec}</p>
            
            </div>
         
          
        ))}
        
        </div>
      
      
      

      
    


  )

  
}

export default CategotyItems