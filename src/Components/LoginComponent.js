import react , {useState} from 'react';
import {Form, FormGroup,FormFeedback,FormText,Label,Input, Button} from 'reactstrap';



const LoginComponent=()=>{
    const [email,setemail]=useState('');
    const [emailtouched,setemailtouched]=useState(false);
    function validate(email,emailtouched) {
        const errors = {
            email: ''
        };
    
     if(emailtouched && email.split('').filter(x => x === '@').length !== 1)
           {errors.email = 'Email should contain a @';} 
    
        return errors;
    }
    function test(){
        setemailtouched(!emailtouched)
        console.log("hello   "+emailtouched);
    }
    function handlchange(event){
        setemail(event.target.value);
       
    }
    var eemail= email+'';
    const error=validate(eemail,emailtouched);
return(
    
<div id="login" className="container bg-light">
    <Form >
       <FormGroup row>
         <Input type="text" placeholder="Username"  
                                        valid={error.email === ''}
                                        invalid={error.email !== ''}
                                        onBlur={()=>test()}
                                        onChange={(event)=>handlchange(event) } />
         <FormFeedback>{error.email}</FormFeedback>
       
       </FormGroup>
       <FormGroup row>
         <Input type="password" placeholder="Password" />
         
       </FormGroup>
       <FormGroup className="ml-5"row>
         <Button href={"/home"} >Connect</Button>
       </FormGroup>
    </Form>
 </div>
);


}
export default LoginComponent;