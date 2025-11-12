import React, { useEffect, useRef, useState } from 'react'
import styles from './Progress.module.css';

const ProgressBar = () => {
    let progressRef = useRef();
    const [progressWidth, setProgressWidth] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const totalHeight = document.documentElement.scrollHeight;
            const viewportHeight = window.innerHeight;
            const progress = (scrollTop / (totalHeight - viewportHeight)) * 100;
            setProgressWidth(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, [])
    return (<div className={styles.line} ref={progressRef} style={{ width: `${progressWidth}%` }}></div >)
}

export default ProgressBar