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

const Mother = () =>
  <div>
    <Nav />
    <Switch>
      <Route path="/flip" render={() => <Flip />} />
      <Route path="/guessnumber" component={Guessnumber} />
      <Route path="/fizzbuzz" component={Fizzbuzz} />
      <Route path="/auth" render={() => <Auth />} />
      <Route path="/score" render={() => <Score />} />
    </Switch>
  </div>

export default Mother
