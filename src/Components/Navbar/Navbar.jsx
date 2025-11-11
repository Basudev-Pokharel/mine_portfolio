import React from 'react'
import logo from "../../assets/logo.svg";
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <header className='flex justify-between items-center px-4 mt-1.5'>
            <img src={logo} alt="" className='w-[100px]' />
            {/* <div className='flex justify-between items-center border gap-3.5 flex-'> */}
            <ul className='flex gap-3'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <button className={`p-2 rounded-full cursor-pointer ${styles.button}`}>Connect With Me</button>
            {/* </div> */}
        </header >
    )
}

export default Navbar