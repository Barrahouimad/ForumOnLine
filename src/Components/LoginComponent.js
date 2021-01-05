import react from 'react';
import {Form, FormGroup,FormFeedback,FormText,Label,Input, Button} from 'reactstrap';


function verifie(){

}

function LoginComponent(){

return(
<div id="login" className="container bg-light">
    <Form >
       <FormGroup row>
         <Input type="text" placeholder="Username"/>
         <FormFeedback></FormFeedback>
       </FormGroup>
       <FormGroup row>
         <Input type="password" placeholder="Password"/>
       </FormGroup>
       <FormGroup className="ml-5"row>
         <Button href={"/home"} >Connect</Button>
       </FormGroup>
    </Form>
 </div>
);


}
export default LoginComponent;