import React from 'react'
import AuthView from './AuthView'

export default class Header extends React.Component<{}> {
  state = {
    showingAuthView: false,
  }
  render() {
    return (
      <>
        {this.state.showingAuthView ? (
          <AuthView onClose={() => this.setState({ showingAuthView: false })} />
        ) : null}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: 30,
          }}
        >
          <span
            style={{ color: 'black', fontWeight: 'bold', fontFamily: 'menlo' }}
          >
            *dev
          </span>
          <button
            title="Login or Signup"
            style={{
              padding: 8,
              margin: 8,
              backgroundColor: 'blue',
              color: 'white',
            }}
            onClick={() => this.setState({ showingAuthView: true })}
          >
            Login or Signup
          </button>
        </div>
      </>
    )
  }
}
