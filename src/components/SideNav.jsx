import styles from './SideNav.module.css'
import { NavLink } from 'react-router-dom'
import Avatar from '../assets/avatar.png'

export default function SideNav() {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.avatar}>
          <img src={Avatar} alt='avatar black man with glasses' />
        </div>
        <NavLink to='/about' className={(navData) => (navData.isActive ? styles.active : 'none')} style={{ textDecoration: 'none' }}>
          <li>About</li>
        </NavLink>

        <NavLink to='/education' className={(navData) => (navData.isActive ? styles.active : 'none')} style={{ textDecoration: 'none' }}>
          <li>Education</li>
        </NavLink>

        <NavLink to='/skills' exact='true' className={(navData) => (navData.isActive ? styles.active : 'none')} style={{ textDecoration: 'none' }}>
          <li>Skills</li>
        </NavLink>

        <NavLink to='/projects' className={(navData) => (navData.isActive ? styles.active : 'none')} style={{ textDecoration: 'none' }}>
          <li>Projects</li>
        </NavLink>

        <NavLink to='/experiences' className={(navData) => (navData.isActive ? styles.active : 'none')} style={{ textDecoration: 'none' }}>
          <li>Experiences</li>
        </NavLink>
      </nav>
    </div>
  )
}
