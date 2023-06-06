import AsyncButton from "../components/AsyncButton";
import DatePickerComponent from "../components/DatePickerComponent";
import FileUploader from "../components/FileUploader";
import TextDivider from "../components/TextDivider";

const ComponentCollection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-12">
      <FileUploader></FileUploader>
      <DatePickerComponent></DatePickerComponent>
      <AsyncButton></AsyncButton>
      <TextDivider></TextDivider>
    </div>
  );
};

export default ComponentCollection;
