import { Switch, Route, Redirect } from 'react-router-dom'
import HeadeComponent from '../Components/headerComponent.js';
import Home from '../Components/HomeComponent.js';
import useSWR from 'swr'
import {ImSpinner9} from 'react-icons/im';

import Apply from '../Components/ApplyComponent.js';
import LoginComponent from '../Components/LoginComponent.js';
import SignupComponent from '../Components/SignupComponent.js';
import ExpoComponent from '../Components/ExpoComponent.js';
import JobsComponent from '../Components/JobsComponent.js';
import EntrepExpo from '../Components/EntrepExpo.js';
import React,{useState} from 'react';
/*import WelcomeComponent from '../Components/WelcomeComponent.js';
import SessionComponent from '../Components/SessionComponent.js';

 <Switch>

       
       
       
        <Route path='/Session' component={SessionComponent}/>
    </Switch>


*/



function Maincommponent(){

  
  
const Expoid =({match})=>{
  const fetcher=(url)=>fetch(url).then(res=>{return res.json()})
  const {data, error} =useSWR('http://localhost:3001/Expo',fetcher)

  if(error){
      return <p>faild to load</p>
  }
  if(!data){return( 
      //we always have to use this if 
    <ImSpinner9 style={{fontSize:"250px", marginLeft:"580px", marginTop:"140px"}} id='spin'/> 
);}

return(<EntrepExpo expo={data.filter((x)=>x.id===parseInt(match.params.idexpo,10))[0]}/>);
}
const Jobid =({match})=>{
  const fetcher=(url)=>fetch(url).then(res=>{return res.json()})
  const {data, error} =useSWR('http://localhost:3001/Jobs',fetcher)

  if(error){
      return <p>faild to load</p>
  }
  if(!data){return( 
      //we always have to use this if 
    <ImSpinner9 style={{fontSize:"250px", marginLeft:"580px", marginTop:"140px"}} id='spin'/> 
);}

return(<Apply expo={data.filter((x)=>x.id===parseInt(match.params.idjob,10))[0]}/>);
}

 return(<div>

      <Switch>
        <Route path='/Home' component={Home}/>
        <Route path='/Signup' component={SignupComponent}/>
        <Route exact path ='/Expo' component={ExpoComponent}/>
        <Route path="/login" component={LoginComponent}/>
        <Route path  ='/Expo/:idexpo' component={Expoid}/>
        <Route path  ='/Jobs/:idjob' component={Jobid}/>
        <Route path='/Jobs' component={JobsComponent}/>
        <Redirect path='/Home'component={Home}/>
     </Switch>
        </div>
);

}





export default Maincommponent;