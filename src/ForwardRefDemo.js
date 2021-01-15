import React, {useRef, forwardRef} from 'react'

function App() {
  const buttonRef = useRef(null)

  return (
    <div>
      <Button2 ref={buttonRef}>按钮</Button2>
    </div>
  )
}

const Button2 = forwardRef((props, ref) => {
  return <button className='red' ref={ref} {...props}/>
})


export default App
