const JsStack =() => {
    return (
        <>
        <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next Js</li>
        <li>Node Js</li>
        </ul>
        </>
    )
}

const BackendStack =() => {
    return (
        <>
        <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Express</li>
        <li>Nest Js</li>
        <li>Node Js</li>
        </ul>
        </>
    )
}

const FullStack = () => {
    return (
        <>
         <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next Js</li>
        <li>Node Js</li>
        <li>TypeScript</li>
        <li>Express</li>
        <li>Nest Js</li>
        </ul>
        </>
    )
}
const Courses = ({checkStatus}) => {
    return (
        {checkStatus} ? <JsStack/> : <BackendStack/>
    )
}
export default function TernaryOperatorClass (TernaryStatus){
    return (
        <>       
         <div className="font-bold text-center m-2 p-4">
            <h1 className="mb-4 text-3xl">Conditional Rendering Class</h1>
            <div className="mx-auto">
       {/* <Courses checkStatus= {false} /> */}

       {TernaryStatus= false ?  <BackendStack/> : <JsStack/>}
       </div>
         </div>
        </>

    )
}