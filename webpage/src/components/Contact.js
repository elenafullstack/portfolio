import React from 'react'
import styles from "../styles/Contact.module.css"


const Contact =()=> {
    function linkedin() {
        window.location.href= "https://www.linkedin.com/in/elena-rima-25748b158/"
    }

    function github() {
        window.location.href= "https://github.com/elenafullstack"
    }

 return (
     <div className={styles.contact}>
         <h1>
             Contact me
         </h1>
        <div> 
            <p className={styles.text}> Do you think I would be a valuable addition to your team? Please feel free to reach out to me!
            </p>
        </div>
        <div className={styles.info}>
            <div>
                <h2>Email</h2>
                <p className={styles.mail}>elena.rima1@gmail.com</p>
            </div>
            <div>
                <h2>Phone number</h2>
                <p>+358504433129</p>
            </div>
         </div>
         <h2 className={styles.account}>My accounts</h2>
         <div className={styles.buttons}><button onClick={()=>linkedin()}>Linkedin</button><button onClick={()=>github()}>Github</button></div>
     </div>
 )
}

export default Contact