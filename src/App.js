import './App.css';
import Description from './components/Description/Description';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HomeWrapper from './pages/HomeWrapper'
import IMG from './images';


function App() {
  const [data,setData] = useState([ 
    { 
    id: '1',
    img: IMG.one,
    oldPrice: 30,
    price: 120,
    discount: 30,
    name:'Code:The Hidden Language Of  Computer Hardware And Software',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti est cum facere, rem expedita perspiciatis amet architecto officiis error, neque quis quia. Exercitationem veniam neque itaque? Architecto beatae laudantium voluptatibus, ut facilis expedita commodi vero ipsam, fugiat, repellendus aperiam?'   
},
  { 
    id: '2',
    img: IMG.two,
    price:80,
    oldPrice: 30,
    discount: 10,
    name:'Design Patterns',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti est cum facere, rem expedita perspiciatis amet architecto officiis error, neque quis quia. Exercitationem veniam neque itaque? Architecto beatae laudantium voluptatibus, ut facilis expedita commodi vero ipsam, fugiat, repellendus aperiam?'   
  },
  { 
    id: '3',
    img: IMG.three,
    price: 120,
    oldPrice: 30,
    discount: 30,
    name:'Business adventures',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti est cum facere, rem expedita perspiciatis amet architecto officiis error, neque quis quia. Exercitationem veniam neque itaque? Architecto beatae laudantium voluptatibus, ut facilis expedita commodi vero ipsam, fugiat, repellendus aperiam?'   
  },
  { 
    id: '4',
    img: IMG.four,
    price: 120,
    oldPrice: 30,
    discount: 30,
    name:'How to win',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti est cum facere, rem expedita perspiciatis amet architecto officiis error, neque quis quia. Exercitationem veniam neque itaque? Architecto beatae laudantium voluptatibus, ut facilis expedita commodi vero ipsam, fugiat, repellendus aperiam?'   
  },
  { 
    id: '5',
    img: IMG.five,
    price: 120,
    oldPrice: 30,
    discount: 30,
    name:'Magic of thinking',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti est cum facere, rem expedita perspiciatis amet architecto officiis error, neque quis quia. Exercitationem veniam neque itaque? Architecto beatae laudantium voluptatibus, ut facilis expedita commodi vero ipsam, fugiat, repellendus aperiam?'   
  },
    ])
  
    
return (
  <div className="App">
    <Routes>
      <Route path='/' element = {<HomeWrapper data = {data} setData = {setData}/> }/>
      <Route path = ":id" element = {<Description  data = {data} setData = {setData} />} />  
    </Routes>
  </div>
)
}


export default App;
