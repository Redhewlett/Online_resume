import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Home.module.css'
import character from '../assets/man_standing.png'
import Bubble from '../assets/Bubble.svg'
import Polygon from '../assets/Polygon.svg'

export default function Home() {
  return (
    <div className={styles.main_container}>
      <div className={styles.bubbles}>
        <p>
          Hi there,
          <br /> I am a junior Web <strong>developer</strong>.<br /> This is my online resume.
          <br /> Feel free to explore it.
        </p>
        <img src={Bubble} alt='blue comic bubble' />
      </div>
      <div className={styles.character}>
        <img src={character} alt='black man with glasses standing' />
      </div>
      <div className={styles.poly}>
        <p>
          TEDDY <br />
          <strong>EDMOND </strong>
        </p>

        <img src={Polygon} alt='blue polygone' />
      </div>
      <div className={styles.button_container}>
        <button>
          <NavLink to='/about' exact='true' style={{ color: 'white' }}>
            Start visiting
          </NavLink>
        </button>
      </div>
    </div>
  )
}
