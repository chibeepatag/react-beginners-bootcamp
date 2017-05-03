import React from 'react'

const Series = () =>
  <div className="container app-container">
    <h2>Series</h2>
    <div className="row">
      <div className="col-md-4">
        <h3>Controls</h3>
        <div className="form-group">
          <input className="form-control" placeholder="Search Series" />
        </div>
        <div style={{ width: 100, border: 1, solid: '#eee', borderRadius: 4 }}>
          <div style={{ padding: 5 }}>Suthpark</div>
          <div style={{ padding: 5, background: '#eee' }}>Mr. Robot</div>
        </div>
      </div>
      <div className="col-md-2 col-md-offset-2">
        <h3>Output</h3>
        <div className="well">
          <div>Southpark</div>
          <div>Mr. robot</div>
          <div>Seinfeld</div>
        </div>
      </div>
    </div>
  </div>
export default Series
