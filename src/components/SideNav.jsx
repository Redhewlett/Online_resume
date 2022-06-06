import { useState } from 'react'
import styles from './SideNav.module.css'
import { NavLink } from 'react-router-dom'
import Avatar from '../assets/avatar.png'
import { Collapse, Burger } from '@mantine/core'

export default function SideNav() {
  const [opened, setOpen] = useState(true)
  const [menu, setMenu] = useState(true)

  const openMenu = () => {
    setOpen((o) => !o)
    setMenu((o) => !o)
  }

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.avatar}>
          <img src={Avatar} alt='avatar black man with glasses' />
        </div>
        <Collapse className={styles.collapse} in={opened}>
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
        </Collapse>

        <div className={styles.burger}>
          <Burger color='white' size='lg' opened={menu} onClick={openMenu} />
        </div>
      </nav>
    </div>
  )
}
