import { DatePicker, message, Alert } from "antd";
import { useState } from "react";

const DatePickerComponent = () => {
  const [date, setDate] = useState(null);

  const handleChange = (value) => {
    message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
  };

  console.log(`Selected Date: ${date ? date.format("YYYY-MM-DD") : "None"}`);

  return (
    <div className="flex flex-col gap-6 border-2 border-blue-400 rounded-md p-6">
      <DatePicker onChange={handleChange} />
      <Alert
        message="Selected Date"
        description={date ? date.format("YYYY-MM-DD") : "None"}
      />
    </div>
  );
};

export default DatePickerComponent;
