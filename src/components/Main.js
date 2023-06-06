import React, {Component} from "react";
import Planets from "./Planets";
import "./Main.css";
import api from "../api";


export default class Main extends Component{
    state={
        planets:[],
    }
    async componentDidMount(){
        
        
        for(var i = 1; i < 6; i++){
            let oldPlanets = this.state.planets;
            const response = await api.get(`?page=` + i);
            let newPlanets = response.data.results
            this.setState({
              planets: [...oldPlanets, ...newPlanets],
              allPlanets: [...oldPlanets, ...newPlanets]
            });
    }
}

    handleClick = (e, index)=>{
        let elcard = document.getElementById("card-planet"+index);
        let elspecs = document.getElementById("planet-specs"+index);
        if(elcard.className === "card-planet"){
            elcard.className = "card-planet-select";
            elspecs.style.visibility = "visible";
        } else if(elcard.className === "card-planet-select"){
            elcard.className = "card-planet";
            elspecs.style.visibility = "hidden";
        }
    }

    render(){
        const {planets} = this.state;
        return(
            <div className="main">
                 <h1 className='title'>Planets</h1>
                 <Planets planets={planets} handleClick={this.handleClick} handleInput={this.handleInput}/>
            </div>
            )
    }
}
