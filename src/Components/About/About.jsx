import React from 'react'
import after_image from '../../assets/after_image.svg';
import styles from "./About.module.css"

const About = () => {
    return (
        <div className='flex flex-col'>
            <div className=' flex flex-col items-center mt-14'>
                <div className='flex justify-center items-center relative w-fit'>
                    <h2 className=' font-bold text-4xl z-10'>About Me</h2>
                    <img src={after_image} alt="" className={` ${styles['image-nav']} max-w-[150px] w-[130px]`} />
                </div>
                <div className='flex flex-col sm:flex-row gap-5 items-center sm:items-start w-[90%]  mt-8 overflow-hidden'>
                    <img src="" alt="" className='min-w-[230px] max-w-[230px] h-[230px]   p-2' />
                    <div className='flex flex-wrap w-fit'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptas voluptate itaque neque dolorem accusamus placeat debitis fugiat magnam dolores!lorem8    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
                        <div className='flex flex-col w-full mt-4'>
                            <div className='flex items-center justify-start gap-2 hover:scale-[1.010] transition-all ease-in transition-discrete duration-150'>
                                <p className='min-w-32'>HTML & CSS</p>
                                <div className={`w-[80%] h-[5px] ${styles['skills-line']}`}></div>
                            </div>
                            <div className='flex items-center justify-start gap-2 hover:scale-[1.010] transition-all ease-in transition-discrete duration-150 cursor-pointer'>
                                <p className='min-w-32'>JS & React</p>
                                <div className={`w-[80%] h-[5px] ${styles['skills-line']}`}></div>
                            </div>
                            <div className='flex items-center justify-start gap-2 hover:scale-[1.010] transition-all ease-in transition-discrete duration-150 cursor-pointer'>
                                <p className='min-w-32'>PHP & Laravel</p>
                                <div className={`w-[80%] h-[5px] ${styles['skills-line']}`}></div>
                            </div>
                            <div className='flex items-center justify-start gap-2 hover:scale-[1.010] transition-all ease-in transition-discrete duration-150 cursor-pointer'>
                                <p className='min-w-32'>MySQL</p>
                                <div className={`w-[80%] h-[5px] ${styles['skills-line']}`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex items-center justify-around ${styles.achievements} mt-14`}>
                <div className='text-center flex-1'>
                    <h3 className='font-bold'>10+</h3>
                    <p>Years of Experience</p>
                </div>
                <hr className="w-px h-12 bg-gray-400 border-0" />
                <div className='flex-1 text-center'>
                    <h3 className='font-bold'>10+</h3>
                    <p>Years of Experience</p>
                </div>
                <hr className="w-px h-12 bg-gray-400 border-0" />

                <div className='flex-1 text-center'>
                    <h3 className='font-bold'>10+</h3>
                    <p>Years of Experience</p>
                </div>
            </div>
        </div >
    )
}

export default About