import { Component } from "react";
import { NavLink } from "react-router-dom";


class DisplayPerformance extends Component
{
    
    
    render(){
        return(
           
                <div>
                    
                <div><NavLink to="/">Home</NavLink></div>
                <div><NavLink to="/display">Display</NavLink></div>
                <div><NavLink to="/performance">Performance</NavLink></div>
                <h1>You are in Dsiplay Perfomance Page</h1>

                
            </div>

            
    
        );

    
}

}

export default DisplayPerformance;