import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import FlipApp from './Flip'
import GuessNumber from './GuessNumber'
import FizzBuzz from './FizzBuzz'
import Auth from './Auth'
import Series from './Series'

import 'bootstrap/dist/css/bootstrap.min.css'

const render = (AppComponent, appName) => {
  ReactDOM.render(
    <AppContainer>
      <AppComponent />
    </AppContainer>,
    document.getElementById(`${appName}-app`),
    )
}

if (module.hot) {
  module.hot.accept('./Flip', () => {
    const NextFlipApp = require('./Flip').default // eslint-disable-line global-require
    render(NextFlipApp, 'flip')
  })

  module.hot.accept('./GuessNumber', () => {
    const NextGuessNumber = require('./GuessNumber').default // eslint-disable-line global-require
    render(NextGuessNumber, 'guessnumber')
  })

  module.hot.accept('./FizzBuzz', () => {
    const NextFizzBuzz = require('./FizzBuzz').default // eslint-disable-line global-require
    render(NextFizzBuzz, 'fizzbuzz')
  })

  module.hot.accept('./Auth', () => {
    const NextAuth = require('./Auth').default // eslint-disable-line global-require
    render(NextAuth, 'auth')
  })

  module.hot.accept('./Series', () => {
    const NextSeries = require('./Series').default // eslint-disable-line global-require
    render(NextSeries, 'series')
  })
}


render(FlipApp, 'flip')
render(GuessNumber, 'guessnumber')
render(FizzBuzz, 'fizzbuzz')
render(Auth, 'auth')
render(Series, 'series')
