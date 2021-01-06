import react from 'react';
import {Form, FormGroup,FormFeedback,FormText,Label,Input, Button} from 'reactstrap';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function LoginComponent(){

return(
<div id="login" className="container bg-light">
    <Form >
       <FormGroup row>
         <Input type="text" placeholder="Username"   validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
         
       </FormGroup>
       <FormGroup row>
         <Input type="password" placeholder="Password"validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
           
       </FormGroup>
       <FormGroup className="ml-5"row>
         <Button href={"/home"} >Connect</Button>
       </FormGroup>
    </Form>
 </div>
);


}
export default LoginComponent;