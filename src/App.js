import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

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

const themeContext = React.createContext(null)

const App = () => {
  const [theme, setTheme] = React.useState('red')

  return (
    <themeContext.Provider value={{theme, setTheme}}>
      <div className={`App ${theme}`}>
        <p>{theme}</p>
        <div>
          <ChildA/>
        </div>
        <div>
          <ChildB/>
        </div>
      </div>
    </themeContext.Provider>
  )
}

function ChildA() {
  const {setTheme} = React.useContext(themeContext)
  return (
    <div>
      <button onClick={() => setTheme('red')}>red</button>
    </div>
  )
}

function ChildB() {
  const {setTheme} = React.useContext(themeContext)
  return (
    <div>
      <button onClick={() => setTheme('blue')}>blue</button>
    </div>
  )
}

export default App
