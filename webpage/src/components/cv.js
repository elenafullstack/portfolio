import React from 'react'
import styles from "../styles/CV.module.css"

const Cv = () => {
    return (
        <div className={styles.cv}>
        <div>
            <img  src={require('./img/CV1.png')}/>
        </div>
        <div>  
          <img  src={require('./img/CV2.png')}/>
        </div>
     
        <a href ={require('./img/elenacv.pdf')}download="ElenaRimaCV"> Donwload CV as pdf </a>  
        </div>
    )
}

export default Cv;