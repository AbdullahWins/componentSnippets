import { useState } from "react";

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const author = form.author.value;
    const city = form.city.value;
    const state = form.state.value;
    const zip = form.zip.value;

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("author", author);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("zip", zip);
    addOrderToDB(formData);
    form.reset();
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const addOrderToDB = (formData) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/generate`;

    const options = {
      method: "POST",
      body: formData,
      headers: {},
    };
    fetch(url, options)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <section className="flex items-center justify-center gap-4">
      <div>
        <h2 className="text-center font-bold">Shipping</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="author" className="label">
            Author Name:
          </label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Author Name"
            defaultValue="Author Name"
            className="input input-bordered w-full mt-2"
            required
          />

          <label htmlFor="city" className="label">
            Town/City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Town/City"
            defaultValue={"Town/City Name"}
            className="input input-bordered w-full my-2"
            required
          />

          <label htmlFor="state" className="label">
            State:
          </label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="State"
            defaultValue={"State Name"}
            className="input input-bordered w-full my-2"
            required
          />

          <label htmlFor="zip" className="label">
            Zip/Postcode:
          </label>
          <input
            type="text"
            id="zip"
            name="zip"
            placeholder="Zip/Postcode"
            defaultValue={"Zip/Postcode Name"}
            className="input input-bordered w-full"
            required
          />

          <div className="form-control my-2">
            <label htmlFor="image" className="label">
              Select Image:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleFileChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control my-2">
            <label className="label cursor-pointer">
              <span className="label-text font-bold">Cash on Delivery</span>
              <input
                type="radio"
                name="cod"
                className="radio checked:bg-green-500"
              />
            </label>
          </div>

          <button className="submit btn w-full bg-gradient-to-r from-blue-500 to-cyan-400 border-none">
            Continue
          </button>
        </form>
      </div>
    </section>
  );
};

export default UploadImage;
