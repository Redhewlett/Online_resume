import React from 'react'
import SideNav from '../components/SideNav'
import projects from '../data/projects.mjs'
import styles from './Project.module.css'
import git from '../assets/icons/github-brands.svg'
import link from '../assets/icons/arrow-up-right-from-square-solid.svg'
import { ScrollArea } from '@mantine/core'

export default function Projects() {
  return (
    <div className={styles.main_container}>
      <div className={styles.container_nav}>
        <SideNav />
      </div>
      <div className={styles.content}>
        <h1>Projects</h1>
        <ScrollArea style={{ height: 950 }} type='always' scrollbarSize={12}>
          <div className={styles.project_elements}>
            {projects.map((project) => (
              <div key={project.id} className={styles.project_item}>
                <img src={project.imgUrl} alt={`project_${project.name}_screenshot`} className={styles.project_img} />
                <div className={styles.project_item_side}>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                  <p>{project.techno}</p>
                  <span>
                    <a href={project.repository} target='_blank' rel='noopener noreferrer'>
                      <img src={git} alt='github_icon' className={styles.icons} />
                    </a>
                    <a href={project.url} target='_blank' rel='noopener noreferrer'>
                      <img src={link} alt='arrow-up-right-from-square-solid' className={styles.icons} />
                    </a>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
