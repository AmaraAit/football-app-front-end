import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

function ListEquipes() {
    const[league,setLeague]=useState();
    const [equipes,setEquipes]=useState([]);
    
    
    useEffect(()=>{
        const league=window.location.pathname.slice(1,window.location.pathname.length)
        axios.get("http://localhost:8089/Leagues"+window.location.pathname).then((resp)=>{
            setEquipes(resp.data);
           
         }).catch((err)=>{
            console.log(err);
        })
    },[equipes])
    
    return (
        <div class="card">
            <div class="card-header"><h6>{window.location.pathname.slice(1,window.location.pathname.length)}</h6></div>
            <div class="card-body p-0 m-0"><table className="table table-info d-inline-flex p-0 m-0">
  <thead>
    
  </thead>
  <tbody className='w-100 m-0 p-0'>
    {
        equipes.map((equipe,index)=>
        <tr key={index} className='m-0  w-100'>
            <th scope>{index}</th>
            <td className='border'>{equipe}</td>
            
    </tr>)
    }
    
   
  </tbody>
  <Outlet></Outlet>
</table></div>
            <div class="card-footer">Footer</div>
            
        
            
</div>
    );
}

export default ListEquipes;