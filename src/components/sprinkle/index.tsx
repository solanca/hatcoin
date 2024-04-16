import { useState, useEffect } from "react";
import "./ButtonWithSprinkles.css"; // Import the CSS for styles

function ButtonWithSprinkles() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      const timer = setTimeout(() => setActive(false), 1000); // Animation duration
      return () => clearTimeout(timer);
    }
  }, [active]);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <button
      className={`button ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      Click Me
    </button>
  );
}

export default ButtonWithSprinkles;
