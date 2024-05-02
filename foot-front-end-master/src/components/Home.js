import React, { useState } from 'react';
import Matchss from './Matchss';
import axios from 'axios';
import ListEquipes from './ListEquipes';

function Home(props) {
    const [league,setLeague]=useState("Ligue-1")
  const [leagues,setLeagues]=useState([])
  const [equipes,setEquipes]=useState([])
  
  
  function equipesChange(){
    const league=window.location.pathname.slice(1,window.location.pathname.length)
  const url="http://localhost:8089"+window.location.pathname
  axios.get(url).then((resp)=>{
      setLeague(resp.data);
       
   }).catch((err)=>{
      console.log(err);
  })
}
   
    return (
        <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3 bg-success">
            <ListEquipes></ListEquipes>
          </div>
          <div class="col-sm-9 bg-warning">
            
                <Matchss></Matchss>
           
          </div>
        </div>
      </div> 
        
    );
}

export default Home;