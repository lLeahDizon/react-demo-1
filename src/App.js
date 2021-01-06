import React from 'react'

class App extends React.PureComponent {
  divRef = undefined

  constructor(props) {
    super(props)
    this.state = {
      n: 1,
      width: undefined
    }
    this.divRef = React.createRef()
  }

  onClick = () => {
    this.setState(state => ({n: state.n + 1}))
  }

  componentDidMount() {
    // const div = document.getElementById('xxx')
    const div = this.divRef.current
    const {width} = div.getBoundingClientRect()
    this.setState({width})
  }

  render() {
    return (
      <div ref={this.divRef} id="xxx">Hello World, {this.state.width}</div>
    )
  }
}

export default App
