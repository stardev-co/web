import React from 'react'
import Header from './components/Header'

export default class Offer extends React.Component<{}> {
  render() {
    return (
      <>
        <Header />
        <div
          style={{
            margin: 8,
            flex: 1,
            fontSize: 23,
            textAlign: 'center',
          }}
        >
          Retainer Offer
        </div>
        <div
          style={{
            margin: 'auto',
            padding: 10,
            maxWidth: 800,
          }}
        >
          <div>Overview</div>
          <textarea
            style={{
              width: '100%',
              border: '1px solid #333',
              borderRadius: 4,
            }}
            value="PDF placeholder"
          />
          <div
            style={{ display: 'flex', flex: 1, justifyContent: 'space-around' }}
          >
            <div>
              <div>Client</div>
              <div>Company LLC</div>
            </div>
            <div style={{ flex: 1 }} />
            <div>
              <div>Developer</div>
              <div>Name Last</div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
