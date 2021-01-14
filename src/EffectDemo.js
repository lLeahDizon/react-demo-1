import React, {useState, useEffect} from 'react'

function App() {
  const [n, setN] = useState(0)

  const onClick = () => {
    setN(i => i + 1)
  }

  // effect 对环境的改变就是副作用
  useEffect(() => {
    console.log('第一次渲染之后执行这一句话')
  }, []) // [] 里面的变量变化时再次执行 -> 不会再次执行

  useEffect(() => {
    if (n !== 0) {
      console.log('n变化了')
    }
  }, [n]) // n 变化时执行

  useEffect(() => {
    console.log('任何一个 state 变化都执行')
  })

  useEffect(() => {
    const id = setInterval(() => {
      console.log('hi')
    }, 1000)
    return () => {
      window.clearInterval(id)
    }
  }, [])

  return (
    <div>
      n: {n}
      <button onClick={onClick}>+1</button>
    </div>
  )
}

export default App
