import React from 'react';
import '../Jobs.css'
import {Card, CardBody,Input, CardFooter,CardImg, CardTitle} from 'reactstrap';


const Jobss =(props)=>{
    const hash=props.jobs.map((item)=>{
        return(
          
                    <div className="space-between">
                  <p className="bg-info">#{item.hashtags}</p>
                  </div>
              
          );}
          );
       
    const Cardi=props.jobs.map((item)=>{
        return(
            <div className="col-md-6">
      <Card color="light" key={item.id} width="70px">
          <CardBody>
          <CardTitle  ><bold>{item.name}</bold></CardTitle>
              <h5 class="titre">{item.entreprise}  </h5>
              <p>{item.desc}</p>
              <div className="d-flex">
                  
              <p>{hash}</p>
           
                </div>
          </CardBody>
      </Card>
      </div>);
    });


return(
    <div className="row">{Cardi}</div>

);

}
export default  Jobss;