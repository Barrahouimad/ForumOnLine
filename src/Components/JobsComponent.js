import react, {useState} from 'react';
import {Input} from 'reactstrap';
import { Spinner } from 'reactstrap';
import Jobss from './jobsItemescomponent';
import {ImSpinner6} from 'react-icons/im';
import '../Jobs.css'
import '../maincss.css'
import useSWR from 'swr'
import HeadeComponent from '../Components/headerComponent.js';





const JobsComponent=()=>{
   const [post,setpost]=useState('');
   const [entreprise,setentreprise]=useState('');
  // const [jobs,setJobs]=useState(['']);
  /* fetch('http://localhost:3001/Jobs')
     .then(response=>response.json())
    .then(Jobs=>setJobs(Jobs))
    .catch(error=>console.log(error.message));*/

    const fetcher = (url) => fetch(url).then(res =>{return res.json()} )
    const { data, error } = useSWR('http://localhost:3001/jobs', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return (
                <div >  
                   <div className="col-md-6" id="text1">
  <h1 className="pt-5 pl-5">JOBS FORUM <strong className="text-danger">EMI</strong> ENTREPRISES</h1>
    <h5 className="pl-5">Decouvrez les Offres de stage, PFE et
emploie <br/> presentees Startups, Sociétés
Corps invitee au Forum</h5>
</div>    
                   <ImSpinner6 style={{fontSize:"300px", marginLeft:"380px", marginTop:"80px"}} id='spin'/> 
              </div>);
   function ppost(event){
    setpost(event.target.value);
   }

   function eentreprise(event){
    setentreprise(event.target.value);
   
   }
return(
  <div>
     <HeadeComponent/>
    <div className="pt-5">
    <div className="row pl-5">

 <div className="col-md-6" id="text1">
  <h1 className="pt-3 pl-2">JOBS FORUM <strong className="text-danger">EMI</strong> ENTREPRISES</h1>
    <h5 className="pl-3">Decouvrez les Offres de stage, PFE et
emploie <br/> presentees Startups, Sociétés
Corps invitee au Forum</h5>
</div>
<div className="col-md-6 pt-5" >
       <div  className="row pt-4 pr-3 ">
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

         <Jobss jobs={data.filter((x)=>(entreprise=='' && post=='') || (x.name.includes(post) && x.entreprise.includes(entreprise ))|| (x.name.includes(post) && entreprise=='') || ( x.entreprise.includes(entreprise ) && post=='' ))} />
       
   </div>
</div>
</div>
);

}

export default JobsComponent;