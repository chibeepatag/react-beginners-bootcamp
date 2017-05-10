// @flow

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const isProd = process.env.NODE_ENV === 'production'

const loggerMiddleware = createLogger({
  predicate: () => !isProd,
  collapsed: true,
})

const guessHeadsRequest = () => ({
  type: 'guessHeads',
})

const guessHeadsSuccess = (flipResult: string) => ({
  type: 'guessHeadsSuccess',
  payload: flipResult,
})

export const guessHeads = () => (dispatch: Function) => {
  // display user something is going on ...
  dispatch(guessHeadsRequest())
  // call server
  setTimeout(() => {
    const flipResult = Math.random() > 0.5 ? 'Heads' : 'Tails'
    dispatch(guessHeadsSuccess(flipResult))
  }, 1500)

  // display user success


  // display user failure
}

export const guessTails = () => ({
  type: 'guessTails',
})

export const resetFlip = () => ({
  type: 'resetFlip',
})

export const guessnumberInputChange = (number: number) => ({
  type: 'guessnumberInputChange',
  payload: number,
})

export const startingNumberChange = (number: number) => ({
  type: 'startingNumberChange',
  payload: number,
})
export const endingNumberChange = (number: number) => ({
  type: 'endingNumberChange',
  payload: number,
})
export const divisibleNumber1Change = (number: number) => ({
  type: 'divisibleNumber1Change',
  payload: number,
})
export const divisibleWord1Change = (word: string) => ({
  type: 'divisibleWord1Change',
  payload: word,
})
export const divisibleNumber2Change = (number: number) => ({
  type: 'divisibleNumber2Change',
  payload: number,
})
export const divisibleWord2Change = (word: string) => ({
  type: 'divisibleWord2Change',
  payload: word,
})
export const hitme = () => ({
  type: 'hitme',
})
export const fizzBuzzReset = () => ({
  type: 'fizzbuzzReset',
})

export const passwordInputChanged = (password: string) => ({
  type: 'passwordInputChanged',
  payload: password,
})

export const nameInputChanged = (name: string) => ({
  type: 'nameInputChanged',
  payload: name,
})

export const emailInputChanged = (email: string) => ({
  type: 'emailInputChanged',
  payload: email,
})

export const login = () => ({
  type: 'login',
})

export const signup = () => ({
  type: 'signup',
})

const randomNum = () => Math.floor(Math.random() * 100) + 1

const initialState = {
  flipScore: 0,
  flipResult: '',
  flipGuessed: '',
  isFlipProcessing: false,

  guessnumberNumber: randomNum(),
  guessnumberGuessed: 0,
  guessnumberGuessInput: '',

  fizzbuzzStartingNumber: 30,
  fizzbuzzEndingNumber: 15,
  fizzbuzzDivisibleNumber1: 3,
  fizzbuzzDivisibleWord1: 'Fizz',
  fizzbuzzDivisibleNumber2: 5,
  fizzbuzzDivisibleWord2: 'Buzz',
  fizzbuzzResult: [],

  emailInput: '',
  nameInput: '',
  passwordInput: '',
  role: 'guest',
  name: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'guessHeads': {
      return {
        ...state,
        isFlipProcessing: true,
      }
    }

    case 'guessHeadsSuccess': {
      const scoreDiff = action.payload === 'Heads' ? 1 : -1
      return {
        ...state,
        isFlipProcessing: false,
        flipResult: action.payload,
        flipScore: state.flipScore + scoreDiff,
      }
    }

    // case 'guessHeads': {
    //   const flipResult = Math.random() > 0.5 ? 'Heads' : 'Tails'
    //   const scoreDiff = flipResult === 'Heads' ? 1 : -1
    //   return {
    //     ...state,
    //     flipScore: state.flipScore + scoreDiff,
    //     flipResult,
    //   }
    // }

    case 'guessTails': {
      const flipResult = Math.random() > 0.5 ? 'Heads' : 'Tails'
      const scoreDiff = flipResult === 'Tails' ? 1 : -1
      return {
        ...state,
        flipScore: state.flipScore + scoreDiff,
        flipResult,
      }
    }

    case 'guessnumberInputChange': {
      return {
        ...state,
        guessnumberGuessInput: action.payload,
      }
    }

    case 'resetFlip': {
      return {
        ...state,
        flipScore: 0,
        flipResult: '',
        flipGuessed: '',
        isFlipProcessing: false,
      }
    }

    case 'startingNumberChange': {
      return {
        ...state,
        fizzbuzzStartingNumber: action.payload,
      }
    }

    case 'endingNumberChange': {
      return {
        ...state,
        fizzbuzzEndingNumber: action.payload,
      }
    }

    case 'divisibleNumber1Change': {
      return {
        ...state,
        fizzbuzzDivisibleNumber1: action.payload,
      }
    }

    case 'divisibleWord1Change': {
      return {
        ...state,
        fizzbuzzDivisibleWord1: action.payload,
      }
    }

    case 'divisibleNumber2Change': {
      return {
        ...state,
        fizzbuzzDivisibleNumber2: action.payload,
      }
    }

    case 'divisibleWord2Change': {
      return {
        ...state,
        fizzbuzzDivisibleWord2: action.payload,
      }
    }

    case 'hitme': {
      const { fizzbuzzStartingNumber,
              fizzbuzzEndingNumber,
              fizzbuzzDivisibleWord1,
              fizzbuzzDivisibleNumber1,
              fizzbuzzDivisibleWord2,
              fizzbuzzDivisibleNumber2 } = state
      const fizzbuzzResult = []
      for (let i = fizzbuzzStartingNumber; i < fizzbuzzEndingNumber; i += 1) {
        if (i % fizzbuzzDivisibleNumber1 === 0 && i % fizzbuzzDivisibleNumber2 === 0) {
          fizzbuzzResult.push(fizzbuzzDivisibleWord1 + fizzbuzzDivisibleWord2)
        } else if (i % fizzbuzzDivisibleNumber1 === 0) {
          fizzbuzzResult.push(fizzbuzzDivisibleWord1)
        } else if (i % fizzbuzzDivisibleNumber2 === 0) {
          fizzbuzzResult.push(fizzbuzzDivisibleWord2)
        } else {
          fizzbuzzResult.push(i)
        }
      }

      return {
        ...state, fizzbuzzResult,
      }
    }

    case 'fizzbuzzReset': {
      return {
        ...state,
        fizzbuzzStartingNumber: 1,
        fizzbuzzEndingNumber: 15,
        fizzbuzzDivisibleNumber1: 3,
        fizzbuzzDivisibleWord1: 'Fizz',
        fizzbuzzDivisibleNumber2: 5,
        fizzbuzzDivisibleWord2: 'Buzz',
        fizzbuzzResult: [],
      }
    }

    case 'login': {
      const { nameInput, emailInput, passwordInput } = state
      return {
        ...state,
        name: nameInput,
        email: emailInput,
        password: passwordInput,
        role: 'user',
      }
    }

    case 'signup': {
      const { nameInput, emailInput, passwordInput } = state
      return {
        ...state,
        name: nameInput,
        email: emailInput,
        password: passwordInput,
        role: 'newUser',
      }
    }

    case 'passwordInputChanged': {
      return {
        ...state,
        passwordInput: action.payload,
      }
    }

    case 'nameInputChanged': {
      return {
        ...state,
        nameInput: action.payload,
      }
    }

    case 'emailInputChanged': {
      return {
        ...state,
        emailInput: action.payload,
      }
    }

    default:
      return state
  }
}

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const initStore = () => createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)))

export default initStore
