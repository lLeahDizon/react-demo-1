import React, {useState, useEffect} from 'react'

const App = props => {
  const [childVisible, setChildVisible] = useState(true)
  const show = () => {
    setChildVisible(!childVisible)
  }

  return (
    <div>
      <button onClick={show}>{childVisible ? 'hide' : 'show'}</button>
      {childVisible ? <Child/> : null}
    </div>
  )
}

const Child = (props) => {
  // 模拟 componentWillUnMount
  useEffect(() => {
    // 函数本身是在渲染的时候执行的
    // 函数的返回是在销毁的时候执行的
    console.log('渲染或者变化')
    return () => {
      console.log('Child 销毁了')
    }
  })

  return (
    <div>Child</div>
  )
}

export default App
