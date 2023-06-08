import { Cascader } from "antd";
const { SHOW_CHILD } = Cascader;
const options = [
  {
    label: "Light",
    value: "light",
    children: new Array(20).fill(null).map((_, index) => ({
      label: `Number ${index}`,
      value: index,
    })),
  },
  {
    label: "Bamboo",
    value: "bamboo",
    children: [
      {
        label: "Little",
        value: "little",
        children: [
          {
            label: "Toy Fish",
            value: "fish",
          },
          {
            label: "Toy Cards",
            value: "cards",
          },
          {
            label: "Toy Bird",
            value: "bird",
          },
        ],
      },
    ],
  },
];

const MultiSelector = () => {
  const onChange = (value) => {
    console.log(value);
  };
  return (
    <div className="flex flex-col gap-6 border-2 border-blue-400 rounded-md p-6">
      <p>This one selects all of the childs if clicked on the group</p>
      <Cascader
        style={{
          width: "100%",
        }}
        options={options}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
        showCheckedStrategy={SHOW_CHILD}
        defaultValue={[
          ["bamboo", "little", "fish"],
          ["bamboo", "little", "cards"],
          ["bamboo", "little", "bird"],
        ]}
      />
      <br />
      <br />
      <p>This one selects the group name if clicked on the group</p>
      <Cascader
        style={{
          width: "100%",
        }}
        options={options}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
        defaultValue={["bamboo"]}
      />
    </div>
  );
};

export default MultiSelector;
