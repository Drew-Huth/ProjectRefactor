import {useState} from "react";
import {Link, NavLink} from  "react-router-dom"
import "./Navbar.css"
import { ICONS } from "../Content/icons";
// import {style} from "./style.module.css"


export const Navbar = () => {
    const [menuOpen, setMenuOpen] =useState(false)
    const [top, setTop] = useState(false)
    const [middle, setMiddle] = useState(false)
    const [bottom, setBottom] = useState(false)
    return(
        <nav>
            <Link to="/">{ICONS.LETTERD}</Link>
            <div className="menu" 
            onClick={() =>{
                setMenuOpen(!menuOpen);
                setTop(!top);
                setMiddle(!middle);
                setBottom(!bottom);
                
            }}>
                <span className={top ? "top" : ""}></span>
                <span className={middle ? "middle" : ""}></span>
                <span className={bottom ? "bottom" : ""}></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/experience">Experience</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li> 
            </ul>
        </nav>
    )
}