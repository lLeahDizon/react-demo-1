import React, {useState, useReducer} from 'react'

const initial = {
  n: 0
}

const reducer = (state, action) => {
  if (action.type === 'add') {
    return {n: state.n + action.number}
  } else if (action.type === 'multi') {
    return {n: state.n * 2}
  } else {
    throw new Error('unknown type')
  }
}

function ReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initial)
  const {n} = state
  const onClick = () => {
    dispatch({type: 'add', number: 1})
  }
  const onClick2 = () => {
    dispatch({type: 'add', number: 2})
  }

  return (
    <div className='App'>
      <h1>n: {n}</h1>
      <button onClick={onClick}>+1</button>
      <button onClick={onClick2}>+2</button>
    </div>
  )
}

export default ReducerDemo
