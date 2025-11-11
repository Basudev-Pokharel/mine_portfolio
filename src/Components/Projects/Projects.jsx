import React from 'react'
import styles from "./Projects.module.css"
import after_image from '../../assets/after_image.svg';

const Projects = () => {
    return (
        <div className='flex flex-col mt-14 border-2 border-amber-500 justify-center items-center'>
            <div className='flex justify-center items-center relative w-fit border border-red-600'>
                <h2 className=' font-bold text-4xl z-10'>My Projects</h2>
                <img src={after_image} alt="" className={` ${styles['image-nav']} max-w-[150px] w-[130px]`} />
            </div>
            <div className='flex flex-wrap border border-green-500'>
                <div>
                </div>
            </div>

        </div>
    )
}

export default Projects