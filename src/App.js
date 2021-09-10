
import React from 'react'
import {Switch,Route} from "react-router-dom"
import SignIn from "./Component/auth/SignIn"
import SignUp from "./Component/auth/SignUp"
import HomePage from './Component/pages/HomePage'
import TableTask from "./Component/view/TaskTable"

function App() {
  
  return (
    <div className="App" >
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={SignIn}/>
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/project-details" exact component={TableTask}/>
      </Switch>
    </div>
  );
}

export default App;
