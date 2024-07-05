// import React from 'react'
import styles from "../About/style.module.css"
import { Navbar } from "../../NavBar/Navbar";

export const About = () => {
  return (
    <div> <Navbar/>
    <div className={styles.about}>About</div>
    </div>
  )
}
