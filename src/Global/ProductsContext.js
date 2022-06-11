import React,{createContext, useState } from 'react'
import MitteeA from '../Images/mittee-1.jpg'
import MitteeB from '../Images/mittee-2.jpg'
import MitteeC from '../Images/mittee-3.jpg'
import MitteeD from '../Images/mittee-4.jpg'
import MitteeE from '../Images/mittee-5.jpg'
import MitteeF from '../Images/mittee-6.jpg'
import MitteeG from '../Images/mittee-7.jpg'
import MitteeH from '../Images/mittee-8.jpg'


 export const itemContext= createContext();

function ProductsContext(props) { 

   const [item]=useState([
{
    id:"1",name:"Cup",Price:120,image: MitteeG, status:"new"
},
{
    id:"2",name:"Plate",Price:74,image: MitteeA, status:"hot"
},
{
    id:"3",name:"Rolling Pin",Price:124,image: MitteeF, status:"hot"
},

{
    id:"4",name:"Stove",Price:600,image: MitteeB, status:"new"
},
{
    id:"5",name:"Bowl",Price:67,image: MitteeH, status:"new"
},
{
    id:"6",name:"Jar",Price:90,image: MitteeD, status:"new"
},
{
    id:"7",name:"Jug",Price:80,image: MitteeE, status:"hot"
},

{
    id:"8",name:"Griddle",Price:99,image: MitteeG, status:"new"
},
   
    


   ]);
  return (
      <>
     

    <itemContext.Provider value={{sendProduct:[...item]}} >
  {props.children}
    </itemContext.Provider>

    </>
  )
}

export default ProductsContext