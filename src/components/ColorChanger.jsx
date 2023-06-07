// MyComponent.js
import { useState } from "react";
// import tailwindConfig from "../../tailwind.config.js";

const ColorChanger = () => {
  const [mainColor, setMainColor] = useState("#fff000");
  //   const [mainColor, setMainColor] = useState(
  //     tailwindConfig.theme.colors.primary
  //   );

  const handleColorChange = () => {
    const newColor = "#FF0000";
    setMainColor(newColor);
    // tailwindConfig.theme.colors.primary = newColor;
  };

  return (
    <div className="flex flex-col gap-6 border-2 border-blue-400 rounded-md p-6">
      <button onClick={handleColorChange}>Change Color</button>
      <div style={{ color: mainColor }}>Color Change!</div>
    </div>
  );
};

export default ColorChanger;
