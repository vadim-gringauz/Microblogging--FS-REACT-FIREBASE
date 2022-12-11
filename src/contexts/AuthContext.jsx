import React from 'react'
import { useEffect } from 'react'
import { createContext, useState } from 'react'
import authenticator from '../utils/Authenticator'

const AuthContext = createContext()

function AuthContextProvider ({ children }) {
  const [currentUser, setCurrentUser] = useState({ userData: null, isUserRetrieved: false })

  useEffect(() => {
    console.log('authContext init')
    /* ACTIVATE OBSERVER THAT UPDATES currentUser ON USER LOGIN/LOGOUT */
    authenticator.updateCurrentUser(setCurrentUser)
  }, [])


  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
