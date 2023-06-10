import './Edit.css'
import * as React from 'react';
import TextField from '@mui/material/TextField';

              
export default function Edit({isShowEdit,setIsShowEdit,data,id,name,description,discount,price}) {
   
  return (
  <div className='Edit' style={{display: isShowEdit ? 'block' : 'none'}}>
    <div className='popUp'>
      <form >
        <div className='Add-top'> 
          <h2> Edit Book </h2>
          <button className = "close" onClick = {()=> setIsShowEdit(false)}> Close </button> 
        </div> 
        
        <div className='container'>
          <div className='bookProp'>
            <TextField
              required
              label="Name"
              value={name}
              type='text' 
            />
             <TextField
            id="sec"
              required
              label="Description"
              type='text' 
              value={description}
            />

            <div className='Price-dis'>
              <TextField
                required
                label="Price"
                type='text' 
                value={price}
              />   
              <TextField
                label="discount"
                type='text' 
                value={discount}
              />
            </div> 

          </div>
            <div className='Book-info'>
              <div className='Book-cover'> </div>
              <div className='buttons'>
                <button className='Remove'> REMOVE </button>
                <button className='Replace'> REPLACE </button>
              </div>
            </div> 

        </div>
            <div className='Add-bottom'>
              <button className='Cancel'> CANCEL </button>
              <button className='Save'>SAVE</button>
            </div>
      </form>
    </div> 
  </div>
  );
}









































