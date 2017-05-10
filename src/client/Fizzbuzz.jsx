// @flow

import React from 'react'
import { connect } from 'react-redux'
import { startingNumberChange,
         endingNumberChange,
         divisibleNumber1Change,
         divisibleWord1Change,
         divisibleNumber2Change,
         divisibleWord2Change,
         hitme,
         fizzBuzzReset } from './reduxStuff'

import App from './App'

type Props = {
  startingNumber: number,
  endingNumber: number,
  divisibleNumber1: number,
  divisibleWord1: string,
  divisibleNumber2: number,
  divisibleWord2: string,
  result: [],
  startingNumberChange: Function,
  endingNumberChange: Function,
  divisibleNumber1Change: Function,
  divisibleWord1Change: Function,
  divisibleNumber2Change: Function,
  divisibleWord2Change: Function,
  onHitme: Function,
  onReset: Function,
}

class Fizzbuzz extends React.Component {
  props: Props


  renderOutput() {
    // eslint-disable-next-line react/no-array-index-key
    return this.props.result.map((item, idx) => <div key={idx}>{item}</div>)
  }

  render() {
    const { startingNumber, endingNumber, divisibleWord1, divisibleNumber1,
      divisibleWord2, divisibleNumber2 } = this.props
    return (
      <App
        appName="Fizzbuzz (using App)"
        controls={
          <div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="starting-number">Starting Number</label>
                  <input
                    id="starting-number"
                    className="form-control"
                    type="number"
                    placeholder="starting number"
                    value={startingNumber}
                    onChange={evt => this.props.startingNumberChange(Number(evt.target.value))}
                    max={10}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="ending-number">Ending Number</label>
                  <input
                    id="ending-number"
                    className="form-control"
                    type="number"
                    placeholder="ending number"
                    value={endingNumber}
                    onChange={evt => this.props.endingNumberChange(Number(evt.target.value))}
                    max={50}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-number-1">Divisible Number #1</label>
                  <input
                    id="divisible-number-1"
                    className="form-control"
                    type="number"
                    placeholder="divisible number #1"
                    value={divisibleNumber1}
                    onChange={evt => this.props.divisibleNumber1Change(Number(evt.target.value))}
                    max={10}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-word-1">Divisible Word #1</label>
                  <input
                    id="divisible-word-1"
                    className="form-control"
                    placeholder="divisible word #1"
                    value={divisibleWord1}
                    onChange={evt => this.props.divisibleWord1Change(evt.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-number-2">Divisible Number #2</label>
                  <input
                    id="divisible-number-2"
                    className="form-control"
                    type="number"
                    placeholder="divisible number #2"
                    value={divisibleNumber2}
                    onChange={evt => this.props.divisibleNumber2Change(Number(evt.target.value))}
                    max={20}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-word-2">Divisible Word #2</label>
                  <input
                    id="divisible-word-2"
                    className="form-control"
                    placeholder="divisible word #2"
                    value={divisibleWord2}
                    onChange={evt => this.props.divisibleWord2Change(evt.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <button className="btn btn-primary btn-block" onClick={() => this.props.onHitme()}>Hit me!</button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-default btn-block" onClick={() => this.props.onReset()}>Reset</button>
              </div>
            </div>
          </div>
        }
        output={this.renderOutput()}
      />
    )
  }
}

const mapStateToProps = state => ({
  startingNumber: state.fizzbuzzStartingNumber,
  endingNumber: state.fizzbuzzEndingNumber,
  divisibleNumber1: state.fizzbuzzDivisibleNumber1,
  divisibleWord1: state.fizzbuzzDivisibleWord1,
  divisibleNumber2: state.fizzbuzzDivisibleNumber2,
  divisibleWord2: state.fizzbuzzDivisibleWord2,
  result: state.fizzbuzzResult,
})

const mapDispatchToProps = dispatch => ({
  onHitme: () => dispatch(hitme()),
  onReset: () => dispatch(fizzBuzzReset()),
  startingNumberChange: (number: number) => dispatch(startingNumberChange(number)),
  endingNumberChange: (number: number) => dispatch(endingNumberChange(number)),
  divisibleNumber1Change: (number: number) => dispatch(divisibleNumber1Change(number)),
  divisibleWord1Change: (word: string) => dispatch(divisibleWord1Change(word)),
  divisibleNumber2Change: (number: number) => dispatch(divisibleNumber2Change(number)),
  divisibleWord2Change: (word: string) => dispatch(divisibleWord2Change(word)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Fizzbuzz)
