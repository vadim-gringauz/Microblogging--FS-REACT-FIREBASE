import React from 'react'
import { useState, useEffect } from 'react'
import authenticator from '../utils/Authenticator'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import Alert from './Alert'
import GoogleSignInButton from './GoogleSignInButton'
import './SignInForm.css'

function SignInForm () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [authAlertMsg, setAuthAlertMsg] = useState('')
  const [isAlertOn, setIsAlertOn] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    const result = await authenticator.signIn({
      email: email,
      password: password
    })
    //* ERROR IS RETURNED
    if (typeof result !== Object) {
      setIsAlertOn(true)
      switch (result) {
        case 'auth/user-not-found': {
          setAuthAlertMsg('Wrong email or password!')
          break
        }
        case 'auth/wrong-password': {
          setAuthAlertMsg('Wrong email or password!')
          break
        }
        default:
          setAuthAlertMsg('Error signing in')
      }
      setEmail('')
      setPassword('')
    }
  }

  useEffect(() => {
    if (email === '' && password === '') return
    setIsAlertOn(false)
    setAuthAlertMsg('')
  }, [email, password])

  return (
    <div className='SignInForm'>
      <form action='' onSubmit={handleSubmit}>
        <h4>Sign in to your account</h4>
        <GoogleSignInButton />
        <span>Or</span>
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput password={password} setPassword={setPassword} />
        <button
          type='submit'
          disabled={
            email.replaceAll(' ', '').length === 0 ||
            password.replaceAll(' ', '').length === 0
          }
        >
          Sign in
        </button>
      </form>
      <Alert isOn={isAlertOn} message={authAlertMsg} />
      <div className='signup-link'>
        <span>New User?</span>
        <a href='/sign-up'>Sign up here</a>
      </div>
    </div>
  )
}

export default SignInForm
