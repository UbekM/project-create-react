import { Button } from "./button";
import Stationary from "/stationary.jpg";

export default function ReactComp () {
    return (
        <>
       <div className='flex lg:m-16 items-center justify-around'>
        <div>
        <div className="text-6xl font-bold">Shop your Top-notch<br/> Tech Stationaries!</div>
        <p className='text-2xl py-4'>We offer the best value for your money</p>
        
        <Button text="Shop Now!"/>
        {/* <Button content="Your contents here"/> */}
        </div>
        <div>
        <img src={Stationary}/>
        </div>
        </div>  

        </>
    )
} 
