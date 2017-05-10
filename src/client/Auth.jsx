// @flow

import React from 'react'
import { connect } from 'react-redux'
import { login,
         signup,
         passwordInputChanged,
         emailInputChanged,
         nameInputChanged,
} from './reduxStuff'

import App from './App'

type Props = {
  nameInput: string,
  emailInput: string,
  passwordInput: string,
  onLogin: Function,
  onSignup: Function,
  onNameInputChanged: Function,
  onEmailInputChanged: Function,
  onPasswordInputChanged: Function,
}

const Auth = (props: Props) => {
  const { nameInput,
            emailInput,
            passwordInput,
            onNameInputChanged,
            onEmailInputChanged,
            onPasswordInputChanged,
            onLogin,
            onSignup } = props
  return (
    <App
      appName="Auth (using App)"
      controls={
        <div>
          <div className="row">
            <div className="col-md-12 form-group">
              <input
                placeholder="Name"
                className="form-control"
                value={nameInput}
                onChange={evt => onNameInputChanged(evt.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={emailInput}
                onChange={evt => onEmailInputChanged(evt.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 form-group">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                value={passwordInput}
                onChange={evt => onPasswordInputChanged(evt.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <button className="btn btn-primary btn-block" onClick={onSignup}>Signup</button>
            </div>
            <div className="col-md-6">
              <button className="btn btn-default btn-block" onClick={onLogin}>Login</button>
            </div>
          </div>
        </div>
      }
      output={null}
    />
  )
}

const mapStateToProps = state => ({
  nameInput: state.nameInput,
  emailInput: state.emailInput,
  passwordInput: state.passwordInput,
  email: state.email,
  name: state.name,
})

const mapDispatchToProps = dispatch => ({
  onLogin: () => dispatch(login()),
  onSignup: () => dispatch(signup()),
  onNameInputChanged: (name: string) => dispatch(nameInputChanged(name)),
  onPasswordInputChanged: (password: string) => dispatch(passwordInputChanged(password)),
  onEmailInputChanged: (email: string) => dispatch(emailInputChanged(email)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
