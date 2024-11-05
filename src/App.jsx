import "./App.css";
//import WindowSizeComponent from './components/18th-oct/useEffect';
//import UseEffectClass from './components/18th-oct/useEffectClass';
// import AxiosData from './components/api-class/axios';
// import FetchData from './components/api-class/fetchMethod';
// import TernaryOperatorClass from './components/conditionalRendering/AndOperator';
// import { SwitchComp } from './components/conditionalRendering/switch-statement';
//import { Theme } from './components/conditionalRendering/theme';
import ReactComp from "./components/firstReactComp";
import Navbar from "./components/navbar";
import StateComp from './components/stateClass';
import { RouterProvider, createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/", element:(
      <>
      <Navbar/>
      <ReactComp/>
      </>
      )
    },
    {
      path: "signup",
      element: <div><StateComp/></div>,
    },
  ]
)
function App() {
  //&&

  return (
    <>
    <RouterProvider router={router}/>

     {/* <Navbar/>
    <Router>
      <Routes> */}
        {/* <Route path="/" element={ <><ReactComp /></>}/> */}
        {/* <Route path="/signup" element={ <StateComp />}/> */}
      {/* <StateComp/> */}
      {/* <TernaryOperatorClass/> */}
      {/* <Theme/> */}
      {/* <SwitchComp/> */}
      {/* <UseEffectClass/> */}
      {/* <FetchData/> */}
      {/* <AxiosData/> */}
      {/* </Routes>
    </Router> */}
    </>
  );
}

export default App;