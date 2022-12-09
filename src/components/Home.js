import tanuj from '../components/tanuj.jpg';
import  '../components/Home.css';
import {useRef,useState} from 'react';

function Home(){
    function searchHandler(){
        setCounter('');
    }
    const [counter, setCounter] = useState(null);
    const data = useRef(null);
    function SearchHandler(){
     const metadata= data.current.value;
     setCounter(metadata)
     
    }
    return(

        <div className="Home-container">
            <div className='search-bar'>
            <input className="Search" placeholder='Type...' onClick={searchHandler} ref={data}/>
            <button className='btn' onClick={SearchHandler}>Search</button> 
            <p className='counter'>{counter}</p>
            </div>
             <p className="Home-title"> Sit Back And Relax <br/>We will Promote You !</p>
             <div className= "Home-img">
             <img className="img" src={tanuj} alt="tanuj"/>
             <div className='home-details'>
             <p>No one can thrive in the modern marketplace without having a digital footprint. Now more than ever, brands are becoming mobile, portable and shareable. Creating this dynamic online presence with smart and sticky digital content and impactful online experiences is essential. They are the critical components to having a successful brand.</p>
             <h2>A Cohesive Digital Footprint is Key to a Successful Marketing Strategy</h2>
             <p>Did you know that how your website looks and functions directly impacts your business? If your website is slow or designed poorly, it could lead to having a high bounce rate due to people leaving in frustration and finding a resource that is easier to navigate. You can have the best content in your industry on your website, but if it doesn’t load properly or isn’t easily accessible both people and Google won’t notice it.

                Creating an informative and functional is how you can begin to get traffic and more leads from search engines. The Google algorithm is so extensive and complex that no one is exactly sure what influences all aspects of it, but some aspects are well known. Web properties Google factors into its ranking systems include:</p>
             <h2>PAGE LOAD SPEED | BROKEN LINKS | BOUNCE RATE | BACKLINKS | WEBSITE FUNCTIONALITY</h2>
             <p>There are hundreds or even thousands of things that will influence your rankings. But focusing on developing a highly functional website, with relevant content valuable to your prospects is an excellent way to launch your online brand – and ensure you bring “eyeballs” to your site.

             </p>
             </div>
             
             </div>
             

        </div>

    );
}

export default Home;