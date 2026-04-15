import { useState } from "react"
import "./Gallery.css";

function Gallery() {
    const [index, setIndex] = useState(0);

    const recipes = [
        {
            id: 1,
            url: "/smallOreo.jpg",
            description: "Cutie Patootie"
        },
        {
            id: 2,
            url: "/smallOreo.jpg",
            description: "The Oreo"
        },
        {
            id: 3,
            url: "/smallOreo.jpg",
            description: "Oreo Oreo Oreo"
        },
        {
            id: 4,
            url: "/smallOreo.jpg",
            description: "Smoosh Face Oreo"
        },
    ];

  return (
    <div className ="container gallery-container">
      <h1>My Gallery</h1>
      <p>Welcome to my gallery!</p>
      <img 
        className="gallery-image"
        src={recipes[index].url} 
        alt={recipes[index].description} 
        />
      <p className="gallery-description">
        {recipes[index].description}
    </p>
      

      <div className="gallery-buttons">
      {/* If first image, have "Previous" button disabled */}
      
        <button 
                onClick={() => setIndex(index - 1)}
                disabled={index === 0}>
          Previous
        </button>
      

      {/* If last image, have "Next" button disabled */}
      
        <button 
                onClick={() => setIndex(index + 1)}
                disabled={index === recipes.length - 1}>
          Next
        </button>
      
      </div>
      
    </div>
  );
}

export default Gallery;