import React, {useReducer} from 'react'
import User from './components/user'
import Context from './Context'
import Books from './components/books'
import Movies from './components/movies'
import userReducer from './reducers/user_reducer'
import booksReducer from './reducers/books_reducer'
import moviesReducer from './reducers/movies_reducer'

const store = {
  user: null,
  books: null,
  movies: null,
}

const obj = {
  ...userReducer,
  ...booksReducer,
  ...moviesReducer
}

const reducer = (state, action) => {
  const fn = obj[action.type]
  if (fn) {return fn(state, action)} else {throw new Error()}
}

function ReducerDemo() {
  const [state, dispatch] = useReducer(reducer, store)

  return (
    <Context.Provider value={{state, dispatch}}>
      <User/>
      <hr/>
      <Books/>
      <Movies/>
    </Context.Provider>
  )
}

export default ReducerDemo
