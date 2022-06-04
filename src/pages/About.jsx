import React from 'react'
import SideNav from '../components/SideNav'
import styles from './About.module.css'
import linkedin from '../assets/icons/linkedin-brands.svg'
import git from '../assets/icons/github-brands.svg'

export default function About() {
  return (
    <div className={styles.main_container}>
      <div className={styles.container_nav}>
        <SideNav />
      </div>
      <div className={styles.about_content}>
        <h1>About</h1>
        <div className={styles.content_text_box}>
          <p>
            I'm a junior web developer with a background in applied arts and Manga.
            <br />
            My journey started when I began studying applied arts in highschool. I picked up tools / skills
            <br />
            that allowed me to develop my creative / critical thinking and other skills. Believe it or not this is where I crossed path with a developer who
            introduced me to <strong>HTML, CSS and PHP</strong>.<br />
            <br />
            Afterwards, I studied the art of Manga and the Japanese language / cultur.
            <br />I arrived at junction in my life and I had the opportunity to enroll for a training in web developpement.
            <br />I didn't not hesitate and <strong>6 month</strong> later here I am 😁.
          </p>
        </div>
        <span>
          <a href='https://www.linkedin.com/in/teddyedmond/' target='_blank' rel='noopener noreferrer'>
            <img src={linkedin} alt='linkedin logo' className={styles.icons} />
          </a>
          <a href='https://github.com/Redhewlett' target='_blank' rel='noopener noreferrer'>
            <img src={git} alt='github logo' className={styles.icons} />
          </a>
        </span>
      </div>
    </div>
  )
}
