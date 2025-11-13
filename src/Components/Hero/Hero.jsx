import React from 'react'
import styles from "./Hero.module.css";
import my_photo from '../../assets/myphoto/photo.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from "../../assets/projetcs_photos/Basudev_Pokharel_CV_2025.pdf"

export const Hero = () => {
    return (
        <div className='p-1  flex items-center justify-center flex-col gap-6 grow' id='home'>
            <img alt="" src={my_photo} className='w-[230px] h-[230px] rounded-full border-2 border-primary p-2 mt-13 object-cover sm:mt-7' />
            <div className='flex justify-center items-center flex-col gap-2.5'>
                <h2 className='text-3xl font-bold text-center p-1 sm:max-w-[80%]  sm:text-4xl mx-auto'><span className={styles['hero-text']}>I'm Basudev Pokharel</span>, a Full Stack Web Developer based in Finland.</h2>
                <p className='text-center max-w-[90%] m-auto'>I’m passionate about web technologies and constantly improving my skills to build meaningful, responsive, and user-friendly digital experiences that make a real impact.</p>

                <div className='flex gap-2.5'>
                    <AnchorLink href='#contact' className={`p-2 rounded-full cursor-pointer ${styles.button}`}>Connect With Me</AnchorLink>
                    <a href={resume} className={`p-2 rounded-full cursor-pointer ${styles['button-2']}`} downloadable target='_main'>My Resume</a>
                </div>
            </div>

        </div>
    )
}
