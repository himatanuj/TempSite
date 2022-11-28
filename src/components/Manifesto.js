import './Manifesto.css';
import React,{useState} from 'react';



function Manifesto(){
    const [counter, setCounter] = useState();

    function SubmitHandler(){

        setTimeout((x)=>{
             setCounter('Thanks for Your Response !');
    
            }, 1000)
    }
    return(

       

        <div className="Manifesto-Container">
            <div className="Manifesto-detail">
            <h1>To Get Manifesto ! Please Submit Your Details for More Info</h1>
            <h2>{counter}</h2>
            <div className='content' >
            
                
           <tr> <input className="name" type= 'text' placeholder="Enter your Name"></input></tr>
           <tr> <input className="Email" type= 'text' placeholder="Enter your Email"></input></tr>
           <tr><button className='button' onClick={SubmitHandler} >Submit</button></tr>
            
            </div>
           
            </div>
            
           
        </div>
       
        

    );
}
export default Manifesto;
