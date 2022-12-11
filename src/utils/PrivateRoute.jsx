import React from 'react'
import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

function PrivateRoute () {
  const { currentUser } = useContext(AuthContext)
  const { userData, isUserRetrieved } = currentUser
  console.log('currentUser from route= ', currentUser)
 
  useEffect(() => {
    console.log('new currentUser', currentUser)
  }, [currentUser])

  return (
    <>
      {isUserRetrieved &&
        (userData ? (
          <>
            <div>Outlet</div>
            <Outlet />
          </>
        ) : (
          <>
            <div>navigate</div>

            <Navigate to={'/sign-in'} />
          </>
        ))}
    </>
  )
}

export default PrivateRoute
