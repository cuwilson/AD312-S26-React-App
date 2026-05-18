import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import ThemeSwitcher from './ThemeSwitcher.tsx'
import Counter from './Counter.tsx'
import Gallery from './Gallery.tsx'
import UserProfile from './UserProfile.tsx'
import TaskManager from './TaskManager.tsx'
import ShoppingList from './ShoppingListWithImmer.tsx'
import UserProfileWithImmer from './UserProfilewithImmer.tsx'
import ContextDemo from "./ContextDemo.tsx";
import './css/App.css'

function App() {
const { theme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}-mode`}>
      <ThemeSwitcher />
      <div className="full-row">
        <Counter />
      </div>
      <div className="full-row">
        <Gallery />
      </div>

      <UserProfile />
      <UserProfileWithImmer />
      <TaskManager />
      <ShoppingList />
      <ContextDemo />
    </div>
  )
}

export default App