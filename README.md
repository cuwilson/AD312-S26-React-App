# AD312-S26-React-App
**Copper Wilson** 

*AD312 - Intermediate Dev 2 Spring 2026 at NSC*

### Overview
This project is a simple React Counter component built using hooks. It demonstrates how state updates work in React, including some common pitfalls when updating state multiple times or asynchronously.

This component is part of a larger, long-term project and serves as an early example of handling state and user interactions.

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

## Counter Features
- displays a counter value that updates in real time
- includes multiple increment behaviors:
    - Standard increment
    - increment twice (demonstrates incorrect state handling)
    - delayed increment using `setTimeout`
    - correct increment twice using functional updates
- Reset button to return the counter to zero

## Gallery Features
- displays a simple image gallery using React state
- allows navigation through images using `Previous` and `Next` buttons
   - navigation buttons are disabled at the start and end of the gallery
- updates description based on current index (same image is used for space)

