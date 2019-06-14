import React from 'react'

export default (props: any = {}) => (
  <textarea
    {...props}
    style={{
      width: '100%',
      border: '1px solid #333',
      borderRadius: 4,
      ...(props.style || {}),
    }}
  />
)
