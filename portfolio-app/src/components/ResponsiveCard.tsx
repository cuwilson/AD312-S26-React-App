import useWindowSize from "../hooks/useWindowSize"
import "../css/ResponsiveCard.css"

function ResponsiveCard() {
  const windowSize = useWindowSize()

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