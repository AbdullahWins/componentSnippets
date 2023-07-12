import { useEffect } from "react";

const TermlyEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="w-full"
      name="termly-embed"
      data-id="4b39135c-176c-4b5c-bc41-37f391385557"
      data-type="iframe"
    ></div>
  );
};

export default TermlyEmbed;
