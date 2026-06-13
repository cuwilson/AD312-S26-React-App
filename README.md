# AD312-S26-React-App
**Copper Wilson** 

*AD312 - Intermediate Dev 2 Spring 2026 at NSC*

### Overview
This project is a collection of small React components built using Vite. It demonstrates modern React development patterns including local component state, nested state management, Context API, form validation with React Hook Form, server-state management using TanStack Query, and error handling with React Error Boundaries.

The app includes examples of user interaction handling, asynchronous data fetching, API mutations, caching, and responsive UI updates across multiple independent components and pages.

The app includes multiple features such as a counter, image gallery, user profile editor, task manager, shopping list, and Context API demo. Each component highlights different patterns for handling state, user input, UI updates, and component communication in React.

This project is part of a larger, long-term portfolio and serves as a foundation for building more advanced React applications.

### Application Structure

The application now uses React Router to separate the portfolio into multiple pages:

- Home Page (`/`)
  - displays the collection of React state management demos, custom hooks, charts, responsive components, and error boundary demonstrations
- Registration Form (`/register`)
  - demonstrates form handling and validation using React Hook Form
  - includes client-side validation, password matching, and localStorage persistence
- Server Profile Form (`/server-profile`)
  - demonstrates server-state management using TanStack Query
  - fetches, updates, and caches profile data from a JSON Server API
- Poll Dashboard (`/poll-dashboard`)
  - demonstrates third-party library integration using Chart.js
  - displays a live-updating poll visualization with React state and effects

The app also includes a global light/dark mode theme system using React Context API and a shared ThemeProvider.

## How to Run

1. Clone the repository
2. Navigate into the project folder (`portfolio-app`)
3. Install dependencies:

   `npm install`

4. Start the development server:

   `npm run dev`

5. In a separate terminal, start the JSON Server mock API:
   
   `npm run server`

6. Open http://localhost:5173 in your browser

### Technologies Used
- React
- React Router DOM
- React Hook Form
- React Error Boundaries
- Vite
- TypeScript (TSX)
- CSS
- TanStack Query (React Query)
- JSON Server
- Chart.js

## Features

### Counter
- displays a counter value that updates in real time
- includes multiple increment behaviors:
    - Standard increment
    - increment twice (demonstrates incorrect state handling)
    - delayed increment using `setTimeout`
    - correct increment twice using functional updates
- Reset button to return the counter to zero

### Gallery
- displays a simple image gallery using React state
- allows navigation through images using `Previous` and `Next` buttons
   - navigation buttons are disabled at the start and end of the gallery
- updates description based on current index (same image is used for space)

### UserProfile
- displays user information including name, email, and address
- uses nested state to manage structured data (address object inside user)
- includes controlled input fields for updating address information:
   - street
   - city
   - state
   - zip
- updates only the fields that the user provides input for, preserving existing data for blank fields
- demonstrates functional state updates to safely modify nested objects
- reflects changes in real time after updating the profile

### Task Manager 
- Add new tasks using a controlled input field
- Each task includes:
  - a unique ID
  - a title
  - a completion status
- Toggle tasks between "Done" and "Not Done"
- Dynamically renders task list using `map()`
- Uses immutable state updates for reliable re-renders

### Shopping List
- add new shopping list items with:
  - name
  - quantity
  - category (dropdown selection)
  - additional notes
- uses `useImmer` for managing complex and nested state
- supports editing existing items with a dedicated edit mode:
- remove items from the list

### User Profile (Immer)
- demonstrates managing nested state using the useImmer hook
- sotres user data in a structured object including: 
   - name and email
   - contain details (phone and address)
   - user preferences (newsletter and notifications)
- uses controlled inputs to capture user updates in real time
- updates only the fields that have input, preserving existing values
- allows toggling boolean preferences

### Context API Demo
- demonstrates how React Context API solves prop drilling
- uses a shared `UserContext` to store user information
- wraps nested components inside a `UserProvider`
- allows deeply nested components to access shared data with `useContext`
- includes multiple user profile components consuming the same shared context
- updates shared state across multiple components simultaneously

### Registration Form (React Hook Form)
- built using the React Hook Form library
- demonstrates uncontrolled form handling and optimized rendering
- includes validation for:
  - full name
  - email address
  - password strength
  - matching passwords
  - required role selection
  - terms & conditions checkbox
- uses React Hook Form features including:
  - `register`
  - `watch`
  - `setValue`
  - `reset`
  - `isSubmitting`
- automatically saves form progress to `localStorage`
- restores saved form data when revisiting the page
- simulates async API submission with a loading state
- clears saved draft data after successful submission

### Server Profile Form
- demonstrates server-state management using TanStack Query
- fetches profile data from a local JSON Server API using `useQuery`
- hydrates React Hook Form inputs using `reset()`
- updates server data using `useMutation`
- invalidates cached queries after successful updates
- disables form submission until changes are made using `isDirty`
- simulates server-side validation conflicts and maps backend errors directly onto form fields using `setError`

### Poll Dashboard (Chart.js Integration)
- demonstrates integration of a third-party JavaScript library (Chart.js) with React
- uses `useRef` to access the canvas element and store the Chart.js instance
- uses `useEffect` to instantiate the chart when the component mounts
- updates the existing chart imperatively when React vote state changes
- properly destroys the chart instance during cleanup to prevent memory leaks and canvas rendering errors
- updates a live bar chart in real time as votes are cast

### Responsive Card (Custom Hook)
- demonstrates creation and use of a custom React hook
- uses `useWindowSize` to track browser dimensions
- shares reusable resize logic between components
- listens for browser resize events using `useEffect`
- removes event listeners during cleanup to prevent memory leaks
- switches layout and styling between desktop and mobile views
- displays the current window width and height

### Custom useLocalStorage Hook
- demonstrates creation of a reusable custom React hook
- combines useState and useEffect
- loads saved values from browser localStorage
- automatically persists state changes
- used by the global ThemeContext to remember the user's Dark Mode preference
- preserves theme settings between page refreshes

### Error Boundary Demo
- demonstrates React Error Boundaries using a Class Component
- uses `getDerivedStateFromError()` to detect rendering failures
- intentionally simulates a component crash using a mock weather widget
- displays a fallback UI instead of allowing the application to crash
- isolates component failures so the rest of the application remains functional
