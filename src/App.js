import {useState} from 'react';

import './index.css'

function App() {
  //state
  const [weight,setWeight]=useState(0)
  const [height,setHeight]=useState(0)
  const [bmi,setBmi]=useState('')
  const [message,setMessage]=useState('')



  let calcBmi = (event) => {
    //prevent submiting
    event.preventDefault()

    if(weight === 0 || height === 0){
      alert('Please enter a valid weight and height')
    } else{
      let bmi =(weight/(height * height)*703)
      setBmi(bmi.toFixed(1))

          //logic for message
      if(bmi <25){
      setMessage('You are underweight')
      }else if(bmi >= 25 && bmi <30){
         setMessage('You are a healthy weight')
      }else{
         setMessage('You are overweight')
      }
    }
  }
    
  
  //show image based on bmi calculatio
  let imgSrc;

  if(bmi<1){
    imgSrc=null
  }else{
    if(bmi < 25){
      imgSrc= require ('../src/img/underweight.jpg')
    }else if(bmi >=25 && bmi <30){
      imgSrc=require('../src/img/healthy.jpg')
    }else{
      imgSrc=require('../src/img/fat-png.jpg')
    }
    

    
  }
  

 let reload = () =>{
  window.location.reload()
 }


return (
<div className="app">
  <div className='container'>
    <h2 className='center'>BMI Calculator</h2>
    <form onSubmit={calcBmi}>
      <div> 
        <label>Weight (lbs)</label>
        <input value={weight} onChange={(e)=>{
          return setWeight(e.target.value);
        }}></input>
      </div>
      <div>
        <lable>Height (in)</lable>
        <input value={height} onChange={(event)=>setHeight(event.target.value)}></input>
      </div>
      <div>
        <button className='btn' type='submit'>Submit</button>
        <button className='btn btn-outline' type='submit'>Reload</button>
      </div>
    </form>


    <div className='center'>
       <h3>Your BMI is:{bmi}</h3>
       <p>{message}</p>
    </div>
    <div className='img-container'>
      <img src={imgSrc} alt=''></img>
    </div>
    </div>
   </div>
  );
}

export default App;
