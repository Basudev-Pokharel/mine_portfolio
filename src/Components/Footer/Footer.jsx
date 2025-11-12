import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <footer className='flex flex-col items-center gap-2 bg-[#0d2729] mt-14  pt-1.5'>
            <div className='flex flex-col items-center gap-2  w-[90%] m-auto'>
                <h2>Basudev Pokharel</h2>
                <p>Hello You can Follow me in the social Links below );</p>
                <div className='flex gap-4'>
                    <a href="">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="
                ">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>
            <div className='bg-[#050505] w-full text-center p-1 sm:p-1.5'>
                Copyright &copy; Basudev Pokharel. Made with 💜.
            </div>
        </footer>
    )
}

export default Footer