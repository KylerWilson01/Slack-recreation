import React, { useState } from 'react'
import { useAuth } from '../lib/Auth'
import validator from "validator"

export default props => {
  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [cpasswordError, setCpasswordError] = useState('')
  const { signin } = useAuth()

  let valid = true

  function handleSubmit(e) {
    e.preventDefault()

    if (validator.isEmpty(username)) {
      valid = false
      setUsernameError(' - Please enter a valid username')
    }

    if (validator.isEmpty(password)) {
      valid = false
      setPasswordError(' - Please enter a password')
    }

    if (!validator.equals(password, confirmPassword) || confirmPassword === '') {
      valid = false
      setCpasswordError(' - Does not match password')
    }

    if (valid) {
      signin(username, password)
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <label className={usernameError ? 'error' : ''} htmlFor="username">Username:{usernameError && usernameError}</label> <br />
      <input className={usernameError ? 'error' : ''} type="text" value={username} onChange={e => setUsername(e.target.value)} /> <br />
      <label className={passwordError ? 'error' : ''} htmlFor="password">Password:{passwordError && passwordError}</label> <br />
      <input className={passwordError ? 'error' : ''} type="password" value={password} onChange={e => setPassword(e.target.value)} /> <br />
      <label className={cpasswordError ? 'error' : ''} htmlFor="comfirmPassword">ComfirmPassword:{cpasswordError && cpasswordError}</label> <br />
      <input className={cpasswordError ? 'error' : ''} type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} /> <br />
      <button type="submit">Submit</button>
    </form>
  )
}