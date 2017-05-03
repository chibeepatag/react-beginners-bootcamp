import React from 'react'
import ReactDOM from 'react-dom'
import FlipApp from './Flip'
import GuessNumber from './GuessNumber'
import FizzBuzz from './FizzBuzz'
import Auth from './Auth'
import Series from './Series'

ReactDOM.render(
  <FlipApp />,
  document.getElementById('flip-app'),
)

ReactDOM.render(
  <GuessNumber />,
  document.getElementById('guessnumber-app'),
)

ReactDOM.render(
  <FizzBuzz />,
  document.getElementById('fizzbuzz-app'),
)

ReactDOM.render(
  <Auth />,
  document.getElementById('auth-app'),
)

ReactDOM.render(
  <Series />,
  document.getElementById('series-app'),
)
