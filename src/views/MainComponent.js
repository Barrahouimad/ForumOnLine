//import { Switch, Route, Redirect } from 'react-router-dom'
import HeadeComponent from '../Components/headerComponent.js';
import React from 'react';
/*import WelcomeComponent from '../Components/WelcomeComponent.js';
import SigninComponent from '../Components/SigninComponent.js';
import SignupComponent from '../Components/SignupComponent.js';
import ExpoComponent from './ExpoComponent.js';
import JobsComponent from '../Components/JobsComponent.js';
import SessionComponent from '../Components/SessionComponent.js';

 <Switch>
        <Route path='/home' component={WelcomeComponent}/>
        <Route path='/Signin' component={SigninComponent}/>
        <Route path='/Signup' component={SignupComponent}/>
        <Route path='/Expo' component={ExpoComponent}/>
        <Route path='/Jobs' component={JobsComponent}/>
        <Route path='/Session' component={SessionComponent}/>
    </Switch>


*/



const Maincommponent=()=>{

 return(
  <div className="row">
     <div className="col-md-6">
        <HeadeComponent/>
     </div>
    
  </div>
 );

}





export default Maincommponent;