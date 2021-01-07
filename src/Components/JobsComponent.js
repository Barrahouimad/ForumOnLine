import react from 'react';
import {Card, CardBody,Input, CardFooter,CardImg, CardTitle} from 'reactstrap';
import {jobs} from '../shared/Jobs';
import '../Jobs.css'
const JobsComponent=()=>{
    const hash=jobs.map((item)=>{
        return(
          
                    <div className="space-between">
                  <p className="bg-info">#{item.hashtags}</p>
                  </div>
              
          );}
          );
       
const Cardi=jobs.map((item)=>{
    return(
        <div className="col-md-6">
  <Card color="light" key={item.id} width="70px">
      <CardTitle  top src ={item.name}/>
      <CardBody>
          <h5 class="titre"><bold>{item.entreprise} </bold></h5>
          <p>{item.desc}</p>
          <div className="d-flex">
              
          <p>{hash}</p>
       
            </div>
      </CardBody>
  </Card>
  </div>);
});
return(
 <div  id="text1">
  <h1 className="pt-5 pl-5">JOBS FORUM <strong className="text-danger">EMI</strong> ENTREPRISES</h1>
  <div className="container pt-5">
       <div className="row">
           <div className="col-md-6">
               <Input type="text" placeholder="rechrcher un offre"></Input>
           </div>
           <div className="col-md-6" >
           <Input type="text" placeholder="filtrer les offres"></Input>
           </div>
       </div>
  </div>
  <div className="container pt-5">
      <div className="row">
          {Cardi}
      </div>
   </div>
</div>
);

}

export default JobsComponent;