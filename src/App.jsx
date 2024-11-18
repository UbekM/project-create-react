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
import CardDetail from "./components/useParamsClass/cardDetails";
import HomePage from "./components/useParamsClass/homeCard";
//import { UseParamsClass } from "./components/useParams";
import {UseContextClass} from "./components/context/useContextClass";
import SignIn from "./components/firebase/signin";
import SignUp from "./components/firebase/signup";
import {AuthProvider} from "./components/firebase/AuthContext";

const router = createBrowserRouter(
  [
    {
      path: "/", element:(
      <>
      <Navbar/>
      <ReactComp/>
      <HomePage/>
      </>
      )
    },
    {
      path: "state",
      element: <div><StateComp/></div>,
    },
    {
      path: "signin",
      element: <div><SignIn/></div>,
    },{
      path: "signup",
      element: <div><SignUp/></div>,
    },
    {
      path: "cart/shoe/:id",
      element: <div><CardDetail/></div>,
    },
  ]
)
function App() {
  return (
    <>
    <AuthProvider>
    <UseContextClass>
    <RouterProvider router={router}/>
    </UseContextClass>
    </AuthProvider>
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
