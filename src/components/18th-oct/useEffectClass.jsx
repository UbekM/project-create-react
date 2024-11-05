import { useEffect, useState } from "react"

export default function UseEffectClass(){
const [stateValue, setStateValue] = useState(0);

    useEffect(()=> {
        //your function logic goes here!
        const TimerFunction = setInterval(() => {
            setStateValue(prevValue => prevValue + 1);
        },1000)
        console.log(stateValue, 'state changed!')
        return () => {clearInterval(TimerFunction)}
    },[stateValue])
    return(
        <div className="text-center mx-auto bg-black text-white h-screen">
            <p className="p-4">{stateValue}</p>
            <div >
                <button onClick={() => setStateValue(stateValue + 1)} className="px-8 py-4 bg-green-500 rounded-lg">Set Time</button>
            </div>
        </div>
    )
}