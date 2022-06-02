import styles from './Experiences.module.css'
import SideNav from '../components/SideNav'
import MovingSkill from '../components/MovingSkill'

export default function Experiences() {
  return (
    <div className={styles.main_container}>
      <div className={styles.container_nav}>
        <SideNav />
      </div>
      <div className={styles.content}>
        <h1>Experiences</h1>
        <div className={styles.content_text}>
          <p>
            I completed my trainning in May, and I am looking forward to work with a company where I can keep developping my skills.
            <br />
            If you went through the projects you have an idea of what I can do, but let me sum'up my trainning's experience:
            <br />
            <br />
            I can do a Mockup integration and even expend on the original model using figma (ref: Booki and ohmyfood).
            <br />
            <br />I am able to creat animation using css transitions and keyframes.
            <MovingSkill />
          </p>
        </div>
      </div>
    </div>
  )
}
