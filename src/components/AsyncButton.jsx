import { Button } from "antd";
import { useState } from "react";

const AsyncButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const enterLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col gap-6 border-2 border-blue-400 rounded-md p-6">
      <Button
        className="text-black"
        type="primary"
        loading={isLoading}
        onClick={() => enterLoading()}
      >
        Click me!
      </Button>
    </div>
  );
};

export default AsyncButton;
