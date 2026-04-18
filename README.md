# AD312-S26-React-App
**Copper Wilson** 

*AD312 - Intermediate Dev 2 Spring 2026 at NSC*

### Overview
This project is a collection of small React components built using hooks. It demonstrates how state updates work in React, including handling user interactions, managing form input, and working with more complex state like nested objects.

The app includes multiple features such as a counter, image gallery, user profile editor, and task manager, each designed to explore different React concepts.

This project is part of a larger, long-term portfolio and serves as a foundation for building more advanced React applications.

## How to Run

1. Clone the repository
2. Navigate into the project folder (`portfolio-app`)
3. Install dependencies:

   `npm install`

4. Start the development server:

   `npm run dev`

5. Open http://localhost:5173 in your browser

### Technologies Used
- React
- Vite
- JavaScript (JSX)
- CSS

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