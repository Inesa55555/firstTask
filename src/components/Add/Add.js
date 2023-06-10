import './Add.css'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system'
import { useState } from "react";
              
export default function FormPropsTextFields({isShow,setIsShow,data,setData}) {
  const [txt, setTxt] = useState('')
  const [desc,setDesc] = useState('')
  const [price, setPrice] = useState('')
  const [disc, setDisc] = useState('')
  
  const handleChange1 = event => {
    const result = event.target.value.replace(/[^a-z]/gi, '');
    setTxt(result);
  };

  const handleChange2 = event => {
    const result = event.target.value.replace(/[^a-z]/gi, '');
    setDesc(result);
  };

  const handleChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setDisc(e.target.value);
    }
  };
  

  function addItem(e){
    e.preventDefault()
    if(txt !== '',desc !== '',price !== '',disc !==''){
        setData([
        {
            id: new Date().getTime().toString(),
            name: txt,
            description: desc,
            price: price,
            discount: disc
        },
        ...data
        ])
        setTxt('')
        setDesc('')
        setPrice('')
        setDisc('')
    }
  }

  return (
  <div className='Add' style={{display: isShow ? 'block' : 'none'}}>
    <div className='popUp'>
    <form onSubmit={addItem}>
      <div className='Add-top'> 
        <h2> Add Book </h2>
        <button className = "close" onClick = {()=> setIsShow(false)}> Close </button> 
      </div> 
       
      <div className='container'>
        <div className='bookProp'>
          <TextField
            required
            label="Name" 
            type='text'
            value={txt}
            //  onChange={(e) => setTxt(e.target.value)}
            inputProps={{ maxLength: 200 }}
            onChange={handleChange1}
          />
          <TextField
           id="sec"
            required
            label="Description"
            onChange={handleChange2}
            type='text'
            value={desc} 
            // onChange={(e) => setDesc(e.target.value)}
            inputProps={{ maxLength: 400 }}
          />

        <div className='Price-dis'>
          <TextField
            required
            label="Price"
            InputProps={{
              name: 'inputProps',
              type: 'number'
            }}
            type='text' 
            value={price}
             onChange={(e) => setPrice(e.target.value)}
           />   
          <TextField
            label="discount"
            variant="outlined"
            onChange={(e) => handleChange(e)}
            type='text'
            value={disc} 
            //  onChange={(e) => setDisc(e.target.value)}
           />
           
          </div>
        </div>
        <div className='Upload'>
          <p className='Drag'>CLICK HERE OR <br/> DRAG AND DROP TO UPLOAD THE IMAGE  </p>  
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






























// export default function FormPropsTextFields() {
//   return (
//     <div>
//     <Box
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <div>
//         <TextField
//           required
//           id="outlined-required"
//           label="Required"
//           defaultValue="Hello World"
//         />
//         <TextField
//           disabled
//           id="outlined-disabled"
//           label="Disabled"
//           defaultValue="Hello World"
//         />
//         <TextField
//           id="outlined-password-input"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//         />
//         <TextField
//           id="outlined-read-only-input"
//           label="Read Only"
//           defaultValue="Hello World"
//           InputProps={{
//             readOnly: true,
//           }}
//         />
//         <TextField
//           id="outlined-number"
//           label="Number"
//           type="number"
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />
//         <TextField id="outlined-search" label="Search field" type="search" />
//         <TextField
//           id="outlined-helperText"
//           label="Helper text"
//           defaultValue="Default Value"
//           helperText="Some important text"
//         />
//       </div>
//       <div>
//         <TextField
//           required
//           id="filled-required"
//           label="Required"
//           defaultValue="Hello World"
//           variant="filled"
//         />
//         <TextField
//           disabled
//           id="filled-disabled"
//           label="Disabled"
//           defaultValue="Hello World"
//           variant="filled"
//         />
//         <TextField
//           id="filled-password-input"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//           variant="filled"
//         />
//         <TextField
//           id="filled-read-only-input"
//           label="Read Only"
//           defaultValue="Hello World"
//           InputProps={{
//             readOnly: true,
//           }}
//           variant="filled"
//         />
//         <TextField
//           id="filled-number"
//           label="Number"
//           type="number"
//           InputLabelProps={{
//             shrink: true,
//           }}
//           variant="filled"
//         />
//         <TextField
//           id="filled-search"
//           label="Search field"
//           type="search"
//           variant="filled"
//         />
//         <TextField
//           id="filled-helperText"
//           label="Helper text"
//           defaultValue="Default Value"
//           helperText="Some important text"
//           variant="filled"
//         />
//       </div>
//       <div>
//         <TextField
//           required
//           id="standard-required"
//           label="Required"
//           defaultValue="Hello World"
//           variant="standard"
//         />
//         <TextField
//           disabled
//           id="standard-disabled"
//           label="Disabled"
//           defaultValue="Hello World"
//           variant="standard"
//         />
//         <TextField
//           id="standard-password-input"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//           variant="standard"
//         />
//         <TextField
//           id="standard-read-only-input"
//           label="Read Only"
//           defaultValue="Hello World"
//           InputProps={{
//             readOnly: true,
//           }}
//           variant="standard"
//         />
//         <TextField
//           id="standard-number"
//           label="Number"
//           type="number"
//           InputLabelProps={{
//             shrink: true,
//           }}
//           variant="standard"
//         />
//         <TextField
//           id="standard-search"
//           label="Search field"
//           type="search"
//           variant="standard"
//         />
//         <TextField
//           id="standard-helperText"
//           label="Helper text"
//           defaultValue="Default Value"
//           helperText="Some important text"
//           variant="standard"
//         />
//       </div>
//     </Box>
//     </div>
//   );
// }















