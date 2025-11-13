import React, { useEffect, useRef, useState } from 'react'
import styles from "./Contact.module.css"
import after_image from '../../assets/after_image.svg';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(null)

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_w1z99ga', 'template_giwkq0l', form.current, {
                publicKey: '46uyGXK6C4DtQpAeY',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setFormSubmitted(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setFormSubmitted(false);

                },
            );
    };

    useEffect(() => {
        if (formSubmitted !== null) {
            const timer = setTimeout(() => setFormSubmitted(null), 4000);
            return () => clearTimeout(timer);
        }
    }, [formSubmitted]);
    return (
        <div className='flex flex-col mt-14 justify-between items-center  gap-10' id='contact'>
            <div className='flex justify-center items-center relative w-fit'>
                <h2 className=' font-bold text-4xl z-10'>Get In Touch</h2>
                <img src={after_image} alt="" className={` ${styles['image-nav']} max-w-[150px] w-[130px]`} />
            </div>
            <div className='flex flex-col w-[90%] gap-5 sm:flex-row px-1 sm:px-2.5 mx-auto mt-8'>
                <div className='sm:basis-[50%] flex flex-col justify-center'>
                    <h2 className={`text-4xl ${styles['head-contact-text']}`}>Let's Talk</h2>
                    <p>I’m always open to new opportunities, collaborations, or just a friendly chat about web development. Feel free to reach out — I’ll get back to you as soon as possible.</p>
                    <div className="flex  flex-col gap-1 mt-2">
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p>basupokharel2005@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faPhone} />
                            <p>+358 417128511</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p>Helsinki, Finland</p>
                        </div>
                    </div>
                </div>
                <div className='sm:basis-[50%]'>
                    <form className='flex flex-col gap-1' onSubmit={sendEmail} ref={form}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="name" id="name" placeholder='Enter Your Name..' className='outline-none border border-transparent focus:border-amber-500  rounded-sm px-2 py-1.5 bg-[#32323c] text-[##5c7278]' required />

                        <label htmlFor="email">Your Email</label>
                        <input type="text" name="email" id="email" placeholder='Enter Your Email.' className='outline-none border border-transparent focus:border-amber-500  rounded-sm px-2 py-1.5 bg-[#32323c] text-[##5c7278]' required />

                        <label htmlFor="message">Write Your Message Email</label>
                        <textarea id="message" name='message' placeholder='Enter Your Message..' className='outline-none border border-transparent focus:border-amber-500  rounded-sm px-2 py-1.5 bg-[#32323c] text-[##5c7278]' rows={5} />
                        <button type="submit" className={`${styles['submit-button']} w-fit p-2 rounded-full cursor-pointer mt-2`}>Submit Now</button>
                        {formSubmitted && <div class="alert alert-primary" role="alert">Message Sent Successfully
                        </div>}{formSubmitted == false && <div class="alert alert-error" role="alert">
                            Message Couldn't be sent, Please Try Again

                        </div>}
                    </form>
                </div>
            </div>

        </div >
    )
}

export default Contact