import {react, useState,useEffect} from 'react';
import { Navbar ,Jumbotron,NavbarToggler,NavLink,NavItem,Nav,Collapse,NavbarBrand,Modal,ModalHeader,ModalBody ,Button, Label, Form, FormGroup ,Input ,Col} from 'reactstrap';
//import {NavLink} from 'react-router-dom';
import {BsPerson} from 'react-icons/bs'
import { makeStyles } from '@material-ui/styles';
import $ from 'jquery';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient( to right, #100A2A, #411430)',
      border: 0,
      color: 'white'
    },
  });

  

function HeadeComponent(props){
  
 
  const [key,setkey]=useState(false);
  const classes = useStyles();
  const changekey=()=>{setkey(!key)};
  useEffect(()=>{
    var chemin=window.location.pathname;
    if(chemin=="/Home"){
      $("#HomeNav").css('color','red');
      $("#HomeNav").css('text-decoration','underline');
    
  }
   if(chemin=="/Session"){
     $("#SessionNav").css('color','red');
     $("#header").css('background','white');
     $("#SessionNav").css('text-decoration','underline');

   }
   if(chemin=="/Expo" ||chemin.includes("/Expo/") ){
     $("#ExpoNav").css('color','red');
     $("#header").css('background','white');
     $("#ExpoNav").css('text-decoration','underline');
     
   }
   if(chemin=="/Jobs"||chemin.includes("/Jobs/")){
     $("#JobsNav").css('color','red');
     $("#header").css('background','white');
     $("#JobsNav").css('text-decoration','underline');

   }
  },[]);
    
  const [sessionaccess,SetAcces]=useState(false);
  useEffect(()=>{
   if(props.varaccess){
     console.log("hiiiiii "+props.varaccess +"  session "+sessionaccess);
  //  alert('hey'+props.varaccess);

    SetAcces(true) } });
 
   if(sessionaccess){
    return(

    <div >
   <Navbar id='header' expand="md" >
      <NavbarBrand className="mr-auto" ><img src='assets/logo1.png' height="30" width="41"/></NavbarBrand>
     
         <Nav className="mr-auto" style={{marginLeft:"550px"}} navbar>
            <NavItem>
              <NavLink id="HomeNav" href="/Home"   >HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="SessionNav" href="/Session"   >SESSION</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="ExpoNav" href="/Expo"  >EXPO</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="JobsNav" href="/Jobs"   >JOBS</NavLink>
            </NavItem>
              <div className="" style={{borderRadius:"100%",background:"white",width:"30px",paddingLeft:"8px",paddingTop:"4px", marginLeft:"602px"}} ><BsPerson className="wd-5"/></div>
         </Nav>
       
    </Navbar>
    </div>


    );}
    else if(!sessionaccess){
      return(
    <div >
    <Navbar id='header' expand="md" >
       <NavbarBrand className="mr-auto" ><img src='assets/logo1.png' height="30" width="41"/></NavbarBrand>
      
          <Nav className="mr-auto" style={{marginLeft:"550px"}} navbar>
             <NavItem>
               <NavLink id="HomeNav" href="/Home"   >HOME</NavLink>
             </NavItem>
             <NavItem>
               <NavLink id="SessionNav" href="/Signup"   >SESSION</NavLink>
             </NavItem>
             <NavItem>
               <NavLink id="ExpoNav" href="/Expo"  >EXPO</NavLink>
             </NavItem>
             <NavItem>
               <NavLink id="JobsNav" href="/Jobs"   >JOBS</NavLink>
             </NavItem>
             <div className="" style={{borderRadius:"100%",background:"white",width:"30px",paddingLeft:"8px",paddingTop:"4px", marginLeft:"602px"}} ><BsPerson className="wd-5"/></div>
          </Nav>
        
     </Navbar>
     </div>);
    }
}

export default HeadeComponent;