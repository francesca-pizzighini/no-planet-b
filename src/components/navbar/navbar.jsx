import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { HashLink } from "react-router-hash-link";


function Navbar({ darkMode, toggleDarkMode}) {
    const navLinkStyle =  ({ isActive }) => {
        return {
            backgroundColor: isActive ? (darkMode ? "#000" : "#EAECEC" ) : (darkMode ? "#1F1F1F" : "#D6D6D6"),
            color: isActive ? (darkMode ? "#EAECEC" : "#1F1F1F") : (darkMode ? "#EAECEC" :"#1F1F1F"),
        }
    }

    return (
        <div 
        className="navbar"
        >
            <NavLink
                to={"/data/temperature"}
                style={navLinkStyle}
            >
                <div>Temperature</div>
            </NavLink>

            <NavLink
                to={"/data/carbon-dioxide"}
                style={navLinkStyle}
            >
                <div>Carbon Dioxide</div>
            </NavLink>

            <NavLink
                to={"/data/methane"}
                style={navLinkStyle}
            >
                <div>Methane</div>
            </NavLink>

            <NavLink
                to={"/data/nitrous-oxide"}
                style={navLinkStyle}
            >
                <div>Nitrous oxide</div>
            </NavLink>

            <NavLink
                to={"/data/polar-ice"}
                style={navLinkStyle}
            >
                <div>Polar ice</div>
            </NavLink>

            <NavLink
                to={"/data/ocean-warming"}
                style={navLinkStyle}
            >
                <div>Ocean warming</div>
            </NavLink>
        
        </div>
    )
}

export default Navbar;
