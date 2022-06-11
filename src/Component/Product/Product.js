import React, { useContext } from 'react'
import './Product.css'

import {itemContext} from '../../Global/ProductsContext'
import Banner from '../Banner/Banner'

function Product() {
    const {sendProduct}=useContext(itemContext);
   
  return (
    <div>
        <Banner/>
        <div className='container mt-2'>
             <div className='row justify-content-between'>
                    {
    sendProduct.map((item,index)=>(
      
        <div className='col-lg-3 col-md-4 col-sm-5 text-center' key={index}>
            <div className='cover'>
            <img src={item.image} alt="apna mittee" className='img-fluid hwSet'/>
            {item.status==='hot'? <div className='hot'>Hot</div>:''}
            {item.status==='new'? <div className='new'>New</div>:''}
            </div>
       
        <h5>{item.name}</h5>
        <p
        style={
            {
                fontWeight:"400",
                opacity:"0.4",
                fontSize:"x-large",

            }
        }
        
        >${item.Price}</p>
         <button className='p-2 mb-3'
         style={{
             backgroundColor:"orangered",
             color:"white",
             fontWeight:"500",
             cursor:"pointer",
             border:"none",
             outline:"none",
             width:"100%"

         
        }}
         >Add to cart</button>


       </div>
      
        ))
        }
    
           
             </div>
        </div>
     

    </div>
  
  )
}

export default Product