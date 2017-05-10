// @flow

import React from 'react'
import { connect } from 'react-redux'

import { NavLink } from 'react-router-dom'

type Props = {
  role: string,
  name: string,
}

const Nav = ({ role, name }: Props) =>
  <div className="navbar navbar-default">
    <div className="container">
      <nav className="navbar-nav nav">
        <li><NavLink to="/flip">Flip</NavLink></li>
        <li><NavLink to="/guessnumber">Guessnumber</NavLink></li>
        <li><NavLink to="/fizzbuzz">Fizzbuzz</NavLink></li>
        <li><NavLink to="/auth">Auth</NavLink></li>
        <li><NavLink to="/score">Score</NavLink></li>
      </nav>
      <div className="navbar-text navbar-right">
        {role === 'guest' && 'Hello, guest'}
        {role === 'user' && `Welcome back, ${name}`}
        {role === 'newUser' && `Welcome aboard, ${name}`}
      </div>
    </div>
  </div>

const mapStateToProps = state => ({
  role: state.role,
  name: state.name,
})
export default connect(mapStateToProps)(Nav)
