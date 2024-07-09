// import React from 'react'
import styles from "../Home/style.module.css"
import { Link } from "react-router-dom"
import {LINKS} from "../../Content/links"
import {ICONS} from "../../Content/icons"
import Me from "../../Content/Images/ME.png"

export const Home = () => {

    const heightBreakpoint = 1200;
    const screenHeight = window.innerHeight;

    if (screenHeight > heightBreakpoint){
        return (
            <div className={styles.home} id="home">
                <div className={styles.homeContent}>
                    <h1>Hi, I am <Link to="/about" className={styles.title}>Drew Huth</Link></h1>
                    <h3>Full-Stack Software Developer</h3>
                    <p>Welcome to my portfolio website! Here, you&apos;ll find a curated collection of my best work, showcasing my expertise in web development and programming and my unwavering commitment to delivering outstanding results.</p>
                    <div className={styles.buttons}>
                        <div className={styles.buttonBox}>
                            <a href="#">Resume</a>
                            <a href="mailto: drewbhuth@gmail.com">Let&apos;s Chat</a>
                        </div>       
                        <div className={styles.homeLinks}>
                            <a href={LINKS.INSTA} target="_blank">{ICONS.INSTA}</a>
                            <a href={LINKS.LINKEDIN} target="_blank">{ICONS.LINKEDIN}</a>
                            <a href={LINKS.GITHUB}target="_blank">{ICONS.GITHUB}</a>
                        </div>
                    </div>
                </div>
                <div className={styles.me}>
            <img src={Me} alt="Image of Drew Huth sitting on the steps of Alumni Hall at Saint Anselm College" />
                </div>    
            </div>
        )
    }
    else{
        return (
            <div className={styles.home} id="home">
                <div className={styles.homeContent}>
                    <h1>Hi, I am <Link to="/about" className={styles.title}>Drew Huth</Link></h1>
                    <h3>Full-Stack Software Developer</h3>
                    <p>Welcome to my portfolio website! Here, you&apos;ll find a curated collection of my best work, showcasing my expertise in web development and programming and my unwavering commitment to delivering outstanding results.</p>
                    <div className={styles.buttons}>
                        <div className={styles.buttonBox}>
                            <a href="#">Resume</a>
                            <a href="mailto: drewbhuth@gmail.com">Let&apos;s Chat</a>
                        </div>       
                        <div className={styles.homeLinks}>
                            <a href={LINKS.INSTA} target="_blank">{ICONS.INSTA}</a>
                            <a href={LINKS.LINKEDIN} target="_blank">{ICONS.LINKEDIN}</a>
                            <a href={LINKS.GITHUB}target="_blank">{ICONS.GITHUB}</a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
