import React from 'react'
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <div className='p-1 flex items-center justify-center flex-col gap-6 grow'>
            <img alt="" className='w-[230px] h-[230px] rounded-full border-2 border-red-500 p-2 mt-7' />
            <div className='flex justify-center items-center flex-col gap-2.5'>
                <h2 className='text-4xl font-bold text-center p-1 sm:max-w-[80%] mx-auto'><span className={styles['hero-text']}>I'm Basudev Pokharel</span>, Full Stack Web Developer in Finland</h2>
                <p className='text-center max-w-[90%] m-auto'>I am full stack developer student passionate about this web technologies and day by day going deeper and deeper and getting exploring and finding my way of living and destination</p>

                <div className='flex gap-2.5'>
                    <button className={`p-2 rounded-full cursor-pointer ${styles.button}`}>Connect With Me</button>
                    <button className={`p-2 rounded-full cursor-pointer ${styles['button-2']}`}>My Resume</button>
                </div>
            </div>

        </div>
    )
}
