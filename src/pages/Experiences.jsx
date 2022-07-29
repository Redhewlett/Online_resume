import styles from './Experiences.module.css'
import SideNav from '../components/SideNav'
import MovingSkill from '../components/MovingSkill'
import MobileNav from '../components/MobileNav'

export default function Experiences() {
  return (
    <div className={styles.main_container}>
      <div className={styles.container_nav}>
        <SideNav />
        <MobileNav />
      </div>
      <div className={styles.experience_content}>
        <h1>Experiences</h1>
        <div className={styles.content_text}>
          <p>
            I completed my trainning in May, and I am looking forward to work with a company where I can keep developing my skills.
            <br />
            If you went through the projects you have an idea of what I can do, but let me sum'up my trainning's experience:
          </p>
          <ul>
            <li>Integrate a mockup and even expend on the original model using figma</li>
            <li>Use Sass to creat maintainable / re-usable designs</li>
            <li>
              Creat animations using css transitions and keyframes
              <MovingSkill />
            </li>
            <li>Audit an existing website and optimise the SEO working on accessibility, web standards, performances</li>
            <li>Creat javascript events and handle these events</li>
            <li>Validate user input using regex and/or html form</li>
            <li>Interact with a web service(API)</li>
            <li>Implement safe CRUD operations</li>
            <li>Safely store sensitive data inside a database</li>
            <li>MongoDB</li>
            <li>Mysql</li>
            <li>Authenticate a user, maintain his session</li>
            <li>Develop a web interface using a front-end framework(ReactJS, notions in VueJS)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
