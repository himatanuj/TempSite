import './Manifesto.css';
import React,{useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';



function Manifesto(){
    const navigate = useNavigate();
    const [counter, setCounter] = useState(null);
    const InputData = useRef(null);
    const inputdata = useRef(null);

    function Namehandler(){
        setCounter('');

    }
    function EmailHandler(){
        setCounter('');

    }
    function SubmitHandler(){
        const DataInput = InputData.current.value; 
        const DataOutput = inputdata.current.value;
        let data = {
            name: DataInput,
            email: DataOutput,
        } 
    
        

      fetch('https://snappy-stacker-315807-default-rtdb.firebaseio.com/details.json', 
      {
        method : 'post',
        body : JSON.stringify(data),

      }).then(()=>{
        navigate('/Details');
      })     
    }
    return(

       

        <div className="Manifesto-Container">
            <div className="Manifesto-detail">
            <h1>To Get Manifesto ! Please Register Your Details for More Info</h1>
            <h2>{counter}</h2>
            
            <div className='content' >  
           <tr> <input className="name" type= 'text' placeholder="Enter your Name" onClick={Namehandler} required ref={InputData}></input></tr>
           <tr> <input className="Email" type= 'email' placeholder="Enter your Email" onClick={EmailHandler} required ref={inputdata}></input></tr>
           <tr> <button className='button' onClick={SubmitHandler} >Submit</button> </tr>
           
            
            </div>
           
            </div>
            
           
        </div>
       
        

    );
} 

export default Manifesto;
