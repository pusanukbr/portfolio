import { NavLink } from "react-router-dom";
import logo from "../img/logo-white.svg";
import ButtonTranslation from "./buttonTranslation";
import { useTranslation } from "react-i18next";

function Header() {
    const { t } = useTranslation();
    const namePages = ['home', 'about', 'contact', 'projects'];
    return (
        <div className='container flex justify-between items-center fixed z-10 top-0 left-1/2 translate-x-50'>
            <div className='flex items-center py-2'>
                <img src={logo} alt="logo" className='mr-2'/>
                <span className='text-white'>Pysaniuk</span>
            </div>
            <nav className='text-grey lowercase flex gap-[32px]'>
                {namePages.map((item) => (
                    <NavLink key={item} to={item === 'home' ? '/' : `/${item}`} className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-white')}>
                        <span className='text-primary'>#</span>{t(item)}
                    </NavLink>
                ))}
                <ButtonTranslation />
            </nav>
        </div>
    );
}

export default Header;