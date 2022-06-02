import styled from 'styled-components'

const Container = styled.div`
  width: 40vw;
  padding: 2em;
  display: flex;
  justify-content: center;
`
//TODO : put a play buttton and use props to insert play or pause inside the styled span!
const MovingSpans = styled.span`
  span {
    font-size: 2em;
    position: relative;
    animation-name: upAndDown;
    animation-duration: 2s;
    animation-iteration-count: 5;
    animation-fill-mode: forwards;
  }
  & span:nth-of-type(1) {
    font-size: 2.4em;
    animation-delay: 100ms;
    animation-timing-function: cubic-bezier(0.98, -0.23, 0.24, 1.21);
  }
  & span:nth-of-type(2) {
    animation-delay: 200ms;
    animation-timing-function: ease-in-out;
  }
  & span:nth-of-type(3) {
    animation-delay: 300ms;
    animation-timing-function: ease-in-out;
  }
  & span:nth-of-type(4) {
    animation-delay: 400ms;
    animation-timing-function: ease-in-out;
  }
  & span:nth-of-type(5) {
    animation-delay: 500ms;
    animation-timing-function: ease-in-out;
  }
  & span:nth-of-type(6) {
    animation-delay: 600ms;
    animation-timing-function: ease-in-out;
  }
  & span:nth-of-type(7) {
    animation-delay: 700ms;
    animation-timing-function: ease-in-out;
  }
  & span:nth-of-type(8) {
    animation-delay: 500ms;
    animation-timing-function: ease-in-out;
  }
  & span:nth-of-type(9) {
    animation-delay: 900ms;
    animation-timing-function: ease-in-out;
  }
  & span:nth-of-type(10) {
    animation-delay: 1000ms;
    animation-timing-function: ease-in-out;
  }
  @keyframes upAndDown {
    0% {
      top: 0;
    }
    25% {
      top: -10px;
      color: #007fad;
    }
    50% {
      top: 0;
    }
    75% {
      top: -5px;
      color: #e15a51;
    }
    100% {
      top: 0;
    }
  }
`

export default function MovingSkill() {
  return (
    <Container>
      <MovingSpans>
        <span>H</span>
        <span>E</span>
        <span>L</span>
        <span>L</span>
        <span>O </span>
        <span>W</span>
        <span>O</span>
        <span>R</span>
        <span>L</span>
        <span>D</span>
      </MovingSpans>
    </Container>
  )
}
