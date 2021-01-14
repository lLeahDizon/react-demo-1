import React, {useState, memo, useMemo, useCallback} from 'react'

function App() {
  console.log('App 执行了')
  const [n, setN] = useState(0)
  const [m, setM] = useState(0)
  const onClick = () => {
    setN(i => i + 1)
  }
  const onClick2 = () => {
    setM(i => i + 1)
  }
  // const onClickChild = () => {} // 这一句话重新执行

  // useMemo 用来缓存一些，两次新旧组件迭代的时候，希望用上一次的值的函数
  // const onClickChild = useMemo(() => {
  //   return () => {
  //     console.log(m)
  //   }
  // }, [m])

  // 使用 useCallback 代替 useMemo 中的返回函数的函数
  const onClickChild = useCallback(() => {
    console.log(m)
  }, [m])

  return (
    <div className='App'>
      <div>
        <button onClick={onClick}>update n {n}</button>
        <button onClick={onClick2}>update m {m}</button>
      </div>
      <Child data={m} onClick={onClickChild}/>
      {/*<Child2 data={m}/>*/}
    </div>
  )
}

// 如果不希望函数在 props 没变的情况下执行，就用 memo
const Child = memo((props) => {
  console.log('child 执行了')
  console.log('假设这里有大量代码')
  return (
    <div onClick={props.onClick}>child: {props.data}</div>
  )
})

export default App
