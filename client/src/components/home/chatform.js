import React, { useState } from 'react'
import { useChat } from '../../hooks'
import { useAuth } from '../../lib/Auth'
import { decode } from 'jsonwebtoken'

export default props => {
  const { signout } = useAuth()
  const { add } = useChat()
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (message !== '') {
      add({ message, name })
    }
  }

  return (
    <div>
      <button onClick={e => signout()}>Logout</button>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          placeholder="Type something please"
          value={message}
          onChange={e => setMessage(e.target.value)}
        ></textarea>
        <button type="submit" onClick={e => setName(decode(localStorage.getItem('authtoken')))}>Send</button>
      </form>
    </div>
  )
}