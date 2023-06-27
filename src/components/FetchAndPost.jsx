import { useEffect, useState } from "react";
import axios from "axios";

const FetchAndPost = () => {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  useEffect(() => {
    // Fetch request
    axios
      .get("http://localhost:5000/welcomeScreens/find/649a7773f63d91984454a896")
      .then((response) => {
        setData(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const postData = () => {
    // Post request
    axios
      .post("http://localhost:5000/mark", {
        data: { inputValue },
      })
      .then((response) => {
        console.log(response);
        console.log("Data posted successfully!");
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  return (
    <div>
      <h1>Example Component</h1>
      {data ? (
        <div>
          <input type="text" name="" id="" onChange={handleChange} />
          <h2>Data:</h2>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          <p dangerouslySetInnerHTML={data.htmlContent}></p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
      <button onClick={postData}>Post Data</button>
    </div>
  );
};

export default FetchAndPost;
