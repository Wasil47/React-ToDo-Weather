import React, { useState } from "react";

function Conditions(props) {
  const iconURL= `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
  
  return (
    <div>
    <img src={iconURL} />
    <h1>{props.temp}</h1>
    </div>
  )
}

export default Conditions;