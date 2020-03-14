import React from 'react'
import { decode } from 'jsonwebtoken'
import { useChat } from '../../hooks'

export default props => {
  const { messages } = useChat()
  const token = decode(localStorage.getItem('authtoken'))

  return (
    <div>
      {messages.map((msg, i) => (
        <p key={"message" + i}>
          {token.username}: {msg.message}
        </p>
      ))}
    </div>
  )
}
