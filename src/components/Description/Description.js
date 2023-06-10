import './Description.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Description ({data}) {
    const [currentProduct,setCurrentProduct] = useState(null)
    const params = useParams()

    useEffect(()=>{
        setCurrentProduct({...data.find( el => el.id === params.id)})
    },[])

return(
    <div className='Description'>
        <img src={currentProduct?.img} className='Cover'/>
        <div className='Desc'>
            <h2> {currentProduct?.name}</h2>
            <div className='Prices'>
              <p style = {{textDecorationLine:'line-through', color: 'black'}}>{currentProduct?.oldPrice} </p>
              <p style = {{color:'red'}}> {currentProduct?.price} </p>
            </div>
            <h3>Description</h3>
            <p>{currentProduct?.description}
            </p> 
        </div>      
    </div>
    )   
}
export default Description