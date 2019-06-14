import React from 'react'
import { inject } from 'mobx-react'
import AuthStore from '../stores/auth'

@inject('auth')
export default class AuthView extends React.Component<{
  auth?: AuthStore
  onClose: () => void
}> {
  state = {
    username: '',
    password: '',
  }

  onSignUp = async () => {
    await this.props.auth.createUser(this.state)
    this.props.onClose()
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: 4,
            border: '1px solid black',
            padding: 8,
            flexDirection: 'column',
          }}
        >
          <div style={{ marginBottom: 8 }}>Signup or login to interact</div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
            }}
          >
            <div>Username</div>
            <input
              type="text"
              onChange={(e: any) => this.setState({ username: e.target.value })}
              value={this.state.username}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
            }}
          >
            <div>Password</div>
            <input
              type="password"
              onChange={(e: any) => this.setState({ password: e.target.value })}
              value={this.state.password}
            />
          </div>
          <button onClick={this.onSignUp}>Sign Up</button>
          <button onClick={this.props.onClose}>Cancel</button>
        </div>
      </div>
    )
  }
}
