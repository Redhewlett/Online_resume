import React from 'react'
import styles from './Education.module.css'
import SideNav from '../components/SideNav'
import education from '../data/education.mjs'
import MobileNav from '../components/MobileNav'

export default function Education() {
  return (
    <div className={styles.main_container}>
      <div className={styles.container_nav}>
        <SideNav />
        <MobileNav />
      </div>

      <div className={styles.content}>
        <h1>Education</h1>
        <div className={styles.education_content}>
          {education.map((education) => (
            <div className={styles.education_item} key={education.id}>
              <div className={styles.education_item_header}>
                <h2>{education.name}</h2>
                <span>{education.year}</span>
              </div>

              <h3>{education.degree}</h3>
              <p>{education.description}</p>
              <p>what i learned: </p>
              <ul>
                {education.learned.map((learned, index) => (
                  <li key={index}>{learned}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
