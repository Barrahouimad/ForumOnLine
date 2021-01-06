import {react, useState} from 'react';
import { Navbar ,Jumbotron,NavbarToggler,NavLink,NavItem,Nav,Collapse,NavbarBrand,Modal,ModalHeader,ModalBody ,Button, Label, Form, FormGroup ,Input ,Col} from 'reactstrap';
//import {NavLink} from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
    root: {
      background: 'linear-gradient( to right, #100A2A, #411430)',
      border: 0,
      color: 'white'
    },
  });

function HeadeComponent(){
    const [key,setkey]=useState(false);
    const classes = useStyles();
    const changekey=()=>{setkey(!key)};
    return(

    <div>
   <Navbar expand="md" className={classes.root} >
      <NavbarBrand className="mr-auto" ><img src='assets/logo1.png' height="30" width="41"/></NavbarBrand>
     
         <Nav className="mr-auto"  navbar>
            <NavItem>
              <NavLink href="/home" style={{color:'#CFCFCF'}}  >HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Session" style={{color:'#CFCFCF'}} >SESSION</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Expo" style={{color:'#CFCFCF'}} >EXPO</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Jobs" style={{color:'#CFCFCF'}} >JOBS</NavLink>
            </NavItem>
         </Nav>
       
    </Navbar>
    </div>


    );
}

export default HeadeComponent;