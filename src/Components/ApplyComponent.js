import react from 'react';
import HeadComponent from './headerComponent.js';
import { FaBuilding } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { MdLocalOffer } from 'react-icons/md';
import {Button ,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
function Apply(){
    const Getid=({match})=>{
        <div> hello
     
        </div> 
    }
return(
    <div>
     <HeadComponent/>
     <Breadcrumb  style={{  width:"400px" ,marginTop:"10px",marginLeft:"10px",borderRadius: "87px"}}>

<BreadcrumbItem><Link to="/Jobs">JOBS</Link></BreadcrumbItem>
<BreadcrumbItem active>Apply</BreadcrumbItem>
</Breadcrumb>
<div className="ml-5 mt-3">
<h5  style={{color: "#595353",font:" normal normal 800 44px/56px Montserrat"}}>Frontend engineer</h5>

    <div className="row pl-5  mt-3">
<FaBuilding size="20" color="red"/><h3 style={{font: "normal normal 600 33px/40px Montserrat" , color:"#878282",marginLeft:"20px"}}>BCP</h3>
</div>
<div className="row pl-5  mt-3">

<GoLocation size="20"color="red"/><h3 style={{font: "normal normal 600 33px/40px Montserrat" , color:"#878282",marginLeft:"20px"}}>RABAT</h3>
</div>
<div className="row pl-5  mt-3">
<MdLocalOffer size="20"color="red"/><h3 style={{font: "normal normal 600 33px/40px Montserrat" , color:"#878282",marginLeft:"20px"}}>PFE</h3>
</div>
<h5 style={{color: "#595353",font:" normal normal 800 44px/56px Montserrat"}}>description</h5>
<p className="mt-3"style={{ color: "#8C8C8C"}}>Pour le compte de notre client, multinationale spécialisée dans l’infogérance et l’intégration informatique, nous recrutons un Développeur J2EE confirmé en CDI sur Rabat Vous aurez pour principales missions et responsabilités: – Proposer une solution logicielle adaptée. – Rédiger des documents de conception technique. – Mettre en place la version en gestion de configuration et respecter les bonnes pratiques de développement. – S’assurer de la qualité des livrables logicielles et documentaires tout en respectant les délais et les charges.</p>
<h5 style={{color: "#595353",font:" normal normal 800 44px/56px Montserrat"}}>profile</h5>
<p className="mt-3" style={{ color: "#8C8C8C"}}>Pour le compte de notre client, multinationale spécialisée dans l’infogérance et l’intégration informatique, nous recrutons un Développeur J2EE confirmé en CDI sur Rabat Vous aurez pour principales missions et responsabilités: – Proposer une solution logicielle adaptée.</p>
<Button className="bg-danger ml-3 mt-3">Apply</Button>
</div>

    </div>
    
    );}
 
export default Apply;

