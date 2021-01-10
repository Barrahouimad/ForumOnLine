import react, {useState} from 'react';
import {Card, CardBody,Input, CardFooter,CardImg, CardTitle} from 'reactstrap';
import Jobss from './jobs';
import '../Jobs.css'
import {jobs} from '../shared/Jobs';




const JobsComponent=()=>{
   const [post,setpost]=useState('');
   const [entreprise,setentreprise]=useState('');
   function ppost(event){
    setpost(event.target.value);
   }

   function eentreprise(event){
    setentreprise(event.target.value);
   
   }
return(
    <div className="pt-5">
    <div className="row pl-5">

 <div className="col-md-6" id="text1">
  <h1 className="pt-5 pl-5">JOBS FORUM <strong className="text-danger">EMI</strong> ENTREPRISES</h1>
    <h5 className="pl-5">Decouvrez les Offres de stage, PFE et
emploie <br/> presentees Startups, Sociétés
Corps invitee au Forum</h5>
</div>
<div className="col-md-6 pt-5" >
       <div  className="row pt-5 ">
           <div className="col">
               <Input type="text" id="offre" placeholder="Search for a post" onChange={(event)=>ppost(event)} ></Input>
           </div>
           <div className="col" >
           <Input type="text" id="filtre" placeholder="Entreprise" onChange={(event)=>eentreprise(event)}></Input>
           </div>
           </div>
</div>
       
  </div>
  <div className="container pt-5">
 
         <Jobss jobs={jobs.filter((x)=>x.name==post && x.entreprise==entreprise)}/>

   </div>
</div>
);

}

export default JobsComponent;