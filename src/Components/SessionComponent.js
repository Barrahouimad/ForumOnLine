import HeadeComponent from '../Components/headerComponent.js';
import react from 'react';
import useSWR from 'swr'
import {Button} from 'reactstrap';
import {MdFilterList} from 'react-icons/md'
import {ImSpinner6} from 'react-icons/im';
import {AiFillMessage} from 'react-icons/ai'
function Session(){

    const fetcher = (url) => fetch(url).then(res =>{return res.json()} )
    const { data, error } = useSWR('http://localhost:3001/jobs', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return (
                <div >     
                   <ImSpinner6 style={{fontSize:"300px", marginLeft:"380px", marginTop:"80px"}} id='spin'/> 
               </div>);

const cartes=data.map((item)=>{
    return(
    <div className="mt-5">
      <div style={{border:"1px solid #FFFFFF", borderRadius:"80px" , width:"1000px",height:"300px", boxShadow:"12px 12px 12px #DADADA29"}}>
            <div className="d-flex justify-content-between  ">
                    <img className=" pt-5 " src="assets/bcp.png" height="200px" width="300px"/>
                    <h3 className="pt-5 mt-5  " style={{fontFamily: "Montserrat 62px/52px" , color:" #818181",marginRight:"300px"}}>{item.entreprise}</h3>
                   <div>
                       <Button className=" mr-5 " style={{height:"40px",background:"#ff3d00",width:"250px",borderRadius:"80px",marginTop:"90px"}} ><MdFilterList className="mr-2"/>  Rejoindre file d'attente</Button>
                       <Button outline className="  mr-5 " style={{height:"40px",width:"250px",borderRadius:"80px",marginTop:"10px"}} ><AiFillMessage className="mr-2"/>   envoyer un message</Button>
                   </div> 
           </div>
      </div>
    </div>);
});

 return(
  <div>
      <HeadeComponent/>
     <div className="container" style={{border:"1px solid #FFFFF", boxShadow:"13px 13px 13px #DADADA29 ",widt:"4500px"}}>
      {cartes}
    </div>

  </div>);   
}

export default Session;




