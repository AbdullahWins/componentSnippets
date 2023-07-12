import { useState } from "react";

const LoginWithTwitter = () => {
  const [accessToken, setAccessToken] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/twitter/login");
      const data = await response.json();
      const { accessToken } = data;
      setAccessToken(accessToken);
      console.log("Access Token:", accessToken);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Twitter Login</h2>
      <div>

        
      </div>
      {accessToken ? (
        <p>Access Token: {accessToken}</p>
      ) : (
        <button onClick={handleLogin}>Login with Twitter</button>
      )}
    </div>
  );
};

export default LoginWithTwitter;
