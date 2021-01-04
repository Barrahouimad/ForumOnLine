import {react, useState} from 'react';
import { Navbar ,Jumbotron,NavbarToggler,NavItem,Nav,Collapse,NavbarBrand,Modal,ModalHeader,ModalBody ,Button, Label, Form, FormGroup ,Input ,Col} from 'reactstrap';
//import {NavLink} from 'react-router-dom';

function HeadeComponent(){
    const [key,setkey]=useState(false);
    return(
 <header>
    
   <Navbar>
     <NavbarToggler expand="md" onClick={setkey(!key) }>
        <NavbarBrand className="mr-auto"><img src='assets/logo1.png' height="30" width="41"/></NavbarBrand>
          <Collapse isOpen={key} navbar>
            <Nav navbar>
             
            </Nav>
          </Collapse>


     </NavbarToggler>
   </Navbar>
</header>


    );
}

export default HeadeComponent;