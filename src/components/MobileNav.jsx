import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'

const Container = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60vw;
  position: absolute;
  top: 1.3vh;

  .faBtn {
    color: white;
    display: none;
    z-index: 2;
  }
  .faBtn_off {
    color: rgba(210, 210, 210, 0.26);
  }

  h1 {
    display: none;
    width: 100%;
    font-size: 7vw;
    position: absolute;
    top: 0.2em;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  @media screen and (max-width: 480px) {
    .faBtn {
      display: inline;
      font-size: 3em;
      opacity: 0;
      animation: fadein 2s ease-in-out;
      animation-fill-mode: forwards;
    }

    h1 {
      text-align: center;
      display: block;
      opacity: 0;
      animation: fadein 2s ease-in-out;
      animation-fill-mode: forwards;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    gap: 60vw;

    .faBtn {
      display: inline;
      font-size: 3em;
      opacity: 0;
      animation: fadein 2s ease-in-out;
      animation-fill-mode: forwards;
      margin-top: 2vw;
    }

    h1 {
      text-align: center;
      display: block;
      opacity: 0;
      animation: fadein 2s ease-in-out;
      animation-fill-mode: forwards;
    }
  }
`

export default function MobileNav() {
  const location = useLocation()
  let navigate = useNavigate()
  const currentPath = location.pathname
  const navArray = ['/about', '/education', '/skills', '/projects', '/experiences']
  const positionOfCurrentPath = navArray.indexOf(currentPath)

  function handleClick(e) {
    const clickedButton = e.target.parentNode.id
    //void case because of the svg having a hole inside
    if (clickedButton === '') {
      return
    }
    //if we are at the begining
    if (clickedButton === 'left' && currentPath === navArray[0]) {
      return
    }
    //if we are at the end
    if (clickedButton === 'right' && currentPath === navArray[4]) {
      return
    }
    //going right
    if (clickedButton === 'right') {
      navigate(`${navArray[positionOfCurrentPath + 1]}`)
    }
    //going left
    if (clickedButton === 'left') {
      navigate(`${navArray[positionOfCurrentPath - 1]}`)
    }
  }

  useEffect(() => {
    const btnLeft = document.getElementById('left')
    const btnRight = document.getElementById('right')
    if (currentPath === navArray[0]) {
      btnLeft.classList.add('faBtn_off')
    }

    if (currentPath === navArray[4]) {
      btnRight.classList.add('faBtn_off')
    }
  })

  return (
    <Container>
      <FontAwesomeIcon icon={faCircleChevronLeft} className='faBtn' id='left' onClick={handleClick} />
      <FontAwesomeIcon icon={faCircleChevronRight} className='faBtn' id='right' onClick={handleClick} />
      <h1>{navArray[positionOfCurrentPath]}</h1>
    </Container>
  )
}
