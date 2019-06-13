import React from 'react'
import Header from './components/Header'

export default class Home extends React.Component<{}> {
  render() {
    return (
      <div style={{ display: 'flex', flex: 1 }}>
        <Header />
      </div>
    )
  }
}
