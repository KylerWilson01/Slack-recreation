import React, { useState } from 'react'
import io from 'socket.io-client'

export default props => {
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])
  const socket = io.connect('http://10.255.255.13:3001')

  const [alias, setAlias] = useState(localStorage.getItem('aliasLocal' || ''))

  socket.on('message', msg => {
    console.log(msg)
    setMessages([...messages, msg])
  })

  function handleClick(e) {
    e.preventDefault()
    socket.emit('message', text)
    setText('')
  }

  function handleAlias(e) {
    e.preventDefault()
    localStorage.setItem("aliasLocal", e.target.value)
    setAlias(e.target.value)
  }

  return (
    <div>
      <div>
        <input type="text" value={alias} onChange={handleAlias} />
        <button type="submit">Set Alias</button>
      </div>
      <div>
        <textarea
          type="text"
          placeholder="Type something please"
          value={text}
          onChange={e => setText(e.target.value)}
        ></textarea>
        <button onClick={handleClick}>Send</button>
      </div>
      <div>
        {messages.map((message, i) => (
          <div key={"message-" + i}>
            <p>{alias}</p>
            <p >{message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}