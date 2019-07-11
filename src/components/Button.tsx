import React from 'react'
import Colors from '../Colors'

export default class Button extends React.Component<{
  title: string
  onClick: () => void
}> {
  state = {
    mouseOver: false,
  }
  render() {
    return (
      <div
        style={{
          borderRadius: 10,
          cursor: 'pointer',
          backgroundColor: this.state.mouseOver
            ? Colors.purpleLight
            : Colors.purple,
          padding: 8,
          margin: 8,
          color: this.state.mouseOver ? Colors.white : Colors.white,
          border: `1px solid ${
            this.state.mouseOver ? Colors.purple : Colors.black
          }`,
          textAlign: 'center',
        }}
        onMouseOver={() => this.setState({ mouseOver: true })}
        onMouseOut={() => this.setState({ mouseOver: false })}
        onClick={this.props.onClick}
      >
        {this.props.title}
      </div>
    )
  }
}
