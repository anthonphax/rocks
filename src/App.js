import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login.component'
import Mqboard from './components/mqboard.component'


function App() {
  const [sidebarMinimized, setSidebarMinimized] = useState(false);

  const toggleSidebar = () => {
    setSidebarMinimized(!sidebarMinimized);
  };

  return (
    <Router>
      <div className={`App ${sidebarMinimized ? 'sidebar-minimized' : ''}`}>
        <div className={`sidebar ${sidebarMinimized ? 'minimized' : ''}`}>
          <Link className='titulo-log' to={'/sign-in'}>
            The Rocks
          </Link>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" to={'/sign-in'}>
                Entrar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/mqboard'}>
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        <div className="content">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/mqboard" element={<Mqboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
