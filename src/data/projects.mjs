import p2 from '../assets/projects/p2_main.png'
import p3 from '../assets/projects/p3_main.png'
import p4 from '../assets/projects/p4_main.png'
import p5 from '../assets/projects/p5_main.png'
import p6 from '../assets/projects/p6_main.png'
import p7 from '../assets/projects/p7_main.png'
import rps from '../assets/projects/rps_main.png'
import ctdn from '../assets/projects/countdown_main.png'
import todoApp from '../assets/projects/todo_app.png'
import comment_boundaries from '../assets/projects/comment_boundaries.png'
import rpsls from '../assets/projects/rock_paper_scissors_lizard_spock.PNG'
const projects = [
  {
    id: 'p2',
    name: 'Booki',
    description: 'Booki is a vacation planning website, this project was the first project in my OpenClassrooms training.',
    repository: 'https://github.com/Redhewlett/p2bookiedmondteddy.github.io',
    url: 'https://redhewlett.github.io/p2bookiedmondteddy.github.io/',
    techno: 'HTML CSS Responsive',
    imgUrl: p2
  },
  {
    id: 'p3',
    name: 'Ohmyfood',
    description: 'Ohmyfood is a webapp that lets you discover restaurant and lets you to book to avoid queue',
    repository: 'https://github.com/Redhewlett/ohmyfood.github.io',
    url: 'https://redhewlett.github.io/ohmyfood.github.io/',
    techno: 'HTML CSS Transitions keyframes Responsive',
    imgUrl: p3
  },
  {
    id: 'p4',
    name: '"La chouette agence"',
    description:
      'For this project, I was tasked to audit and optimize the SEO of an existing website. There were a lot of bad pratices and things that could be done to help improve the SEO(images size, accessibility issues, keyword usage etc...). I had to list all those issues and choose some which I wanted to improve first.',
    repository: 'https://github.com/Redhewlett/p4-optimized',
    url: 'https://redhewlett.github.io/p4-optimized/',
    techno: 'HTML Audit SEO Accessibility webAIM',
    imgUrl: p4
  },
  {
    id: 'p5',
    name: 'Kanap',
    description:
      'This project was and introduction to javascript and API. The goal was to communicate with an API to fetch/use data and manage user choices/input.',
    repository: 'https://github.com/Redhewlett/p5-kanap',
    url: 'none',
    techno: 'Javascript API Regex',
    imgUrl: p5
  },
  {
    id: 'p6',
    name: 'PIIQUANTE',
    description:
      'The goal here was to build an API for a hotsauce webapp. Users can register with an email, create a sauce the like and others can interact by liking or disliking the sauce. Learning the basics of CRUD and how to secure user data.',
    repository: 'https://github.com/Redhewlett/p6-piiquante',
    url: 'none',
    techno: 'ExpressJS API MongoDB NoSQL Bcrypt JWT Helmet Multer',
    imgUrl: p6
  },
  {
    id: 'p7',
    name: 'Groupomania',
    description:
      'In an effort to build a community aspect among their employee a company wants to build a their private social media. In this first version employees can share articles and link with each other. they can also manage their articles. Re-applying CRUD basics.',
    repository: 'https://github.com/Redhewlett/P7-groupomania',
    url: 'none',
    techno: 'ReactJs ExpressJS API Mantine MySQL',
    imgUrl: p7
  },
  {
    id: 'rps',
    name: 'Rock Paper Scissors',
    description: 'While learning javascript I found a tutorial to build this simple rock paper scissors game. I plan to rewrite this project in with React',
    repository: 'https://github.com/Redhewlett/RockPaperScissors',
    url: 'https://redhewlett.github.io/RockPaperScissors/',
    techno: 'Javascript HTML CSS',
    imgUrl: rps
  },
  {
    id: 'ctdn',
    name: 'Countdown Clock',
    description: 'One of front-end mentor s challenge. A countdown clock. I added my own twist: the clock counts 8 days from the current day, never ending.',
    repository: 'https://github.com/Redhewlett/count_down_timer_fm',
    url: 'https://redhewlett.github.io/count_down_timer_fm/',
    techno: 'Javascript HTML CSS Responsive',
    imgUrl: ctdn
  },
  {
    id: 'todoapp',
    name: 'Todo App',
    description:
      'One of front-end mentor s challenge. A todo app with a dark theme. My version uses local storage to remember your tasks and theme preference.',
    repository: 'https://github.com/Redhewlett/to_do_app_fm',
    url: 'https://redhewlett.github.io/to_do_app_fm/',
    techno: 'Javascript HTML CSS Responsive',
    imgUrl: todoApp
  },
  {
    id: 'cmbd',
    name: 'Comment boundaries',
    description: 'A Script that notifies your users if their comment could be harmfull to others.',
    repository: 'https://github.com/Redhewlett/Comment-boundaries',
    url: 'https://redhewlett.github.io/Comment-boundaries/',
    techno: 'Typescript Tailwind React',
    imgUrl: comment_boundaries
  },
  {
    id: 'rpsls',
    name: 'Rock Paper Scissors Lizard Spock',
    description:
      'A game of Rock Paper Scissors with a little twist added (spock and lizard!), i already did this game in vanila js but this time im using react.',
    repository: 'https://github.com/Redhewlett/rock_paper_scissors_lizard_spock_fm',
    url: 'https://redhewlett.github.io/rock_paper_scissors_lizard_spock_fm/',
    techno: 'React useReducer Tailwind',
    imgUrl: rpsls
  }
]

export default projects
