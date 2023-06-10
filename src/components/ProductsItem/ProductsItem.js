import './ProductsItem.css'
import { useNavigate } from 'react-router-dom'
import Edit from '../Edit/Edit'


function ProductsItem({id,img,price,description,oldPrice,discount,name,data,setData,isShowEdit,setIsShowEdit}) {
    const navigate = useNavigate()
    const remItem = (id) => {
        console.log(id);
          setData([
              ...data.filter(el => el.id !== id)
          ])
      }
     
    return(
        <div  className='book' >    
            <div className='booktop'>
                <span> {discount} % </span>
                <div className='booktop-right'>
                    <button onClick={() => {setIsShowEdit(true)}}> Edit </button>
                    <button onClick = {() => remItem(id)}>X</button>
                </div> 
            </div>
            <img src = {img} alt = ''/>
            <div className = "bookbottom">
                <p className='code'> {name}
                </p>
                <div className='book-price'>
                    <p className='old-price'> {oldPrice} </p>
                    <p className='new-price'> {price} </p>
                </div> 
            </div>
            <button onClick={() => navigate(id)}>Books description</button>   
            <Edit   {...{isShowEdit,setIsShowEdit}}key = {id}data = {data} setData = {setData} name={name} price ={price} description ={description} discount= {discount}/> 
        </div>
    ) 
} 

 export default ProductsItem   
    
