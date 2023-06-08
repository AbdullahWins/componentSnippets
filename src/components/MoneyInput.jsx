import { InputNumber, Select, Space } from "antd";
import { useState } from "react";
const { Option } = Select;

const MoneyInput = () => {
  const [price, setPrice] = useState(69);
  const [currency, setCurrency] = useState("USD");
  const [type, setType] = useState("add");

  const handlePriceChange = (value) => {
    setPrice(value);
  };

  const handleCurrencyChange = (value) => {
    setCurrency(value);
  };

  const handleTypeChange = (value) => {
    setType(value);
  };

  console.log(type, price, currency);

  const selectBefore = (
    <Select
      onChange={handleTypeChange}
      defaultValue={type}
      style={{
        width: 60,
      }}
    >
      <Option value="add">+</Option>
      <Option value="minus">-</Option>
    </Select>
  );

  const selectAfter = (
    <Select
      onChange={handleCurrencyChange}
      defaultValue={currency}
      style={{
        width: 60,
      }}
    >
      <Option value="USD">$</Option>
      <Option value="EUR">€</Option>
      <Option value="GBP">£</Option>
      <Option value="CNY">¥</Option>
    </Select>
  );

  return (
    <Space direction="vertical">
      <InputNumber
        addonBefore={selectBefore}
        addonAfter={selectAfter}
        defaultValue={price}
        onChange={handlePriceChange}
      />
    </Space>
  );
};

export default MoneyInput;
