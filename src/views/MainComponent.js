import { Switch, Route, Redirect } from 'react-router-dom'
import HeadeComponent from '../Components/headerComponent.js';
import Home from '../Components/HomeComponent.js';
import LoginComponent from '../Components/LoginComponent.js';
import SignupComponent from '../Components/SignupComponent.js';
import ExpoComponent from '../Components/ExpoComponent.js';
import JobsComponent from '../Components/JobsComponent.js';
import React from 'react';
/*import WelcomeComponent from '../Components/WelcomeComponent.js';
import SessionComponent from '../Components/SessionComponent.js';

 <Switch>

       
       
       
        <Route path='/Session' component={SessionComponent}/>
    </Switch>


*/



function Maincommponent(){

 return(<div>
      <HeadeComponent/>
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/Login' component={LoginComponent}/>
        <Route path='/Signup' component={SignupComponent}/>
        <Route path='/Expo' component={ExpoComponent}/>
        <Route path='/Jobs' component={JobsComponent}/>
        <Redirect path='/home'/>
     </Switch>
        </div>
);

}





export default Maincommponent;