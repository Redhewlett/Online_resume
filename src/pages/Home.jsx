import React from 'react'
import styles from './Home.module.css'
import character from '../assets/man_standing.png'
import Bubble from '../assets/Bubble.svg'
import Bubble_2 from '../assets/Bubble_2.svg'
import Polygon from '../assets/Polygon.svg'

export default function Home() {
  return (
    <div className={styles.main_container}>
      <div className={styles.bubbles}>
        <p>
          Hi there,
          <br /> i am a junior Web <strong>developper</strong>.<br /> This is my online
          <br /> resume. Feel free to explore it
        </p>
        <img src={Bubble} alt='blue comic bubble' />
        <p>
          Or i can tell
          <br /> you a little bit
          <br /> more about <strong>me</strong>...
        </p>
        <img src={Bubble_2} alt='blue comic bubble' />
      </div>

      <div className={styles.character}>
        <img src={character} alt='black man with glasses standing' />
      </div>

      <div className={styles.poly}>
        <span>
          <p>TEDDY</p>
          <p>EDMOND</p>
        </span>
        <img src={Polygon} alt='blue polygone' />
      </div>
    </div>
  )
}
