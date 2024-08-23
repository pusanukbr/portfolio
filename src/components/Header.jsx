import {NavLink} from "react-router-dom";
import logo from "../img/logo-white.svg";
function Header() {
    const activeLink = "text-white";
    return (
        <div className='container flex justify-between items-center fixed z-10 top-0 left-1/2 translate-x-50'>
            <div className='flex items-center justify-between py-2'>
                <img src={logo} alt="logo" className='mr-2'/>
                <span className='text-white'>Pusaniuk</span>
            </div>
            <nav className='text-grey lowercase flex gap-[32px]'>
                <NavLink to='/'
                         className={({ isActive }) => (isActive ? activeLink : "hover:text-white")}>
                    <span className='text-primary'>#</span>Home
                </NavLink>
                <NavLink to='/about'
                         className={({ isActive }) => (isActive ? activeLink : "hover:text-white")}>
                    <span className='text-primary'>#</span>About-me
                </NavLink>
                <NavLink to='/contact'
                         className={({ isActive }) => (isActive ? activeLink : "hover:text-white")}>
                    <span className='text-primary'>#</span>Contact
                </NavLink>
                <NavLink to='/projects'
                         className={({ isActive }) => (isActive ? activeLink : "hover:text-white")}>
                    <span className='text-primary'>#</span>Works
                </NavLink>
                <div></div>
            </nav>
        </div>
    )
}

export default Header