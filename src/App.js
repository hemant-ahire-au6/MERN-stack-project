
import React from 'react'
import {Switch,Route} from "react-router-dom"
import SignIn from "./Component/auth/SignIn"
import SignUp from "./Component/auth/SignUp"
import HomePage from './Component/pages/HomePage'

function App() {
  
  return (
    <div className="App" >
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={SignIn}/>
        <Route path="/signup" exact component={SignUp}/>
      </Switch>
    
    </div>
  );
}

export default App;
