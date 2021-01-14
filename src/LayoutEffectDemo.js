import React, {useState, useLayoutEffect} from 'react'

function App() {
  const [value, setValue] = useState(0)

  // 插入到 DOM 和 render 之间执行，不会出现闪烁
  useLayoutEffect(() => {
    document.querySelector('#x').innerText = 'value: 1000'
  }, [value])

  return (
    <div id='x' onClick={() => setValue(0)}>value: {value}</div>
  )
}

export default App
