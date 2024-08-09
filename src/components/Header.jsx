import {Link} from "react-router-dom";
import logo from "../img/logo.png";
function Header() {
    return (
        <div>
            <div><img src={logo} alt="logo"/></div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/projects'>Projects</Link>
            </nav>
        </div>
    )
}

export default Header