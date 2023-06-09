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
    <div className="flex flex-col gap-6 border-2 border-blue-400 rounded-md p-6">
      <input className="bg-gray-200" type="text" onChange={handleChange} />
      <img src={image} alt="" />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default ReplicateAI;
