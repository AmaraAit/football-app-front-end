import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function Matchss() {
   
    const data = [
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"},
        {championnat:"Premiere League",dateMatch:"2024-01-26 20:45",equipeIn:"osasuna", equipeOut:"FC Barcelone"}
      
      ]
   
    
    
   
    return (<>
    
<div class="row w-75">
 
       {
            data.map((data,i)=>
            <div className="card col-sm-4">
            <div className="card-header bg-dark text-white">
                 {data.championnat}
            </div>
            <div className="card-body bg-dark bg-gradient">
                <h5 className="card-title text-white">{data.dateMatch}</h5>
                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                    <h6><button type="button" className="btn m-0 p-0 btn-outline-primary ">{data.equipeIn}</button></h6>
                    <h6><button type="button" className="btn btn-outline-primary ">vs</button></h6>
                    <h6><button type="button" className="btn btn-outline-primary">{data.equipeOut}</button></h6>
                </div>
               
            </div>
            <div className="card-footer bg-dark bg-gradient text-white">
            <h6>Special title treatment</h6>
               <h6> 
                <span className="badge rounded-pill text-bg-success">Success</span>
                <span className="badge rounded-pill text-bg-danger">Danger</span>
                <span className="badge rounded-pill text-bg-warning">Warning</span>
                <span className="badge bg-secondary">Info</span>
                </h6>
            </div>
        </div>
        )
       }
      </div>  
        </>
    );
}

export default Matchss;