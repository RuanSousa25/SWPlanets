import React from "react";
import "./Header.css";



export default function Header(){
    return(
        <div>
        <header>
            <div className="divlogo"></div>
        </header>
        <nav> 
            <div className="nav-link"><button >Planets</button>
            <div className="lightsaberborder red"></div>
            </div> 
            <div className="nav-link">
                <button >Species</button><div className="lightsaberborder green"></div>
            </div> 
            <div className="nav-link">
                <button >Starships</button><div className="lightsaberborder blue"></div>
            </div>
            <div className="nav-link">
                <button >People</button><div className="lightsaberborder purple"></div>
            </div>
        </nav>
        </div>
    )
}