import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.div`
  width: 40vw;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    padding: 0.5em;
  }
  //phones
  @media screen and (max-width: 480px) {
    width: 90vw;
  }
  //tablets
  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 90%;
    padding: 0em;
  }
  //laptops and small screens
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 70vw;
  }
`
//TODO : put a play buttton and use props to insert play or pause inside the styled span!
const MovingSpans = styled.div`
  span {
    color: white;
    text-shadow: -1px -1px 3px rgba(80, 80, 80, 1);
    font-family: 'Prosto One', system-ui;
    font-size: 2em;
    position: relative;
    animation-name: upAndDown;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    animation-play-state: ${(props) => props.playState};
    animation-delay: ${(props) => props.delay};
  }

  @keyframes upAndDown {
    0% {
      top: 0;
      color: white;
      text-shadow: -1px -1px 3px rgba(80, 80, 80, 1);
    }
    25% {
      top: -8px;
      color: #007fad;
      text-shadow: 1px 11px 6px rgba(108, 108, 108, 0.65);
    }
    50% {
      top: 0;
      color: white;
      text-shadow: -1px -1px 3px rgba(80, 80, 80, 1);
    }
    75% {
      top: -5px;
      color: #e15a51;
      text-shadow: 0px 7px 6px rgba(108, 108, 108, 0.65);
    }
    100% {
      top: 0;
      color: white;
      text-shadow: -1px -1px 3px rgba(80, 80, 80, 1);
    }
  }

  //phones
  @media screen and (max-width: 480px) {
    span {
      font-size: 6vw;
    }
    span:nth-of-type(1) {
      font-size: 7vw;
    }
  }
  //tablets
  @media screen and (min-width: 481px) and (max-width: 768px) {
    span {
      font-size: 8vw;
    }
    & span:nth-of-type(1) {
      font-size: 9vw;
    }
  }
  //laptops and smallscreens
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    span {
      font-size: 6vw;
    }
    span:nth-of-type(1) {
      font-size: 7vw;
    }
  }
`

export default function MovingSkill() {
  const [isPlaying, setIsPlaying] = useState('paused')

  const handlePlayButton = (e) => {
    if (e.target.innerHTML === 'Pause') {
      e.target.innerHTML = 'Play'
      setIsPlaying('paused')
    } else {
      e.target.innerHTML = 'Pause'
      setIsPlaying('running')
    }
  }

  const string = 'hello world'
  const strToArray = string.toUpperCase().split('')

  const [stringArray] = useState(strToArray)

  return (
    <Container>
      <MovingSpans playState={isPlaying}>
        {stringArray.map(function (letter, i) {
          return (
            <span key={i} style={{ animationDelay: `${100 * i}ms` }}>
              {letter}
            </span>
          )
        })}
      </MovingSpans>
      <button type='button' onClick={handlePlayButton}>
        Play
      </button>
    </Container>
  )
}
