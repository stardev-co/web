import React from 'react'

export default class Header extends React.Component<{}> {
  render() {
    return (
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
        <div
          style={{
            padding: 8,
            margin: 8,
            backgroundColor: 'blue',
            color: 'white',
          }}
        >
          Login or Signup
        </div>
      </div>
    )
  }
}
