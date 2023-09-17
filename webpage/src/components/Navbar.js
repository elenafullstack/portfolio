import React from 'react'
import styles from "../styles/Navbar.module.css"
import {useNavigate} from 'react-router-dom'
// import {Navbardata} from "./Navbardata"



const Navbar = (props) => {

  const navigate= useNavigate()

  const CustomLink=(props)=> {
    const path = window.location.pathname;
    return (
     <button className={path===props.href ? `${styles.main}` : ""}onClick={()=>navigate(props.href)}>{props.name}</button>
    )
  }



console.log(props.title)
 
 return (

   <header className={styles.header1}>
       <button className={styles.logo}onClick={()=>navigate('/contact')}>Elena Rima</button>
        <nav>
          <ul className={styles.navelements}>  

              <CustomLink href='/' name="Home"></CustomLink>
              <CustomLink href='/about'name="About me"></CustomLink>
              <CustomLink href='/projects' name="My projects"></CustomLink>
              <CustomLink href='/cv'name="CV"></CustomLink>
              <CustomLink href='/contact'name="Contact"></CustomLink>
        
  
    
          </ul>
        </nav>
   </header>
 )


}

export default Navbar