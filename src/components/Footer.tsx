import React from 'react'
import Colors from '../Colors'

export default class Footer extends React.Component<{}> {
  render() {
    return (
      <>
        <div style={{ flex: 1 }} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 30,
            borderTop: `1px solid ${Colors.black}`,
            backgroundColor: Colors.whiteLight,
            marginTop: 8,
          }}
        >
          Footer
        </div>
      </>
    )
  }
}
