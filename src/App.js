import React, {useState, useEffect} from 'react'

const App = props => {
  const [n, setN] = useState(0)
  const [m, setM] = useState(0)
  const onClickN = () => {
    setN(n + 1)
  }

  const onClickM = () => {
    setM(m + 1)
  }

  // 模拟 componentDidMount
  useEffect(() => {
    console.log('use effect')
  }, [])

  // 模拟 componentDidUpdate
  useEffect(() => {
    console.log('state 变了')
  })

  return (
    <div>
      {n}
      <button onClick={onClickN}>+1</button>
      <hr/>
      {m}
      <button onClick={onClickM}>+1</button>
    </div>
  )
}

export default App
