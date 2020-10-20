import React from "react";

const seasonConfig ={
    summer:{
        text:"Let`s hit the beach",
        iconName:'sun',
        color:'red'
    },
    winter:{
        text:"Burr it is cold",
        iconName:'snowflake',
        color:'violet'
    }
}

export default function Seasons({ lat }) {

  const month = new Date().getMonth();
  const season = getSeason(lat,month);
  function getSeason(lat,month){
      if (month>2 && month<9) {
          return lat>0 ? 'summer' : 'winter'
      }else{
        return lat>0 ? 'winter' : 'summer'
      }
  }
  const {text,iconName,color} = seasonConfig[season]


return (
    <div className={`seasons ${season}`}>
    <i className={`icon_left inverted massive icon ${iconName} ${color}`}></i>
    <h1>{text}</h1>
    <i className={`icon_right inverted massive icon ${iconName} ${color}`}></i>
    </div>
);
}
