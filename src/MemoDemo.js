import React, {useState, memo} from 'react'

function App() {
  const [n, setN] = useState(0)
  const [m, setM] = useState(0)
  const onClick = () => {
    setN(i => i + 1)
  }
  const onClick2 = () => {
    setM(i => i + 1)
  }

  return (
    <div className='App'>
      <div>
        <button onClick={onClick}>update n {n}</button>
        <button onClick={onClick2}>update m {m}</button>
      </div>
      <Child data={m}/>
      {/*<Child2 data={m}/>*/}
    </div>
  )
}

// 如果不希望函数在 props 没变的情况下执行，就用 memo
const Child = memo((props) => {
  console.log('child 执行了')
  console.log('假设这里有大量代码')
  return (
    <div>child: {props.data}</div>
  )
})

export default App
