import  '../components/About.css';
import React, {useState} from 'react'; 


function About(){


   
    const [counter, setCounter] = useState(0);
    function IncrementHandler(){

        setCounter(counter + 1);
    }
    function DecrementHandler(){

        setCounter(counter - 1);
    }
    function ResetHandler(){

        setCounter(0);
    }
    return(
       
     <div> 
    <h1>Still We Are Under Construction</h1>
    <h1> {counter}</h1>

    <button className='bt' onClick={IncrementHandler}>Increment</button>
    <button className='bt' onClick={DecrementHandler}>Decrement</button>
    <button className='bt' onClick={ResetHandler}>Reset</button>
    </div>

       );


}

export default About;