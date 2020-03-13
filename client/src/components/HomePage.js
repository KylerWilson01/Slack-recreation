import React, { useState } from 'react'
import io from 'socket.io-client'

export default props => {
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])

  return (
    <div>
      <div>
        <input type="text" />
        <button type="submit">Set Alias</button>
      </div>
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