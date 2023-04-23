import {Route, Routes, Link} from "react-router-dom"
import Home from "./home"
import About from "./about"
import Contact from "./contact"
import '../App.css'
import junyaLogo from '../img/primal_pump.jpeg'

function Navbar() {
    return (
        <div className="navBar">
            <div className="logo">
                <img src={junyaLogo}/>
            </div>
            <div className="navBarLinks">
                <ul>
                    <li><Link to="/" style={{ textDecoration: 'none', color: "white" }}>Home</Link></li>
                    <li><Link to="/about" style={{ textDecoration: 'none' , color: "white" }}>About</Link></li>
                    <li><Link to="/contact" style={{ textDecoration: 'none', color: "white"  }}>Contact</Link></li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar