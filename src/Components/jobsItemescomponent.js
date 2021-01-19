import React from 'react';
import '../Jobs.css'
import {Card, CardBody,Input, CardFooter,CardImg, CardTitle,Button} from 'reactstrap';


const Jobss =(props)=>{
    const hash=props.jobs.map((item)=>{
        return(
          
                    <div className="space-between">
                  <p  style={{background:"#FFEEEE" , color:"#F76060"}}>#{item.hashtags}</p>
                  </div>
              
          );}
          );
       
    const Cardi=props.jobs.map((item)=>{
        return(
         
            <div className="col-md-6 pt-5" >
                   <div class="cards" id={item.id} style={{border: "1px solid #FDCBCB" , borderRadius: "68px"}}>
      
          <CardBody>
          <CardTitle  ><bold style={{color:"#FB6161" , fontSize:40}}>{item.name}</bold></CardTitle>
              <h5 class="titre">{item.entreprise}  </h5>
              <p>{item.desc}</p>
              <div className="d-flex">
              <p  style={{background:"#FFEEEE" , color:"#F76060"}}>#{item.hashtags}</p>
           
                </div>
                <Button outline className="ml-4" href={`/Jobs/${item.id}`}>Apply</Button>
          </CardBody>
   
      </div>
      </div>);
    });


return(
    <div className="row">{Cardi}</div>

);

}
export default  Jobss;