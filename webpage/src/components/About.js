import React, { useEffect} from 'react'
import styles from "../styles/About.module.css"

const About = () => {

    return (
    <div className={styles.parent}>
       <section>
           <div>
                <p>I am an Information Networks student specializing in software engineering at Aalto University, Finland. I am deeply passionate about programming, with a particular focus on web development. My expertise lies in full-stack programming, understanding the communication between frontend and backend. 
                </p>
            </div>
            <div>
                <img  src={require('./img/work.png')}/>
            </div>
       </section>

       <section>
            <div>
                <img  src={require('./img/dance.jpg')}/>
            </div>
           <div>
                <p>In my free time, I like to do dancing and various sports activities. I've been an active enthusiast of disco dance for over a decade, and more recently, I've taken up the art of Latin dances like salsa and bachata. 
                </p>
            </div>
       </section>

       <section>
           <div>
                <p>Exploring cultures and learning languages is another of my keen interests. Alongside Finnish and English, I'm fluent in Spanish. I've had the privilege of participating in two exchange semesters during my studies, one in Mexico and another in Panama. 
                </p>
            </div>
            <div>
                <img  src={require('./img/travel.JPG')}/>
            </div>
       </section>
      
       </div>
    )
}

export default About;