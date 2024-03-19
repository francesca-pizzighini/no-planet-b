import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div 
        className="navbar"
        >

        <NavLink
            to={"/temperature"}
        >
            Temperature
        </NavLink>

        <NavLink
            to={"/carbon-dioxide"}
        >
            Carbon Dioxide
        </NavLink>

        <NavLink
            to={"/methane"}
        >
            Methane
        </NavLink>

        <NavLink
            to={"/nitrous-oxide"}
        >
            Nitrous oxide
        </NavLink>

        <NavLink
            to={"/polar-ice"}
        >
            Polar ice
        </NavLink>

        <NavLink
            to={"/ocean-warming"}
        >
            Ocean warming</NavLink>
        
        </div>
    )
}

export default Navbar;
