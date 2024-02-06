import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
