import React from 'react'
import Header from '../components/Header/Header'
import Products from '../components/Products/Products'


function HomeWrapper({data,setData}) {
   
  return (
    <div>
      <Header data = {data}  setData = {setData} />
      <Products data = {data} setData = {setData} />
    </div>
  )
}

export default HomeWrapper