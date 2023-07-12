const BookifyIFrame = () => {
  return (
    <div className="w-full">
      <iframe
        src="https://eden-berry.bookafy.com/schedule?type=iframe&locale=en"
        height="800"
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default BookifyIFrame;
