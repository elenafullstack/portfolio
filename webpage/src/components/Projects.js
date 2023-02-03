import React from 'react'
import styles from "../styles/Projects.module.css"


const Projects = () => {
return (
    <div className={styles.projects}>
    <h1 className={styles.title}>My projects</h1>
    <section>
        <div>
        <a className={styles.link} href="https://birdnest-elena.onrender.com/">SEE PROJECT</a>
        <a className={styles.link} href="https://assignments.reaktor.com/birdnest">SEE ASSIGNMENT</a>
            <div> <h2 className={styles.special}>Birdnest - Reaktor summer trainee
                 pre-assignment</h2></div>
           <img  src={require('./img/bird.png')}/>
        </div>
      
        <div>
           <div> <h2 className={styles.normal}>Phonebook</h2></div>
           <a className={styles.link} href="https://phonebook-elena.onrender.com/">SEE PROJECT</a>
           <img  src={require('./img/phone.png')}/>
        </div>
        <div>
         <a className={styles.link} href="https://countries-elena.onrender.com/">SEE PROJECT</a>
            <div> <h2 className={styles.normal}>Countries app</h2></div>
           <img  src={require('./img/globe.png')}/>
        </div>
    </section>
    </div>
)
}

export default Projects