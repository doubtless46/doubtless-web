import Navbar from './components/Navbar/Navbar';
import styles from './notamit.module.css';
import {GrLinkedinOption} from 'react-icons/gr'
import {FiTwitter,FiGithub} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
const index = () => {
  return (
    <div className={styles.main}> 
       <Navbar/>
       <div className={styles.mainbody}>
           <h3 className={styles.h3}>Hello,</h3>
           <h1 className={styles.h1}>I am <span className={styles.usernametext}>Amit Jimiwal</span></h1>
           <p className={styles.p}>Frontend Web Developer</p>
           
       </div>
       <div className={styles.social} id="contact-footer">
            <a href='https://www.linkedin.com/in/amitjimiwal/' target='_blank'><GrLinkedinOption/></a>
            <a href='https://twitter.com/drunken_devv' target='_blank'><FiTwitter/></a>
            <a href='https://github.com/amitjimiwal' target='_blank'><FiGithub/></a>
            <a href='https://www.instagram.com/_amit.jimiwal_/' target='_blank'><BsInstagram/></a>
      </div>
    </div>
  )
}

export default index