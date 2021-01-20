import react from 'react';
import HeadComponent from './headerComponent.js';
import { FaBuilding } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { MdLocalOffer } from 'react-icons/md';
import {Button ,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
function Apply(props){
    const Getid=({match})=>{
        <div> 
     
        </div> 
    }
    
return(
    
    <div>
     <HeadComponent/>
     <Breadcrumb  style={{  width:"400px" ,marginTop:"10px",marginLeft:"10px",borderRadius: "87px"}}>

<BreadcrumbItem><Link to="/Jobs">JOBS</Link></BreadcrumbItem>
<BreadcrumbItem active>{props.expo.name}</BreadcrumbItem>
</Breadcrumb>
<div className="ml-5 mt-3">
<h5  style={{color: "#595353",font:" normal normal 800 34px/46px Montserrat"}}>{props.expo.name}</h5>

    <div className="row pl-5  mt-3">
<FaBuilding size="20" color="red"/><h3 style={{font: "normal normal 600 23px/30px Montserrat" , color:"#878282",marginLeft:"20px"}}>{props.expo.entreprise}</h3>
</div>
<div className="row pl-5  mt-3">

<GoLocation size="20"color="red"/><h3 style={{font: "normal normal 600 23px/30px Montserrat" , color:"#878282",marginLeft:"20px"}}>RABAT</h3>
</div>
<div className="row pl-5  mt-3">
<MdLocalOffer size="20"color="red"/><h3 style={{font: "normal normal 600 23px/30px Montserrat" , color:"#878282",marginLeft:"20px"}}>{props.expo.hashtags}</h3>
</div>
<h5 style={{color: "#595353",font:" normal normal 800 34px/46px Montserrat"}}>description</h5>
<p className="mt-3"style={{ color: "#8C8C8C"}}>{props.expo.desc}</p>
<h5 style={{color: "#595353",font:" normal normal 800 34px/46px Montserrat"}}>profile</h5>
<p className="mt-3" style={{ color: "#8C8C8C"}}>Pour le compte de notre client, multinationale spécialisée dans l’infogérance et l’intégration informatique, nous recrutons un Développeur J2EE confirmé en CDI sur Rabat Vous aurez pour principales missions et responsabilités: – Proposer une solution logicielle adaptée.</p>
<Button outline className="  mt-3" style={{background:"#F00101", width:"200px", height:"60px",marginLeft:"3%"}}>Apply</Button>
</div>

    </div>
    
    );}
 
export default Apply;

