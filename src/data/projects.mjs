import p2 from '../assets/projects/p2_main.png'
import p3 from '../assets/projects/p3_main.png'
import p4 from '../assets/projects/p4_main.png'
import p5 from '../assets/projects/p5_main.png'
import p6 from '../assets/projects/p6_main.png'
import p7 from '../assets/projects/p7_main.png'
import rps from '../assets/projects/rockpaperscissors.png'
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
    techno: 'Javascript API',
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
    techno: 'Javascript Express ReactJs Mantine MySQL',
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
  }
]

export default projects
