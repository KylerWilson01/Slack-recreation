import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../lib/Auth'

export default props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { signin } = useAuth()

  function handleSubmit(e) {
    e.preventDefault()

    signin(username, password)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="username" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password" />
        <button type='submit'>Login</button>
        <Link to='/signup'>Signup</Link>
      </form>
    </div>
  )
}