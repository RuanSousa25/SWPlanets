import React from "react";
import "./Planets.css"
export default function Planets({planets, handleClick}){
    return(
        <div className='content'>
        {planets.map((e, index)=>{
               return(
                   <div key={e.name} id={"card-planet"+index} className="card-planet" onClick={(e)=>handleClick(e,index)}>
                   <h1 className="name-planet">{e.name}</h1>
                   <div className="image-planet"></div>
                   <ul id={"planet-specs"+index} className="planet-specs">
                    <li>Population: {e.population}</li>
                    <li>Rotation Period: {e.rotation_period+"h"}</li>
                    <li>Diameter: {e.diameter+"km"}</li>
                    <li>Gravity: {e.gravity}</li>
                    <li>Climate: {e.climate}</li>
                    <li>Terrain: {e.terrain}</li>
                    <li>Surface Water: {e.surface_water+"%"}</li>
                   </ul>
                   </div>
               )
           })}
        </div>
    )
}