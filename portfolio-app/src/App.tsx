import Counter from './Counter.tsx'
import Gallery from './Gallery.tsx'
import UserProfile from './UserProfile.tsx'
import TaskManager from './TaskManager.tsx'
import ShoppingList from './ShoppingListWithImmer.tsx'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Counter />
      <Gallery />
      <UserProfile />
      <TaskManager />
      <ShoppingList />
    </div>
  )
}

export default App