import react from 'react';
import {Card, CardBody, CardFooter,CardImg} from 'reactstrap';
import {expo} from '../shared/expo';
import '../expo.css'
const ExpoComponent=()=>{
const Cardi=expo.map((item)=>{
    return(
        <div className="col-md-6">
  <Card key={item.id} width="70px">
      <CardImg height="200px" width="10px" top src ={item.img}/>
      <CardBody>
          <h5 class="titre"><bold>{item.name} </bold></h5>
          <p>{item.desc}</p>
      </CardBody>
  </Card>
  </div>);
});
return(
 <div  id="text1">
  <h1 className="pt-5 pl-5">EXPO FORUM <strong className="text-danger">EMI</strong> ENTREPRISES</h1>
  <h5 className="pl-5">Savoir plus sur les Startups, Sociétés
Corps invitee au Forum</h5>
  <div className="container pt-5">
      <div className="row">
          {Cardi}
      </div>
   </div>
</div>
);

}

export default ExpoComponent;