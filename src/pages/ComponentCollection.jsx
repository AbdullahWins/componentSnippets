// import AnchorTagMaintainer from "../components/AnchorTagMaintainer";
import AsyncButton from "../components/AsyncButton";
import BackgroundWithPicker from "../components/BackgroundWithPicker";
import ColorChanger from "../components/ColorChanger";
import ColorPickerReact from "../components/ColorPickerReact";
import DatePickerComponent from "../components/DatePickerComponent";
import FileUploader from "../components/FileUploader";
import MultiPurposeForm from "../components/MultiPurposeForm";
import ReplicateAI from "../components/ReplicateAI";
import TextDivider from "../components/TextDivider";

const ComponentCollection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-12">
      <FileUploader></FileUploader>
      <DatePickerComponent></DatePickerComponent>
      <AsyncButton></AsyncButton>
      <TextDivider></TextDivider>
      {/* <AnchorTagMaintainer></AnchorTagMaintainer> */}
      <ReplicateAI></ReplicateAI>
      <ColorPickerReact></ColorPickerReact>
      <ColorChanger></ColorChanger>
      <BackgroundWithPicker></BackgroundWithPicker>
      <MultiPurposeForm></MultiPurposeForm>
    </div>
  );
};

export default ComponentCollection;
