import React, {useRef, useState, useEffect} from 'react'
import useList from './hooks/useList'

function App() {
  const {list} = useList()
  return (
    <div className="App">
      <h1>List</h1>
      {list ? (
        <ol>
          {list.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ol>
      ) : (
        '加载中...'
      )}
    </div>
  )
}

export default App
