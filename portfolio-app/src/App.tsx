import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import ServerForm from './pages/ServerForm'
import ThemeSwitcher from './components/ThemeSwitcher'
import { useContext } from 'react'
import { ThemeContext } from './components/ThemeContext'
import './css/App.css'

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app-container ${theme}-mode`}>
      <div className="site-layout">
        < header className="site-header">
          <ThemeSwitcher />
          <nav className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/register">Registration Form</Link>
            <Link to="/server-profile">Server Profile Form</Link>
          </nav>
        </header>


        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/server-profile" element={<ServerForm />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App