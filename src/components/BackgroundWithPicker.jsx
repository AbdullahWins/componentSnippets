import { ColorPicker, theme } from "antd";
import { useMemo, useState } from "react";
import TextDivider from "./TextDivider";

const BackgroundWithPicker = () => {
  const { token } = theme.useToken();
  const [textColor, setTextColor] = useState(token.colorPrimary);
  const [bgColor, setBgColor] = useState("#ffffff");

  const textColorStyle = useMemo(
    () => (typeof textColor === "string" ? textColor : textColor.toHexString()),
    [textColor]
  );

  const bgColorStyle = useMemo(
    () => (typeof bgColor === "string" ? bgColor : bgColor.toHexString()),
    [bgColor]
  );

  const componentStyle = {
    color: textColorStyle,
    backgroundColor: bgColorStyle,
  };

  return (
    <div
      style={componentStyle}
      className="flex flex-col gap-6 border-2 border-blue-400 rounded-md p-6"
    >
      <section className="flex items-center justify-between gap-4">
        <div>
          <label htmlFor="text-color-picker">Text Color:</label>
          <ColorPicker
            id="text-color-picker"
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
            value={textColor}
            onChange={setTextColor}
          />
        </div>

        <div>
          <label htmlFor="bg-color-picker">Background Color:</label>
          <ColorPicker
            id="bg-color-picker"
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
            value={bgColor}
            onChange={setBgColor}
          />
        </div>
      </section>

      <TextDivider />
    </div>
  );
};

export default BackgroundWithPicker;
