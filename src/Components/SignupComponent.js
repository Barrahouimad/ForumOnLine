import react from 'react';
import {Form, FormGroup,FormFeedback,FormText,Label,Input, Button} from 'reactstrap';


function SignupComponent(){

return(
 <div id="signup" className="container">
    <Form>
       <FormGroup row>
         <Input type="text" placeholder="Full Name"/>
       </FormGroup>
       <FormGroup row>
         <Input type="password" placeholder="Password"/>
       </FormGroup>
       <FormGroup row>
         <Input type="password" placeholder="Confirme Password"/>
       </FormGroup>
       <FormGroup row>
         <Input type="email" placeholder="Email"/>
       </FormGroup>
       <FormGroup row>
         <Input type="number" placeholder="Phone Number"/>
       </FormGroup>
       <FormGroup className="ml-4"row>
         <Button >Connect</Button>
       </FormGroup>
    </Form>
 </div>
);


}
export default SignupComponent;