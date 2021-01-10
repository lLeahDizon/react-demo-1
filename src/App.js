import React from 'react'
import ReactDOM from 'react-dom'
import useUpdate from './useUpdate'

let _state
const useMyState = (initialValue) => {
  console.log('useMyState run')
  _state = _state === undefined ? initialValue : _state
  const setState = (newValue) => {
    _state = newValue
    render()
  }
  return [_state, setState]
}

const render = () => {
  ReactDOM.render(<App/>, document.getElementById('root'))
}

const App = props => {
  console.log('App 运行了')
  const [n, setN] = useMyState(0)
  console.log(n)

  const onClick = () => {
    setN(n + 1)
  }

  useUpdate(() => {
    console.log('n 变了')
  }, n)

  return (
    <div>
      {n}
      <button onClick={onClick}>+1</button>
    </div>
  )
}

export default App
