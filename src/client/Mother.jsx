// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Flip from './Flip'
import Guessnumber from './Guessnumber'
import Fizzbuzz from './Fizzbuzz'
import Auth from './Auth'
import Score from './Score'

class Mother extends React.Component {
  state = {
    role: 'guest',
    name: '',
    flipScore: 0,
  }

  onScoreChange = (scoreDiff: number) => {
    this.setState({ flipScore: this.state.flipScore + scoreDiff })
  }

  login = (name: string) => {
    this.setState({ role: 'user', name })
  }

  signup = (name: string) => {
    this.setState({ role: 'newUser', name })
  }

  render() {
    const { role, name } = this.state
    return (
      <div>
        <Nav role={role} name={name} />
        <Switch>
          <Route path="/flip" render={() => <Flip onScoreChange={this.onScoreChange} />} />
          <Route path="/guessnumber" component={Guessnumber} />
          <Route path="/fizzbuzz" component={Fizzbuzz} />
          <Route path="/auth" render={() => <Auth onLogin={this.login} onSignup={this.signup} />} />
          <Route path="/score" render={() => <Score flipScore={flipScore} />} />
        </Switch>
      </div>
    )
  }
}

export default Mother
