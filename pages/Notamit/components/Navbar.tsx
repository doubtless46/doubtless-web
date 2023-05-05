import styles from './navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.ul}>
      <li>
        <Link href="/Notamit" className={styles.homenav}>#Home</Link>
      </li>
      <li>
        <Link href="/Notamit" className={styles.liststyle}>#About Me</Link>
      </li>
      <li>
        <Link href="/Notamit" className={styles.liststyle}>#Contact</Link>
      </li>
    </ul>
    </div>
  )
}

export default Navbar