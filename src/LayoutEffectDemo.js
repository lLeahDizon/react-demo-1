import React, {useState, useLayoutEffect, useEffect, useRef} from 'react'

function App() {
  const [value, setValue] = useState(0)
  const time = useRef(null)
  const onClick = () => {
    setValue(i => i + 1)
    time.current = performance.now() // performance 是一个全局变量，可以打印出当前时间
  }

  // 插入到 DOM 和 render 之间执行，不会出现闪烁
  useEffect(() => {
    if (time.current) {
      console.log(performance.now() - time.current)
    }
  })

  return (
    <div className='App'>
      <h1>value: {value}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  )
}

export default App
