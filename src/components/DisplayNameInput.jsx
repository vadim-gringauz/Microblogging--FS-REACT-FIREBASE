import React from 'react'
import './DisplayNameInput.css'

function DisplayNameInput ({ customLabel = 'Choose Display name', displayName, setDisplayName, required = false }) {
  return (
    <div className='DisplayNameInput'>
      <label htmlFor='displayName'>
        {customLabel}
      </label>
      <input
        id='displayName'
        type='text'
        onChange={e => setDisplayName(e.target.value)}
        value={displayName}
        autoComplete="username"
        maxLength={20}
        required={required}
      />
    </div>
  )
}
export default DisplayNameInput
