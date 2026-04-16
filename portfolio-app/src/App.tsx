import Counter from './Counter.tsx'
import Gallery from './Gallery.tsx'
import UserProfile from './UserProfile.tsx'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Counter />
      <Gallery />
      <UserProfile />
    </div>
  )
}

export default App