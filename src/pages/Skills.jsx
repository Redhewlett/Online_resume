import React from 'react'
import SideNav from '../components/SideNav'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <div className={styles.main_container}>
      <div className={styles.container_nav}>
        <SideNav />
      </div>
    </div>
  )
}
