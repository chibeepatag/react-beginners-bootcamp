import React from 'react'
import ReactDOM from 'react-dom'
import FlipApp from './Flip'

ReactDOM.render(
  <FlipApp />,
  document.getElementById('flip-app'),
)

const GuessNumber = () => <h2>Guess Number</h2>
ReactDOM.render(
  <GuessNumber />,
  document.getElementById('guessnumber-app'),
)

const FizzBuzz = () => <h2>Fizz Buzz</h2>
ReactDOM.render(
  <FizzBuzz />,
  document.getElementById('fizzbuzz-app'),
)

const Auth = () => <h2>Auth</h2>
ReactDOM.render(
  <Auth />,
  document.getElementById('auth-app'),
)

const Series = () => <h2>Series</h2>
ReactDOM.render(
  <Series />,
  document.getElementById('series-app'),
)
