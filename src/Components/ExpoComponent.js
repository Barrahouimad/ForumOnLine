import react ,{useState}from 'react';
import {Card, CardBody, CardFooter,CardImg,Button} from 'reactstrap';
import useSWR from 'swr'
import {ImSpinner9} from 'react-icons/im';
import {Link } from 'react-router-dom';
import HeadeComponent from '../Components/headerComponent.js';
import '../expo.css'
const ExpoComponent=()=>{

    const [expo,setexpo]=useState(['']);
   /* fetch('http://localhost:3001/Expo')
       .then(response=>response.json())
       .then(Expo=>setexpo(Expo))
       .catch(error=>console.log(error.message));*/
    const fetcher=(url)=>fetch(url).then(res=>{return res.json()})
    const {data, error} =useSWR('http://localhost:3001/Expo',fetcher)
 
    if(error){
        return <p>faild to load</p>
    }
    if(!data){return( <div > 
        <div  id="text1">
  <h1 className="pt-5 pl-5">EXPO FORUM <strong className="text-danger">EMI</strong> ENTREPRISES</h1>
  <h5 className="pl-5">Savoir plus sur les Startups, Sociétés
Corps invitee au Forum</h5> </div>     
        <ImSpinner9 style={{fontSize:"350px", marginLeft:"380px", marginTop:"80px"}} id='spin'/> 
    </div>);}
 
    
const Cardi=data.map((item)=>{
    return(
        <div className="col-md-6 mt-5"  >
            <div class="cards" id={item.id} style={{border: "1px solid #617AFF" , borderRadius: "68px"}}>
           
              
                    <CardImg height="200px" width="10px" top src ={item.img}/>
                    <CardBody>
                        <h5 class="titre"><bold style={{font : " normal normal bold 33px/40px Montserrat"}}>{item.name} </bold></h5>
                        <p>{item.desc}</p>
                        <Button outline className="ml-4" href={`/Expo/${item.id}`}>Consulter</Button>
                    </CardBody>
             
               
  </div>
  </div>);
});
return(
 <div  id="text1">
      <HeadeComponent/>
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