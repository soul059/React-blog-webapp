import{ useState , useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login , logout } from './store/authSlice'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

useEffect(()=>{
  authService.getCorrentUser()
  .then((user)=>{
    if(user){
      dispatch(login(user))
    }
    else{
      dispatch(logout())
    }
  })
  .finally(()=>{
    setLoading(false)
  })

},[])

if(loading){
  return <h1>Loading...</h1>
}
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default App
