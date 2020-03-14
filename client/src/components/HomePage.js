import React, { useState } from 'react'
import io from 'socket.io-client'
import { useAuth } from '../lib/Auth'

export default props => {
  const { signout } = useAuth()
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])

  return (
    <div>
      <button onClick={e => signout()}>Logout</button>
      <div>
        <textarea
          type="text"
          placeholder="Type something please"
          value={text}
          onChange={e => setText(e.target.value)}
        ></textarea>
        <button>Send</button>
      </div>
      <div>
        {messages.map((message, i) => (
          <div key={"message-" + i}>
            <p >{message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}