import react ,{useEffect, useState}from 'react';
import { makeStyles } from '@material-ui/styles';
import '../font.css'
import {Button, NavLink,Image, NavbarBrand} from 'reactstrap';
import { Link } from 'react-router-dom';
import { RiFacebookBoxFill } from 'react-icons/ri';
import {SiLinkedin} from 'react-icons/si';
import {AiFillTwitterSquare} from 'react-icons/ai';
import 'bootstrap-social/bootstrap-social.css';
import HeadeComponent from '../Components/headerComponent.js';
import { useLocation } from 'react-router-dom';

function Home(props){
   const location = useLocation();
   const head = <HeadeComponent varaccess={(location.state)?location.state.update:false} />
  return(
       <footer id="home">
          {head}
          <div  >
             
              <h1 id="text" className="text-secondary pt-5 pl-5 ">
                  FORUM <strong id="spin" className="text-danger">EMI</strong> ENTREPRISE
              </h1>
              <div className="d-flex justify-content-end">
                  <div  className="p-2">
                 <img style={{ height:400,width:580}} src='assets/biblio.png'></img>
                 </div>
                     <div  className="p-2" id="socialmedia" >
              <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="> <RiFacebookBoxFill /></a>
              <a className="btn btn-social-icon btn-twitter" href="http://www.facebook.com/profile.php?id="><AiFillTwitterSquare/></a>
              <a className="btn btn-social-icon btn-linkedin" href="http://www.facebook.com/profile.php?id="><SiLinkedin/></a>
           
                    </div>
            </div>
      
             <div id='buttons' className="row "> 
                <div  id="btn1" class ="effet" style={{border :'2px solid ',fontSize:'35px',borderColor:'#CDCACA',color:'#CDCACA',paddingtop:"14px",paddingLeft:"14px"}}>
                <NavLink className="pt-1 text-light"  href={"/Signup"} > Signup</NavLink>
               </div>
               <div  id="btn2" class ="effet" style={{border:'2px solid ',borderright : "5px",fontSize:'35px',borderColor:'#CDCACA',color:'#CDCACA',paddingRight:"12px",paddingLeft:"14px"}}>
                  <NavLink className="pt-1 text-light" href={"/Login"}> Log in</NavLink>
               </div>
              
            </div>
         </div>
 
      </footer>

  );


}
export default Home;