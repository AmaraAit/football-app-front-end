import React from "react";

const LeagueButton=({name,selectedLeague})=>{
return (
    <button class="btn btn-primary" type="button" onClick={selectedLeague} data-toggle="collapse"  data-target={name} aria-expanded="false" aria-controls="collapseExample">
    {name}
  </button>
  );
};
export default LeagueButton;