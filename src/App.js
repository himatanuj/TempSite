import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Manifesto from './components/Manifesto';
import Connect from './components/Connect';
// import bootstrap from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      
     <p className="App-Title"> </p>
      <navbar className="navbar" style = {{md:5}}>
        
      <Link to = '/Home' className='link'><h2 className='navbar-title' style={{color:""}} >🤴 Marketing Kings 🤴</h2></Link>
        
        <div className='navbar-options'>
        <Link to = '/Home' className='link'> Home</Link>
        <Link to = '/About' className='link'>About</Link>
        <Link to = '/Manifesto' className='btn'>Manifesto</Link>
        
        </div>
        
      </navbar>
      

           <div className=''>
          
            <Routes>
              <Route path='/Home' element={<Home/>}/> 
              <Route path='/About' element = {<About/>}/>
              <Route path='/Manifesto' element={<Manifesto/>}/> 
              <Route path='/Connect' element={<Connect/>}/>


            </Routes>
         
           <footer className='footer'>
            <Link className='PVT'>Contact Us</Link>
            <Link className='PVT'>Whatsapp</Link>
            <Link className='PVT'>Twitter</Link>
            <Link className='PVT'>Linkedin</Link>
          
           
           </footer>
           
           <div>
            <p className='LTD'>Address: <br/> Marketing Kings <br/> Bangalore India PVT LTD</p>

            </div>

  
          </div>

           <div className='cont'>
           <Link to = '/Connect' className=''> <h3 className='connect'>Connect</h3></Link>
   
     </div>
    </div>
   



  );
}

export default App;
