import './Products.css'
import ProductsItem from "../ProductsItem/ProductsItem"
import Edit from '../Edit/Edit'
import { useState } from 'react'


function Products({data,setData}) {
    const [isShowEdit,setIsShowEdit] = useState(false)

    return(
        <div className='Main'>
            {data.map(el => (
                <ProductsItem {...{isShowEdit,setIsShowEdit}} data ={data} setData = {setData} key={el.id} id={el.id} img={el.img} price = {el.price} oldPrice = {el.oldPrice} discount = {el.discount} name={el.name} description={el.description.slice(0,60)}/>
                ))}
                {/* <Edit   {...{isShowEdit,setIsShowEdit}}data = {data} setData = {setData} />  */}
        </div>
    )
}
 export default Products
