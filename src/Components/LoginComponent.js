import react , {useState} from 'react';
import {Form, FormGroup,FormFeedback,FormText,Label,Input, Button} from 'reactstrap';



const LoginComponent=()=>{
    const [email,setemail]=useState('');
    const [pass,setpass]=useState('');
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
    function handlsubmit(event){
      event.preventDefault(); 
      const account ={
        email:event.target.email.value,
        pass:event.target.pass.value,
      };
      alert(JSON.stringify(account));
     fetch("http://localhost:3001/accounts",{
          method:'POST',
          body:JSON.stringify(account),
          headers:{
            "Content-Type" : "application/json"
            },
            credentials :"same-origin"
  
  
    });}
    var eemail= email+'';
    const error=validate(eemail,emailtouched);
return(
    
<div id="login" className="container pb-5" style={{top: "100px",height:"500px",width: "866px",border:"1px solid  #FFFFF" , borderRadius: "68px",background:" #FFFFF1 0% 0% no-repeat padding-box", boxShadow: "10px 10px 10px #DADADA29"}}>
   <div className="container pb-5"  >
    <Form onsubmit={handlsubmit}>
       <FormGroup row>
         <Input type="text" name="email" placeholder="Username"  
                                        valid={error.email === ''}
                                        invalid={error.email !== ''}
                                        onBlur={()=>test()}
                                        onChange={(event)=>handlchange(event) } />
         <FormFeedback>{error.email}</FormFeedback>
       
       </FormGroup>
       <FormGroup row>
         <Input type="password" name="password" placeholder="Password" />
         
       </FormGroup>
       <FormGroup className="ml-5"row>
         <Button href={"/home"} type="submit" >Connect</Button>
         <Button type="submit" className="bg-success ml-5" href={"/signup"}>Sign up</Button>
       </FormGroup>
    </Form>
 </div>
 </div>
);


}
export default LoginComponent;