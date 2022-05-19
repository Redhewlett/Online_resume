import React from 'react'
import SideNav from '../components/SideNav'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.main_container}>
      <div className={styles.container_nav}>
        <SideNav />
      </div>
      <div className={styles.content}>
        <h1>About</h1>
        <div className={styles.content_text_box}>
          <p>
            I'm a junior web developper with a background in applied arts and Manga.
            <br />
            My journey started when i began studying applied arts in highschool. i picked up tools
            <br />
            that allowed me developp my creative / critical thinking among other skills.
            <br />
            Believe it or not this is where i crossed path with a developper who introduced me to <strong>HTML, CSS and PHP</strong>.<br />
            I started coding, it was fun but it didn't last (when i got to PHP).
            <br />
            <br />
            Life flew by, I studied the art of Manga and the Japanese language and cultur.
            <br />I arrived at junction in my life and i had the opportunity to enroll for a training in web developpement.
            <br />I didn't not hesitate and <strong>6 month</strong> later here I am 😁.
          </p>
        </div>
      </div>
    </div>
  )
}
