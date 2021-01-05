import react from 'react';
import { makeStyles } from '@material-ui/styles';
import {Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap-social/bootstrap-social.css';
function Home(){
  
  return(
       <footer>
        
          <div id='home' >
              <h1 id="text" className="text-secondary pt-5 pl-5 ">
                  FORUM <strong className="text-danger">EMI</strong> ENTREPRISE
              </h1>
             <div id="socialmedia" className="container">
              <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i ></i></a>
              <a className="btn btn-social-icon btn-twitter" href="http://www.facebook.com/profile.php?id="><i className="fa fa-twitter"></i></a>
              <a className="btn btn-social-icon btn-linkedin" href="http://www.facebook.com/profile.php?id="><i className="fa fa-linkedin"></i></a>
             </div>
             <div id='buttons' className="row "> 
                <div className="col-1">
                <Button id="btn1" href={"/Signup"}>Sign up</Button>
                </div>
                <div className="col-1">
                <Button href={"/Login"} id="btn2">Log in</Button>
               </div>
            </div>
         </div>
 
      </footer>

  );


}
export default Home;