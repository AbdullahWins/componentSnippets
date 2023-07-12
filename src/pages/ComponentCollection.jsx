// import Checkboxes from "../components/Checkboxes";
// import MoneyInput from "../components/MoneyInput";
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
// import UploadImage from "../components/UploadImage";
// import FetchAndPost from "../components/FetchAndPost";
// import LoginWithTwitter from "../components/LoginWithTwitter";
// import TermlyEmbed from "../components/TermlyEmbed";
import TextOnMedia from "../components/canvas/TextOnMedia";

import russian from "../assets/russian.jpg";
import halo from "../assets/halo.png";
import video from "../assets/video.mp4";

// import LoginWithFacebook from "../components/LoginWithFacebook";

// import BookifyIFrame from "../components/BookifyIFrame";

const ComponentCollection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-12 w-full">
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
      <MultiSelector></MultiSelector>
      <Checkboxes></Checkboxes>
      <MoneyInput></MoneyInput>
      <UploadImage></UploadImage>
      <FetchAndPost></FetchAndPost> */}
      {/* <BookifyIFrame></BookifyIFrame> */}
      {/* <LoginWithFacebook></LoginWithFacebook> */}
      {/* <LoginWithTwitter></LoginWithTwitter>
      <TermlyEmbed></TermlyEmbed> */}
      <div>
        <TextOnMedia
          imageUrl={russian}
          text="Hello, World!"
          width={600}
          height={600}
        />
        {/* OR */}
        {/* <TextOnMedia
          videoUrl={video}
          text="Hello, World!"
          width={600}
          height={600}
        /> */}
      </div>
    </div>
  );
};

export default ComponentCollection;
