import React, { useState } from 'react'

export default function Counter() {

    const [likes, setLikes] = useState(5)
    const [value, setValue] = useState('ТЕКСТ В ИНПУТЕ')

    function increment() {
        setLikes(likes + 1)
    }
    function decrement() {
        setLikes(likes - 1)
    }

  return (
    <div>
        <h1>{likes}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}
