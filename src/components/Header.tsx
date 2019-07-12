import React from 'react'
import AuthView from './AuthView'
import Button from './Button'
import Colors from '../Colors'

export default class Header extends React.Component<{}> {
  state = {
    showingAuthView: false,
    mouseOverLogo: false,
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
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: 30,
            borderBottom: `1px solid ${Colors.black}`,
            backgroundColor: Colors.whiteLight,
            marginBottom: 8,
          }}
        >
          <div
            style={{
              backgroundColor: Colors.purple,
              borderRadius: 10,
              padding: 8,
              margin: 8,
              minWidth: 70,
              textAlign: 'center',
            }}
            onMouseOver={() =>
              this.setState({
                mouseOverLogo: true,
              })
            }
            onMouseOut={() => this.setState({ mouseOverLogo: false })}
          >
            <span
              style={{
                color: Colors.white,
                fontWeight: 'bold',
                fontFamily: 'menlo',
              }}
            >
              {this.state.mouseOverLogo ? 'stardev' : '*dev'}
            </span>
          </div>
          <Button
            title="Login or Signup"
            onClick={() => this.setState({ showingAuthView: true })}
          >
            Login or Signup
          </Button>
        </div>
      </>
    )
  }
}
