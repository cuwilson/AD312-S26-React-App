import { useEffect, useState } from "react"
import "../css/ResponsiveCard.css"

function ResponsiveCard() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)

    
    return () => {
      window.removeEventListener("resize", handleResize)
    }
    // The empty dependency array makes this effect run only once when the component mounts.
  }, [])

  const isMobile = windowSize.width <= 768

  return (
    <div className={`container responsive-card ${isMobile ? "mobile-card" : "desktop-card"}`}>
      <h1>Responsive Card</h1>

      <p>Width: {windowSize.width}px</p>
      <p>Height: {windowSize.height}px</p>

      <h2>{isMobile ? "Mobile View" : "Desktop View"}</h2>
    </div>
  )
}

export default ResponsiveCard