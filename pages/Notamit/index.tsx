import Navbar from './components/Navbar';
import styles from './notamit.module.css';

const index = () => {
  return (
    <div className={styles.main}> 
       <Navbar/>
       <div className={styles.mainbody}>
           <h3 className={styles.h3}>Hello,</h3>
           <h1 className={styles.h1}>I am Amit Jimiwal</h1>
           <p className={styles.p}>Frontend Web Developer, specialized in ReactJs</p>
           <div className={styles.social}>
            <a href=''></a>
            <a href=''></a>
            <a href=''></a>
            <a href=''></a>
           </div>
       </div>
    </div>
  )
}

export default index