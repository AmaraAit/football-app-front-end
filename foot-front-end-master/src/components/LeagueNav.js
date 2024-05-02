import React from 'react';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import ListEquipes from './ListEquipes';
import LeagueButton from '../componentsform/LeagueButton';
function LeagueNav() {
    const [leagues,setLeagues]=useState([])
    const[league,setLeague]=useState("Ligue-1")
    const url="http://localhost:8089/Leagues"
    const selectleague=(a)=>{
      setLeague(a);
    }
    useEffect(()=>{
       
        axios.get(url).then((resp)=>{
            setLeagues(resp.data);
             console.log(resp);
         }).catch((err)=>{
            console.log(err);
        })
    },[])
    
    return (<div ><ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
      {
        leagues.map((championnat,index)=>
          <div>
            <p>
                <LeagueButton name={championnat} selectedLeague={selectleague(championnat)}></LeagueButton>

            </p>

          </div>
            )
      }
    
    
  </ul>
  
  <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
   
    </div>
);
}

export default LeagueNav;