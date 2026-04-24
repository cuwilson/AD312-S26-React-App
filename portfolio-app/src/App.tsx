import Counter from './Counter.tsx'
import Gallery from './Gallery.tsx'
import UserProfile from './UserProfile.tsx'
import TaskManager from './TaskManager.tsx'
import ShoppingList from './ShoppingListWithImmer.tsx'
import UserProfileWithImmer from './UserProfilewithImmer.tsx'
import './App.css'

function App() {
  return (
    <div className="app-container">
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
      
    </div>
  )
}

export default App