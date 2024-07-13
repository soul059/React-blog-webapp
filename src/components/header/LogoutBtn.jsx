import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='sm:px-6 px-2 py-1 sm:py-2 ml-1 font-semibold rounded dark:bg-violet-950 hover:bg-sky-300 hover:text-gray-900 dark:text-gray-50'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn