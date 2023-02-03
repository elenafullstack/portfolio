import React, { useEffect} from 'react'
import styles from "../styles/About.module.css"

const About = () => {

    return (
    <div className={styles.parent}>
       <section>
           <div>
                <p>I am 24 years old software engineer student from Aalto University, Finland. 
                I am passionate about programming,  specializing in web development. 
                My strength is in fullstack programming, understanding the communication 
                between frontend and backend
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
                <p>In my free time, I like to dance and do sports. I have danced disco dance 
                    actively for over ten years and recently started practicing lati
                    n dances, such as salsa and bachata. 
                </p>
            </div>
       </section>

       <section>
           <div>
                <p>I am 24 years old software engineer student from Aalto University, Finland. 
                I am passionate about programming,  specializing in web development. 
                My strength is in fullstack programming, understanding the communication 
                between frontend and backend
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