import React from 'react'
import Colors from '../Colors'
import { GithubLogo } from './Icons'

export default class Footer extends React.Component<{}> {
  render() {
    return (
      <>
        <div style={{ flex: 1 }} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 30,
            borderTop: `1px solid ${Colors.black}`,
            backgroundColor: Colors.whiteLight,
            marginTop: 8,
            padding: 8,
          }}
        >
          <a href="https://github.com/stardev-co" target="_blank">
            <GithubLogo style={{ fill: Colors.black }} />
          </a>
        </div>
      </>
    )
  }
}
