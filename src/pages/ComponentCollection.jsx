// import AnchorTagMaintainer from "../components/AnchorTagMaintainer";
import AsyncButton from "../components/AsyncButton";
import DatePickerComponent from "../components/DatePickerComponent";
import FileUploader from "../components/FileUploader";
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
    </div>
  );
};

export default ComponentCollection;
