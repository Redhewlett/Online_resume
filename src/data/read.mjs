import { skills } from './skills.mjs'
import { languages } from './languages.mjs'

const read = () => {
  for (let language of languages) {
    console.log(language)
  }
}

read()
