import { useState } from "react";

const ReplicateAI = () => {
  const [image, setImage] = useState("");
  const [prompt, setPrompt] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setPrompt(event?.target?.value);
  };

  console.log(prompt);

  const handleClick = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/rep`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    const result = await response.json();
    console.log(result);
    if (response.ok) {
      setImage(result[0]);
    } else {
      console.log("Failed to upload file");
    }
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <img src={image} alt="" />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default ReplicateAI;
