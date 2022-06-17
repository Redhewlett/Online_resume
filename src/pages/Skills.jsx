import React from 'react'
import styles from './Skills.module.css'
import SideNav from '../components/SideNav'
import skills from '../data/skills.mjs'
import languages from '../data/languages.mjs'
import { Tooltip } from '@mantine/core'

export default function Skills() {
  return (
    <div className={styles.main_container}>
      <div className={styles.container_nav}>
        <SideNav />
      </div>
      <div className={styles.skills_content}>
        <h1>Skills</h1>
        <h2>Programming languages and tools</h2>
        <div className={styles.skills}>
          {skills.map((skills) => (
            <div className={styles.skills_skill} key={skills.id}>
              <Tooltip
                wrapLines
                width={skills.libraries.length ? 200 : -50}
                withArrow
                position='right'
                color='red'
                radius='md'
                transition='slide-right'
                transitionDuration={300}
                transitionTimingFunction='ease-in-out'
                closeDelay={400}
                label={skills.libraries.length ? `${skills.name} Libraries: ${skills.libraries}` : `${skills.name}`}
              >
                <img src={skills.imgUrl} alt={`${skills.name}_icons`} />
              </Tooltip>
            </div>
          ))}
        </div>
        <h2>Learned Languages</h2>
        <div className={styles.learned_languages}>
          <ul>
            {languages.map((language) => (
              <li key={language.id}>
                <div className={styles.learned_languages_item}>
                  {language.name} <span> {language.level}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
