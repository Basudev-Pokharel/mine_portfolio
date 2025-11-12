import React from 'react'
import after_image from '../../assets/after_image.svg';
import styles from "./About.module.css"
import { faInfinity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import my_image from '../../assets/myphoto/photo3.jpeg';

const About = () => {
    return (
        <div className='flex flex-col justify-between mb-3.5' id='about'>
            <div className=' flex flex-col items-center mt-14 gap-10'>
                <div className='flex justify-center items-center relative w-fit'>
                    <h2 className=' font-bold text-4xl z-10'>About Me</h2>
                    <img src={after_image} alt="" className={` ${styles['image-nav']} max-w-[150px] w-[130px]`} />
                </div>
                <div className='flex flex-col sm:flex-row gap-5 items-center sm:items-start w-[90%]  mt-8 overflow-hidden'>
                    <img src={my_image} alt="" className='min-w-[290px] max-w-[350px] h-[290px]   p-2 object-cover' />
                    <div className='flex flex-wrap w-fit'>
                        <p>I am a dedicated Full Stack Web Developer student from Finland. I’ve developed a solid foundation in HTML, CSS, JavaScript, React, Laravel, and MySQL. I’m always curious to learn more and challenge myself through projects. Beyond coding, I enjoy playing soccer, cooking, and exploring creative ideas that keep me inspired both in and outside of tech.</p>
                        <div className='flex flex-col w-full mt-4'>
                            <div className='flex items-center justify-start gap-2 hover:scale-[1.010] transition-all ease-in transition-discrete duration-150 cursor-pointer'>
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
                            <div className='flex items-center justify-start gap-2 hover:scale-[1.010] transition-all ease-in transition-discrete duration-150 cursor-pointer'>
                                <p className='min-w-32'>Tailwind</p>
                                <div className={`w-[80%] h-[5px] ${styles['skills-line']}`}></div>
                            </div>
                            <div className='flex items-center justify-start gap-2 hover:scale-[1.010] transition-all ease-in transition-discrete duration-150 cursor-pointer'>
                                <p className='min-w-32'>Bootstrap</p>
                                <div className={`w-[80%] h-[5px] ${styles['skills-line']}`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex items-center justify-around ${styles.achievements} mt-14`}>
                <div className='text-center flex-1'>
                    <h3 className='font-bold'>10+</h3>
                    <p>Projects Completed</p>
                </div>
                <hr className="w-px h-12 bg-gray-400 border-0" />
                <div className='flex-1 text-center'>
                    <h3 className='font-bold'>6+</h3>
                    <p>Technologies Learned</p>
                </div>
                <hr className="w-px h-12 bg-gray-400 border-0" />

                <div className='flex-1 text-center'>
                    <h3 className='font-bold'><FontAwesomeIcon icon={faInfinity} color='#00d9cc' /></h3>
                    <p>Curiosity to Learn More</p>
                </div>
            </div>
        </div >
    )
}

export default About