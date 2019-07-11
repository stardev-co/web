import React from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Colors from './Colors'

export default class Home extends React.Component<{}> {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />
        <div style={{ alignSelf: 'center' }}>
          <Button title="My Account" onClick={() => {}} />
          <div
            style={{
              borderRadius: 10,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: Colors.whiteLight,
              border: `1px solid ${Colors.black}`,
              padding: 8,
            }}
          >
            <span
              style={{
                margin: 8,
              }}
            >
              Create New Invoice
            </span>
            <input type="text" placeholder="Amount" />
            <Button title="Create Invoice" onClick={() => {}} />
          </div>
        </div>
      </div>
    )
  }
}
