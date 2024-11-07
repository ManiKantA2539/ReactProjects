import './index.css';
import Login from './components/Auth/Login';

import { useEffect, useState, useContext } from 'react';
import { AuthContext } from './context/AuthProvider';
import EmployeeDashboard from './components/Dasbboard/EmployeeDashboard';
import AdminDasboard from './components/Dasbboard/AdminDasboard';
function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const data = useContext(AuthContext);
  useEffect(() => {

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser.role);
      setUserData(loggedInUser.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (data && data.admin && data.admin[0].username == email && data.admin[0].password == password) {
      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin' }));
      setUser("admin");
      setUserData(data.admin[0]);
    } else if (data && data.employees) {
      const userData = data.employees.find((user) => user.username === email && user.password === password);
      if (userData) {
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: userData }));
        setUser("employee");
        setUserData(userData);
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user && (user === "admin" ? <AdminDasboard data={userData} /> : <EmployeeDashboard data={userData} />)}
    </>
  );
}

export default App;
