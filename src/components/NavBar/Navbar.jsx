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
        <div className="test">
            <Link to="/" className="logo" >{ICONS.LETTERD}</Link>
        <nav>
            <ul>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/experience">Experience</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
            </ul>
        </nav>
        <div className="menu" 
            onClick={() =>{
                setMenuOpen(!menuOpen);
                setTop(!top);
                setMiddle(!middle);
                setBottom(!bottom);
                
            }}>
                <span className={top ? "top" : "top-closed"}></span>
                <span className={middle ? "middle" : "middle-closed"}></span>
                <span className={bottom ? "bottom" : "bottom-closed"}></span>
            </div>
        </div>
    )
}