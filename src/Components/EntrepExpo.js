import HeadeComponent from './headerComponent.js';
import react from 'react';
import {card, Button, Input, Video,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link } from 'react-router-dom';
import { expo } from '../shared/expo.js';
import ReactStars from "react-rating-stars-component";

function EntrepExpo(props){
  //recuperer le id du url 

return(
<div>
  <HeadeComponent/>
  <Breadcrumb  style={{  width:"400px" ,marginTop:"10px",marginLeft:"10px",borderRadius: "87px"}}>

<BreadcrumbItem><Link to="/Expo">Expo</Link></BreadcrumbItem>
<BreadcrumbItem active>{props.expo.name}</BreadcrumbItem>
</Breadcrumb>
<div className="fluide-container">
    <div className="row">
       <div  className="col-5 ml-5 " style={{top: "40px",height:"500px",width: "1066px",background:" #FFFFFF 0% 0% no-repeat padding-box", boxShadow: "10px 10px 10px #DADADA29", border: "1px solid #E8E6E6",borderRadius: "87px",opacity: "1" }}>
           <img src={props.expo.img} height="100px" width="100px"/><b style={{color: "#818181", font: "normal normal bold 30px/66px Montserrat"}}>{props.expo.name}</b>
           <p style={{color: "#959595", paddingTop:"100px"}}>{props.expo.desc}</p>
           <Button style={{color:"#FE4444", border:"1px solid #FE4444",marginBottom:"-320px"}} outline type="file">En savoir plus</Button>
           <Button style={{background:"#FE4444",marginLeft:"10px", border:"1px solid #FE4444",marginBottom:"-320px"}} type="file">Deposer CV</Button>
       </div>

       <div className="col-5 ml-5" style={{top: "40px",height:"500px",width: "966px",background:" #FFFFFF 0% 0% no-repeat padding-box", boxShadow: "10px 10px 10px #DADADA29", border: "1px solid #E8E6E6",borderRadius: "87px",opacity: "1" }}>
         <h5 style={{background:"#FFEEEE 0% 0% no-repeat padding-box",color: "#FE6D6D",border: "1px solid #FFD0D0",width:"100px", marginLeft:"250px", marginTop :"30px"}}>#SERVICE</h5>
         <img src="Assets/bcp.png" height="300px" width="500px"/>
        <ReactStars count={5}  activeColor="#ffd700"/>
       </div>
 
    </div>
 </div>
</div>

);}

export default EntrepExpo;