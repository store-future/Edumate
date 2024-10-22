import './App.css';
import Signup from './Components/authentication/signup/Signup'
import Login from './Components/authentication/login/Login'
import Navbar from './Components/navbar/navbar'

function App() {
  return (
    <div>
      <Navbar  />
    {/* <Signup /> */}
    <Login />
    </div>
  );
}

export default App;
