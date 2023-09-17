import styles from "../styles/Home.module.css"
import React from 'react'

import {useNavigate} from 'react-router-dom'


const Home = () => {

    const navigate= useNavigate()
   
    return (

        <section className={styles.home}>
            <div>
                <div><h1>Hi! I’m Elena, a fullstack developer</h1></div>
                <div><p> I'm an aspiring professional in the tech industry with a keen interest in web development. I'm passionate about creating innovative technical solutions for meaningful projects.</p></div>
                <div><button className={styles.btn} onClick={()=>navigate('/projects')}>See my projects</button><button className={styles.btn} onClick={()=>navigate('/contact')}>Contact me</button></div>
            </div>
            <div>  <div><img className={styles.photo} src={require('./img/cosita.jpg')}/></div></div>
        </section>
    )
}

export default Home