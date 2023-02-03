import styles from "../styles/Home.module.css"
import React from 'react'

import {useNavigate} from 'react-router-dom'


const Home = () => {

    const navigate= useNavigate()
   
    return (

        <section className={styles.home}>
            <div>
                <div><h1>Hi! I’m Elena, a fullstack developer</h1></div>
                <div><p>I can help you to build web pages from the scratch, develop a new feature to your product or improve the design of your service. This webpage is designed and developed by me using React.</p></div>
                <div><button className={styles.btn} onClick={()=>navigate('/projects')}>See my projects</button><button className={styles.btn} onClick={()=>navigate('/contact')}>Contact me</button></div>
            </div>
            <div>  <div><img className={styles.photo} src={require('./img/cosita.jpg')}/></div></div>
        </section>
    )
}

export default Home