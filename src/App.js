import './App.css';
import {  Route, Routes } from 'react-router-dom';
import { SignUp } from './components/Signup';
import { SignIn } from '../src/components/SignIn';
// import { Switch } from '@material-ui/core';


function App() {
  return (
    <>
    
        <Route exact path='/' Components={SignIn}/>
         <Route exact path='SignUp' Components={SignUp }/>
      </>

  );
}

export default App;
