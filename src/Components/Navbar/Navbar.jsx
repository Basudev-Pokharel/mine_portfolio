import React, { useEffect, useRef, useState } from 'react'
import logo from "../../assets/logo.svg";
import styles from "./Navbar.module.css"
import nav_underline from "../../assets/nav_underline.svg"
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [linkNav, setLinkNav] = useState();
    let menuRef = useRef();

    function NavLinkCLicked(e) {
        let linkName = e.target.innerText.toLowerCase();
        setLinkNav(linkName);

    }
    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (
        <header className='flex justify-between items-center px-4 mt-1.5 relative sm:px-8' id='home'>
            <img src={logo} alt="" className='w-[100px] sm:w-[150px] cursor-pointer' onClick={() => { window.location.href = '/' }} />
            <div className='block sm:hidden' onClick={() => { setIsMenuOpen(true) }}>
                <FontAwesomeIcon icon={faBars} className='block sm:hidden' />
            </div>
            <ul ref={menuRef} className={`flex bg-[#0d2729]  flex-col items-center gap-5 -top-2 right-0 w-[200px] p-5 h-screen  transition-all duration-300 ease-in ${isMenuOpen ? 'absolute right-0 flex' : 'hidden -right-[350px]'} sm:bg-transparent sm:flex sm:gap-2.5 sm:flex-row  sm:w-auto sm:h-auto sm:p-1  `} >
                <li className={`mt-14 sm:mt-0 ${styles.lists}`} onClick={NavLinkCLicked}>
                    <AnchorLink href="#home" onClick={() => { setIsMenuOpen(false) }}>Home</AnchorLink>
                    {linkNav == 'home' && <img src={nav_underline} alt="" />}
                </li>
                <li className={` ${styles.lists}`} onClick={NavLinkCLicked}><AnchorLink href="#about" onClick={() => { setIsMenuOpen(false) }}>About</AnchorLink>
                    {linkNav == 'about' && <img src={nav_underline} alt="" />}
                </li>
                <li className={` ${styles.lists}`} onClick={NavLinkCLicked}><AnchorLink href="#project" onClick={() => { setIsMenuOpen(false) }}>Projects</AnchorLink>
                    {linkNav == 'projects' && <img src={nav_underline} alt="" />}
                </li>
                <li className={` ${styles.lists}`} onClick={NavLinkCLicked}><AnchorLink href="#contact" onClick={() => { setIsMenuOpen(false) }}>Contact</AnchorLink>
                    {linkNav == 'contact' && <img src={nav_underline} alt="" />}
                </li>
                <li className='sm:hidden' onClick={() => { setIsMenuOpen(false) }}><FontAwesomeIcon icon={faXmark} /></li>
            </ul>
            <AnchorLink href='#contact' className={`hidden sm:block p-2 rounded-full cursor-pointer ${styles.button}`}>Connect With Me</AnchorLink>
        </header >
    )
}

export default Navbar