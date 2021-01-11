import React from 'react'
import ReactDOM from 'react-dom'

let _state = []
let index = 0
const useMyState = (initialValue) => {
  let currentIndex = index
  _state[currentIndex] = _state[currentIndex] === undefined ? initialValue : _state[currentIndex]
  const setState = (newValue) => {
    _state[currentIndex] = newValue
    render()
  }
  index += 1
  return [_state[currentIndex], setState]
}

const render = () => {
  index = 0
  ReactDOM.render(<App/>, document.getElementById('root'))
}

const App = () => {
  const nRef = React.useRef(0)// {current: 0}
  const log = () => setTimeout(() => console.log(`n: ${nRef.current}`), 1000)
  const update = React.useState(null)[1]

  return (
    <div>
      <p>{nRef.current} 这里并不能实时更新</p>
      <button onClick={() => {
        nRef.current += 1
        update(nRef.current)
      }}>
        +1
      </button>
      <button onClick={log}>log</button>
    </div>
  )
}

export default App
