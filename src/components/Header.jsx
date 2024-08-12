import {NavLink} from "react-router-dom";
import logo from "../img/logo.png";
function Header() {
    return (
        <div className='container flex justify-between items-center h-[60px] fixed z-10 left-1/2 translate-x-50'>
            <div><img src={logo} alt="logo"/></div>
            <nav className='text-grey lowercase flex gap-[32px]'>
                <NavLink to='/' className='hover:text-white active:text-white'><span className='text-primary'>#</span>Home</NavLink>
                <NavLink to='/about' className='hover:text-white'><span className='text-primary'>#</span>About-me</NavLink>
                <NavLink to='/contact' className='hover:text-white'><span className='text-primary'>#</span>Contact</NavLink>
                <NavLink to='/projects' className='hover:text-white'><span className='text-primary'>#</span>Works</NavLink>
            </nav>
        </div>
    )
}

export default Header