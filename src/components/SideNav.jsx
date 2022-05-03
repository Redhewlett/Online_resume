import React from 'react'
import styles from './SideNav.module.css'
import { NavLink } from 'react-router-dom'

export default function SideNav() {
  return (
    <div>
      <nav className={styles.nav}>
        <NavLink to='/skills' exact='true' className={(navData) => (navData.isActive ? styles.active : 'none')} style={{ textDecoration: 'none' }}>
          <li>Skills</li>
        </NavLink>

        <NavLink to='/education' className={(navData) => (navData.isActive ? styles.active : 'none')} style={{ textDecoration: 'none' }}>
          <li>Education</li>
        </NavLink>

        <NavLink to='/projects' className={(navData) => (navData.isActive ? styles.active : 'none')} style={{ textDecoration: 'none' }}>
          <li>Projects</li>
        </NavLink>

        <NavLink to='/experiences' className={(navData) => (navData.isActive ? styles.active : 'none')} style={{ textDecoration: 'none' }}>
          <li>Experiences</li>
        </NavLink>

        <NavLink to='/about' className={(navData) => (navData.isActive ? styles.active : 'none')} style={{ textDecoration: 'none' }}>
          <li>About</li>
        </NavLink>
      </nav>
    </div>
  )
}
