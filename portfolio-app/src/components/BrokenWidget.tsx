import { useState } from "react"

function BrokenWidget() {
  const [crash, setCrash] = useState(false)

  if (crash) {
    throw new Error("Weather service returned corrupted data")
  }

  return (
    <div className="container">
      <h2>Weather Widget</h2>
      <p>Temperature: 72°F</p>

      <button onClick={() => setCrash(true)}>
        Simulate Server Failure
      </button>
    </div>
  )
}

export default BrokenWidget