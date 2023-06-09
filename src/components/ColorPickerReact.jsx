import { ColorPicker, theme } from "antd";
import { useMemo, useState } from "react";

const ColorPickerReact = () => {
  const { token } = theme.useToken();
  const [color, setColor] = useState(token.colorPrimary);

  const colorStyle = useMemo(
    () => (typeof color === "string" ? color : color.toHexString()),
    [color]
  );

  return (
    <div className="flex flex-col gap-6 border-2 border-blue-400 rounded-md p-6">
      <label htmlFor="text-color-picker">Text Color:</label>
      <ColorPicker
        id="text-color-picker"
        presets={[
          {
            label: "Recommended",
            colors: [
              "#000000",
              "#000000E0",
              "#000000A6",
              "#00000073",
              "#00000040",
              "#00000026",
              "#0000001A",
              "#00000012",
              "#0000000A",
              "#00000005",
              "#F5222D",
              "#FA8C16",
              "#FADB14",
              "#8BBB11",
              "#52C41A",
              "#13A8A8",
              "#1677FF",
              "#2F54EB",
              "#722ED1",
              "#EB2F96",
              "#F5222D4D",
              "#FA8C164D",
              "#FADB144D",
              "#8BBB114D",
              "#52C41A4D",
              "#13A8A84D",
              "#1677FF4D",
              "#2F54EB4D",
              "#722ED14D",
              "#EB2F964D",
            ],
          },
          {
            label: "Recent",
            colors: [],
          },
        ]}
        value={color}
        onChange={setColor}
      />
      <p>you have selected {colorStyle}</p>
    </div>
  );
};

export default ColorPickerReact;
