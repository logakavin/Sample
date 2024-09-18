import "./App.css";
// import CounterApp from "./components/Redux/CounterApp";
// import CustomHook from "./components/Hooks/CustomHook";
// import UseCallBackHook from "./components/Hooks/UseCallBackHook";
// import Card from "./components/Task/Card";
// import UseMemoHook from "./components/Hooks/UseMemoHook";
// import { Navigate, Link, Route, Routes } from "react-router-dom";

// import Gmaila from './components/Gmail/Gmaila';
// import Password from './components/Gmail/Password';
// import Sidebar from './components/Gmail/Sidebar';
// import Inbox from './components/Gmail/Inbox';
// import UseStateHook from './components/Hooks/UseStateHook';
// import Certificate1 from "./components/Certificate/Certificate1";
import Register from "./components/axios/Register";
// import UseEffectHook from "./components/Hooks/UseEffectHook";
// import UseReducerHook from "./components/Hooks/UseReducerHook";
// import UseReducerHook1 from "./components/Hooks/UseReducerHook1";
// import UseRefHook from './components/Hooks/UseRefHook';
// import Usecontexthook from './components/Hooks/Usecontexthook';
// import UseStateHook from './components/Hooks/UseStateHook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* <Link to={'Gmaila'} >Gmail</Link> */}
          {/* <Link to={'Password'} >Password</Link> */}
        </div>
      </header>

      {/* <Routes>
        <Route path='' element={<Navigate to={'Gmaila'}/>}/>
        <Route path='Gmaila' Component={Gmaila}>
       
          <Route path='Password' Component={Password}/>
          <Route path='Sidebar' Component={Sidebar}/>
         <Route path='Inbox' Component={Inbox}/>
        </Route>
        
        <Route path='gmaila' Component={Gmaila}/>
        <Route path='Password' Component={Password}/>
      </Routes> */}

      {/* Hooks */}
      {/* <UseStateHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseStateHook /> */}
      {/* <Usecontexthook></Usecontexthook> */}
      {/* <UseEffectHook /> */}
      {/* <UseReducerHook /> */}
      {/* <UseReducerHook1/> */}
      {/* <UseCallBackHook /> */}
      {/* <Card /> */}
      {/* <Mainattandance / > */}
      {/* <CounterApp /> */}
      {/* <UseMemoHook /> */}
      {/* <Certificate1/> */}
        {/* <CustomHook /> */}
      <Register/>
    
    </div>
);
}  
export default App;
