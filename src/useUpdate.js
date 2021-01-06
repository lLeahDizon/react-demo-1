import {useEffect, useState} from 'react'

// 自定义 Hooks 模拟 componentDidUpdate
const useUpdate = (fn, dep) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(x => x + 1)
  }, [dep])

  // 模拟 componentDidUpdate
  useEffect(() => {
    if (count > 1) {
      fn()
    }
  }, [count, fn])
}

export default useUpdate
