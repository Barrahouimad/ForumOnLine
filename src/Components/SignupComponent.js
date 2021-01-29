import react,{useState} from 'react';
import {Form, FormGroup,FormFeedback,FormText,Label,Input, Button} from 'reactstrap';
import {useHistory } from 'react-router-dom' ;

const SignupComponent=()=>{
  const [email,setemail]=useState('');
  const [Number,setNumber]=useState(8);
  const [emailtouched,setemailtouched]=useState(false);
  const [name,setname]=useState('');
  const [nametouched,setnametouched]=useState(false);
  const [password,setpass]=useState('');
  const [passtouched,setpasstouched]=useState(false);
  const [pass2,setpass2]=useState('');
  const [pass2touched,setpass2touched]=useState(false);
  let history = useHistory();
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
  function handlsubmit(event){
    const errors=validate(event.target.email.value,event.target.fullname.value,true,true);
    if(errors.email === '' && errors.name===''){ event.preventDefault(); 
      fetch('http://localhost:3001/Accounts')
      .then(response=>response.json())
      .then(Accounts=>setNumber(Accounts.length))
      .catch(error=>console.log(error.message));
    const newaccount ={
      id:Number,
      fullname:event.target.fullname.value,
      email:event.target.email.value,
      password:event.target.pass.value,
      phonenumber:event.target.number.value
    };
  
   fetch("http://localhost:3001/Accounts",{
        method:'POST',
        body:JSON.stringify(newaccount),
        headers:{
          "Content-Type" : "application/json",
          "Access-Cotrol-Origin":"*"
          },
          credentials :"same-origin"


  })
   
 
  history.push({
    pathname: '/Home',
    state: {  
      update: true  , 
    },
  });}
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
 <div id="signup" className="container pb-5 mt-5" style={{top: "100px",height:"500px",width: "866px",border:"1px solid  #FFFFF" , borderRadius: "68px",background:" #FFFFF1 0% 0% no-repeat padding-box", boxShadow: "10px 10px 10px #DADADA29"}}>
   <div className="container pb-5"  >
      <Form onSubmit={handlsubmit}>
       <FormGroup row>
         <Input type="text" placeholder="Full Name" name="fullname" valid={errors.name===''} invalid={errors.name!==''}
      onChange={(event)=>handlchangename(event)}   onBlur={()=>handlBlurname()}   />
         <FormFeedback>{errors.name}</FormFeedback>
       </FormGroup>
       <FormGroup row>
         <Input type="email" placeholder="Email" name="email" valid={errors.email===''} invalid={errors.email!==''}
           onBlur={()=>handlBluremail(!nametouched)}onChange={(event)=>handlchangeemail(event)}/>
            <FormFeedback>{errors.email}</FormFeedback>
       </FormGroup> 
        
       <FormGroup row>
         <Input type="password" placeholder="Password" name="pass" onBlur={()=>handlBlurpass2()} onChange={(event)=>handlchangepass2(event)}/>
       </FormGroup>
       <FormGroup row>
         <Input type="password" placeholder="Confirme Password" valid={errors.pass===''} invalid={errors.pass!==''}
           onBlur={()=>handlBlurpass()} onChange={(event)=>handlchangepass(event)}/>
         <FormFeedback>{errors.pass}</FormFeedback>
       </FormGroup>
       <FormGroup row>
         <Input type="number" name="number" placeholder="Phone Number"/>
       </FormGroup>
       <FormGroup row>
           <Label  className="text-danger"  htmlfor="cv">Your CV</Label>
         <Input type="file" >Your CV</Input>
       </FormGroup>
       <FormGroup className="ml-4"row>
         <Button  type="submit" className="bg-success" >Connect</Button>
         <Button outline className="ml-5" href={"/Login"}>Have account ?</Button>
       </FormGroup>
    </Form>
 </div>
 </div>
);


}
export default SignupComponent;