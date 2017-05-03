import React from 'react'

const GuessNumber = () =>
  <div className="container app-container">
    <h2>Guess Number</h2>
    <p className="lead">Guess a number between 1-100</p>
    <div className="row">
      <div className="col-md-4">
        <h3>Controls</h3>
        <div className="input-group">
          <input className="form-control" type="number" placeholder="Place your guess here" min={1} max={100} />
          <span className="input-group-btn">
            <button className="btn btn-primary">Guess</button>
          </span>
        </div>
      </div>
      <div className="col-md-2 col-md-offset-2">
        <h3>Output</h3>
        <div className="well">
          <div style={{ color: 'red' }}>Too low ...</div>
          <div style={{ color: 'red' }}>Too high ...</div>
          <div style={{ color: 'limegreen' }}>Success! The number is 73</div>
        </div>
      </div>
    </div>
  </div>

export default GuessNumber
