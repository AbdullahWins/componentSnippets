import { ColorPicker, theme } from "antd";
import { useMemo, useState } from "react";
import TextDivider from "./TextDivider";

const BackgroundWithPicker = () => {
  const { token } = theme.useToken();
  const [color, setColor] = useState(token.colorPrimary);
  const bgColor = useMemo(
    () => (typeof color === "string" ? color : color.toHexString()),
    [color]
  );
  const componentStyle = {
    color: bgColor,
  };

  return (
    <div
      style={componentStyle}
      className="flex flex-col gap-6 border-2 border-blue-400 rounded-md p-6"
    >
      <ColorPicker
        presets={[
          {
            label: "Recommended",
            colors: [
              "#000000",
              "#000000A6",
              "#00000073",
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
      <TextDivider></TextDivider>
    </div>
  );
};

export default BackgroundWithPicker;
