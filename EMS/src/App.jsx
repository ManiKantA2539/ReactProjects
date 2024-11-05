import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from "./components/Dasbboard/EmployeeDashboard"
import AdminDasboard from './components/Dasbboard/AdminDasboard'
import { useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'
import { useContext } from 'react'
function App() {

  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  const data = useContext(AuthContext)

  useEffect(() => {
    if (data) {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
      if (loggedInUser) {
        console.log(loggedInUser.role)
        // setUser(loggedInUser.role)
      }
    }
  }, [data])
  const handleLogin = (email, password) => {
    if (data && data.admin[0].username == email && data.admin[0].password == password) {
      setUser("admin")
      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin' }))
    }
    else if (data) {
      const userData = data.employees.find((user) => user.username == email && user.password == password);
      setUserData(userData);
      setUser("employee")
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" }))
    }
    else {
      alert("Invalid Credentials")
    }
  }




  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user == "admin" ? <AdminDasboard /> : (user == "employee" && <EmployeeDashboard data={userData} />)}
    </>
  )
}

export default App
