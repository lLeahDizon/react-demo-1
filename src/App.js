import React from 'react'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      n: 1,
      width: undefined
    }
  }

  onClick = () => {
    this.setState(state => ({n: state.n + 1}))
  }

  componentDidMount() {
    const div = document.getElementById('xxx')
    const {width} = div.getBoundingClientRect()
    this.setState({width})
  }

  render() {
    return (
      <div id="xxx">Hello World, {this.state.width}</div>
    )
  }
}

export default App
