const JsStack =(frontend) => {
    return (
        <>
        <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next Js</li>
        <li>Node Js</li>
        </ul>
        </>
    )
}

const BackendStack =(backend) => {
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

const FullStack = (checkStatus) => {
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
const Courses = ({checkStatus, frontend}) => {
    if (checkStatus) {
        return <FullStack/>
    }
    if (frontend) {
        return <JsStack/>
    }  else return (
        <BackendStack/>      
    )
}

// <statement> ? <true expression> : <false expression>
export default function IfStatementClass (){
    return (
        <>       
         <div className="font-bold text-center m-2 p-4">
            <h1 className="mb-4 text-3xl">Conditional Rendering Class</h1>
            <div className="mx-auto">
       <Courses  />
       </div>
         </div>
        </>

    )
}