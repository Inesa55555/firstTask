import { useState } from 'react'
import './Header.css'
import Add from '../Add/Add';

function Header({data,setData}){
    
   const [isShow,setIsShow] = useState(false)

return( 
 <div className = 'Header'>
    <h1> BOOK STORE </h1> 
    <div className='nav'>
      <div className='svg'>
        <input type = 'search' placeholder = 'search' />
        <svg className='FilterSectionSearchSvg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
         </svg>
      </div>
        <button onClick={() => setIsShow(true)}>Add book</button> 
    </div>
    
    <Add {...{isShow,setIsShow}} data={data} setData={setData} />
 </div>  
 )
}

export default Header