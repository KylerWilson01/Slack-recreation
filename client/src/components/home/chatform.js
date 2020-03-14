import React, { useState } from 'react'
import { useChat } from '../../hooks'
import { useAuth } from '../../lib/Auth'

export default props => {
  const { signout } = useAuth()
  const { add } = useChat()
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (message !== '') {
      console.log(message)
      add({ message })
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
        <button type="submit">Send</button>
      </form>
    </div>
  )
}