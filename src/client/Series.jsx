import React from 'react'

class Series extends React.Component {
  state = {
    query: '',
    selected: [],
  }

  render() {
    return (
      <div className="container app-container">
        <h2>Series</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>Controls</h3>
            <div className="form-group">
              <input className="form-control" value={this.state.query} placeholder="Search Series" />
            </div>
          </div>
          <div className="col-md-2 col-md-offset-2">
            <h3>Output</h3>
            <div className="well" />
          </div>
        </div>
      </div>
    )
  }
}
export default Series
