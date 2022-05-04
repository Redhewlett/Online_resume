import React from 'react'
import SideNav from '../components/SideNav'
import styles from './Skills.module.css'
import skills from '../data/skills.mjs'

export default function Skills() {
  return (
    <div className={styles.main_container}>
      <SideNav />
      <div className={styles.content}>
        <h1>Skills</h1>
        <h2>Programming languages and tools</h2>
        <div className={styles.skills}>
          {skills.map((skills) => (
            <div className={styles.skills_skill} key={skills.id}>
              <img src={skills.imgUrl} alt={`${skills.name}_icons`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
