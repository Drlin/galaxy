import React from 'react'
import { render } from 'react-dom'

class Hello extends React.Component {
  render() {
    return (
      <p>Hello world</p>
    )
  }
}

render(
  <Hello />,
  document.getElementById('app')
)