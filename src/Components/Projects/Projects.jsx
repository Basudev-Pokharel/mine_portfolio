import React, { useEffect, useRef, useState } from 'react'
import styles from "./Projects.module.css"
import after_image from '../../assets/after_image.svg';
import project_list from '../../assets/project_list';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
const Projects = () => {
    let [selectedProject, setSelectedProject] = useState(null);
    console.log(selectedProject);
    let modalRef = useRef();

    useEffect(() => {

        function handleClickOutside(e) {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setSelectedProject(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    return (
        <div className='flex flex-col mt-20 justify-center items-center gap-10 w-full' id='project'>
            <div className='flex justify-center items-center relative w-fit '>
                <h2 className=' font-bold text-4xl z-10'>My Projects</h2>
                <img src={after_image} alt="" className={` ${styles['image-nav']} max-w-[150px] w-[130px]`} />
            </div>
            <div className='flex flex-wrap flex-col  p-5 mt-8 w-full'>
                <div className=' grid sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full'>
                    {
                        project_list.map((project, idx) => {
                            return <div key={idx} className="card bg-[#0d2729] sm:min-h-[250px] " >
                                <div className="card-body">
                                    <h5 className="card-title mb-2.5">{project.name}</h5>
                                    <p className="mb-4">{project.description.slice(0, 145) + '...'}</p>
                                    <div className="card-actions">
                                        <button className=" bg-transparent border-none text-[#00d9cc]" onClick={() => {
                                            setSelectedProject(project);
                                        }} >See More</button >
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>
                <div className={`w-auto p-2 rounded-full w-fit cursor-pointer mt-2 border flex gap-1 hover:gap-4 transition-all duration-300 ease-in `}>
                    <p>
                        show more
                    </p>
                    &#8594;

                </div>
            </div>
            {/* //Model here */}
            {selectedProject &&
                <div className={`${selectedProject ? 'block' : 'hidden'} fixed inset-0  flex justify-center items-center z-50`} tabIndex="-1">
                    <div ref={modalRef} className="modal-dialog  max-h-[90vh] w-full max-w-3xl overflow-hidden">
                        <div className="modal-content bg-[#0d2729] border border-[#00d9cc] h-full">
                            <div className="modal-header">
                                <h3 className="modal-title">{selectedProject.name}</h3>
                            </div>
                            <div className="modal-body overflow-y-auto max-h-[65vh]">
                                <p> {selectedProject.description}</p>
                                <div className='flex gap-2 my-2'>
                                    <h2>Technology:</h2>
                                    <div className='flex gap-1 flex-wrap'>
                                        {selectedProject.technologies.map((tech, idx) => {
                                            return <span key={idx} className="badge badge-primary" data-theme='portfolio_theme'>{tech}</span>

                                        })}
                                    </div>
                                </div>
                                <div className="flex gap-x-2">
                                    <h2>Links:</h2>
                                    {
                                        selectedProject.links.map((link, idx) => {
                                            return <div key={idx} className='flex flex-row gap-2 hover:scale-[1.10] transition-all duration-300 ease-out '>
                                                {link.github && <a href={link.github} className='text-3xl hover:text-[#00d9cc]'><FontAwesomeIcon icon={faSquareGithub} /></a>}
                                                {link.live && <a href={link.live} className='text-3xl hover:text-[#00d9cc]'><FontAwesomeIcon icon={faLink} /></a>}
                                            </div>
                                        })
                                    }
                                </div>
                                <div className="flex mt-2 gap-2 flex-wrap">
                                    {
                                        selectedProject.images?.length > 0 && selectedProject.images.map((image, idx) => {
                                            return <img key={idx} src={image} className='max-w-[200px] max-h-[200px] rounded-sm border-2' />
                                        })
                                    }
                                </div>
                                <p className='mt-1'> Note: Open Image in New tab for better Visibility</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={() => {
                                    setSelectedProject(null);
                                }}>Close &#8595;</button>
                            </div>
                        </div>
                    </div>
                </div>}
            {/* Model ends Here */}
        </div >
    )
}

export default Projects