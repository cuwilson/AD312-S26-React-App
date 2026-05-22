import Counter from '../components/Counter'
import Gallery from '../components/Gallery'
import UserProfile from '../components/UserProfile'
import TaskManager from '../components/TaskManager'
import ShoppingList from '../components/ShoppingListWithImmer'
import UserProfileWithImmer from '../components/UserProfilewithImmer'
import ContextDemo from '../components/ContextDemo'

function Home() {
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
            <ContextDemo />
        </div>
    )
}

export default Home