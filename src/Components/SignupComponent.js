import react,{useState} from 'react';
import {Form, FormGroup,FormFeedback,FormText,Label,Input, Button} from 'reactstrap';


const SignupComponent=()=>{
  const [email,setemail]=useState('');
  const [emailtouched,setemailtouched]=useState(false);
  const [name,setname]=useState('');
  const [nametouched,setnametouched]=useState(false);
  const [password,setpass]=useState('');
  const [passtouched,setpasstouched]=useState(false);
  const [pass2,setpass2]=useState('');
  const [pass2touched,setpass2touched]=useState(false);
  function handlBluremail(){
    setemailtouched(!emailtouched);

  }
  function handlBlurname(){
    setnametouched(!nametouched);

  }
  function handlBlurpass(){
    setpasstouched(!passtouched);

  }
  function handlBlurpass2(){
    setpass2touched(!pass2touched);

  }
  function handlchangeemail(event){
    setemail(event.target.value);
   
  }
  function handlchangename(event){
    setname(event.target.value);
   
  }
  function handlchangepass(event){
    setpass(event.target.value);
   
  }
  function handlchangepass2(event){
    setpass2(event.target.value);
   
  }
  function handlvalue(input){
    alert(input);
    setemail(input);
  }
    function validate(email,name,nametouched,emailtouched){
      const errors ={
        email:'',
        name:'',
        pass:''
      }
      if(email.split('').filter(x => x === '@').length !==1 && emailtouched){
        errors.email='the email should have the @' ;
        console.log('email : '+email);
      }
      if(name.length < 3 && nametouched){
        console.log(name+'length is : ' +name.length);
         errors.name='the name should have at least 3 characters';
       }
      if(pass2touched && passtouched && password!==pass2){
       
         errors.pass='NOT THE SAME PASSWORD';
       }
      return errors;

    }
    
   var nname=name + '';
   var eemail=email + '';
    const errors=validate(eemail,nname,nametouched,emailtouched);
     console.log(errors.email+'the email : '+eemail+' the name'+nname + ' hy  ' + errors.name);

return(
 <div id="signup" className="container pb-5">
    <Form>
       <FormGroup row>
         <Input type="text" placeholder="Full Name" valid={errors.name===''} invalid={errors.name!==''}
      onChange={(event)=>handlchangename(event)}   onBlur={()=>handlBlurname()}   />
         <FormFeedback>{errors.name}</FormFeedback>
       </FormGroup>
       <FormGroup row>
         <Input type="email" placeholder="Email" valid={errors.email===''} invalid={errors.email!==''}
           onBlur={()=>handlBlurname(!nametouched)}onChange={(event)=>handlchangeemail(event)}/>
            <FormFeedback>{errors.email}</FormFeedback>
       </FormGroup> 
        
       <FormGroup row>
         <Input type="password" placeholder="Password" onBlur={()=>handlBlurpass2()} onChange={(event)=>handlchangepass2(event)}/>
       </FormGroup>
       <FormGroup row>
         <Input type="password" placeholder="Confirme Password" valid={errors.pass===''} invalid={errors.pass!==''}
           onBlur={()=>handlBlurpass()} onChange={(event)=>handlchangepass(event)}/>
         <FormFeedback>{errors.pass}</FormFeedback>
       </FormGroup>
       <FormGroup row>
         <Input type="number" placeholder="Phone Number"/>
       </FormGroup>
       <FormGroup row>
           <Label  className="text-danger"  htmlfor="cv">Your CV</Label>
         <Input name="cv"type="file" >Your CV</Input>
       </FormGroup>
       <FormGroup className="ml-4"row>
         <Button >Connect</Button>
       </FormGroup>
    </Form>
 </div>
);


}
export default SignupComponent;