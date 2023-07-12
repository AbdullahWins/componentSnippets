import { useState } from "react";
import FacebookLogin from "react-facebook-login";

const LoginWithFacebook = () => {
  const [accessToken, setAccessToken] = useState("");

  const responseFacebook = (response) => {
    if (response?.accessToken) {
      setAccessToken(response?.accessToken);
      // Store the access token in localStorage or state
      localStorage.setItem("accessToken", response?.accessToken);
      // You can also make API calls using the access token here
    } else {
      // Handle login failure
      console.log("no access token found!");
    }
  };

  const postOnBehalfOfUser = (message) => {
    const accessToken = localStorage.getItem("accessToken");

    // Make a POST request to the Facebook Graph API
    fetch(`https://graph.facebook.com/me/feed?access_token=${accessToken}`, {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        // Handle the response
      })
      .catch((error) => {
        console.log(error);
        // Handle the error
      });
  };

  return (
    <div>
      <p>{accessToken}</p>
      <FacebookLogin
        appId="YOUR_APP_ID"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <p>post on fb</p>
      <button
        onClick={() => {
          postOnBehalfOfUser("Lalalalala from fb api!");
        }}
      >
        post
      </button>
    </div>
  );
};

export default LoginWithFacebook;
