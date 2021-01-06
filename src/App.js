import React, {useState, useEffect} from 'react'
import useUpdate from './useUpdate'

const App = props => {
  const [n, setN] = useState(0)
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
