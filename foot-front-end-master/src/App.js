import React, { useEffect, useState } from 'react';
import './App.css';
import Matchss from './components/Matchss';
import LeagueNav from './components/LeagueNav';
import ListEquipes from './components/ListEquipes';
import axios from 'axios';
import LeagueButton from './componentsform/LeagueButton';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  
 
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
   


  useEffect(()=>{
    const url="http://localhost:8089/Leagues"
    axios.get(url).then((resp)=>{
        setLeagues(resp.data);
         console.log(resp.data)
     }).catch((err)=>{
        console.log(err);
    })
},[])
  

  return (
    <BrowserRouter>
        <nav className='m-1 p-1 border border-info'>
          <ul className='nav na-pills'>
            {
              leagues.map((championnat,index)=>
              <li>
              <Link className='btn btn-outline-info ms-1' key={index} to={"/"+championnat} onClick={equipesChange}>{championnat}</Link>
            </li>
            )}
          </ul>
        </nav>
        <Home></Home>
        <Routes>
          {
            leagues.map((championnat,index)=>
              <Route key={index} path={"/"+championnat} element={Home}></Route>
          
            )
          }
          
        </Routes>
        
    </BrowserRouter>
    
  );

}
export default App;
