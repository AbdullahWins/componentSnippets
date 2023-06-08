import Checkboxes from "../components/Checkboxes";
import MoneyInput from "../components/MoneyInput";

// import DatePickerComponent from "../components/DatePickerComponent";
// import FileUploader from "../components/FileUploader";
// import AsyncButton from "../components/AsyncButton";
// import TextDivider from "../components/TextDivider";
// import AnchorTagMaintainer from "../components/AnchorTagMaintainer";
// import BackgroundWithPicker from "../components/BackgroundWithPicker";
// import ColorChanger from "../components/ColorChanger";
// import ColorPickerReact from "../components/ColorPickerReact";
// import MultiPurposeForm from "../components/MultiPurposeForm";
// import MultiSelector from "../components/MultiSelector";
// import ReplicateAI from "../components/ReplicateAI";

const ComponentCollection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-12">
      {/* <FileUploader></FileUploader>
      <DatePickerComponent></DatePickerComponent>
      <AsyncButton></AsyncButton>
      <TextDivider></TextDivider>
      <AnchorTagMaintainer></AnchorTagMaintainer>
      <ReplicateAI></ReplicateAI>
      <ColorPickerReact></ColorPickerReact>
      <ColorChanger></ColorChanger>
      <BackgroundWithPicker></BackgroundWithPicker>
      <MultiPurposeForm></MultiPurposeForm>
      <MultiSelector></MultiSelector> */}
      <Checkboxes></Checkboxes>
      <MoneyInput></MoneyInput>
    </div>
  );
};

export default ComponentCollection;
