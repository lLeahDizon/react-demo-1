import React, {useState, useRef, useEffect} from 'react'

function App() {
  console.log('App 执行了')
  const count = useRef(0)
  const [n, setN] = useState(0)
  const onClick = () => {
    setN(i => i + 1)
  }

  // useRef 作用：如果需要一个值，在组件不断 render 时保持不变
  useEffect(() => {
    count.current += 1
    console.log(count.current)
  })

  return (
    <div className="App">
      <div>
        <button onClick={onClick}>update n {n}</button>
      </div>
    </div>
  )
}

export default App
