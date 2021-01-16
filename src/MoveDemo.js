import React, {useRef, useState, useEffect, forwardRef} from 'react'
import './styles.css'

function App() {
  const MovableButton = movable(Button2)
  const buttonRef = useRef(null)
  useEffect(() => {
    console.log(buttonRef.current)
  })
  return (
    <div className='App'>
      <MovableButton name='email' ref={buttonRef}>
        按钮
      </MovableButton>
    </div>
  )
}

const Button2 = forwardRef(((props, ref) => {
  return <button ref={ref} {...props}/>
}))

function movable(Component) {
  function Component2(props, ref) {
    console.log(props, ref)
    const [position, setPosition] = useState([0, 0])
    const lastPosition = useRef(null)
    const onMouseDown = e => {
      lastPosition.current = [e.clientX, e.clientY]
    }
    const onMouseMove = e => {
      if (lastPosition.current) {
        const x = e.clientX - lastPosition.current[0]
        const y = e.clientY - lastPosition.current[1]
        setPosition([position[0] + x, position[1] + y])
        lastPosition.current = [e.clientX, e.clientY]
      }
    }
    const onMouseUp = () => {
      lastPosition.current = null
    }
    return (
      <div
        className='movable'
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        style={{left: position && position[0], top: position && position[1]}}
      >
        <Component {...props} ref={ref}/>
      </div>
    )
  }

  return forwardRef(Component2)
}

export default App
