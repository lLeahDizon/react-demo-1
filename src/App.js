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
  const [n, setN] = useMyState(0)
  const [m, setM] = useMyState(0)

  return (
    <div>
      <p>{n}</p>
      <button onClick={() => setN(n + 1)}>+1</button>
      <p>{m}</p>
      <button onClick={() => setM(m + 1)}>+1</button>
    </div>
  )
}

export default App
