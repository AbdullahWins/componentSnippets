import { useEffect, useState } from "react";

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState({
    uId: "1",
    userID: "12345",
    platform: "platform A",
    name: "Dummy Item 1",
    author: "Noyon 1",
    tags: ["tag1", "tag2"],
    category: "category A",
    colors: ["red", "blue"],
    description: "This is the description for Dummy Item 1.",
    isMatureContent: false,
    availability: "free",
    price: 0,
    status: "paused",
    timestamp: 1677638400,
    isTrending: true,
    isCreatorChoice: true,
    like: ["user1", "user2"],
    used: 10,
    purchasedUser: ["user3", "user4"],
    downloaded: ["user5", "user6"],
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setResult(null);
    setError(null);
  }, [file, data]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleDataChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log("submitting");
    try {
      if (!file) {
        setError("Please select a file");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("data", JSON.stringify(data));
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/banners/add`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        setResult(result);
        setError(null);
      } else {
        setError("Failed to upload file");
      }
    } catch (error) {
      setError("An error occurred");
    }
  };

  // Function to update a ringtone by ID
  const updateRingtoneById = async (id) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("data", JSON.stringify(data));

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/banners/edit/${id}`,
        {
          method: "PATCH",
          body: formData,
        }
      );

      const result = await response.json();
      console.log(result);

      // Handle success response here
    } catch (error) {
      console.error(error);
      // Handle error here
    }
  };

  return (
    <div className="flex flex-col gap-6 border-2 border-blue-400 rounded-md p-6">
      <h1 className="text-3xl font-bold underline">A File uploader form</h1>
      <div>
        <button
          onClick={() => {
            updateRingtoneById("647ec0da264d1f982e7fe91e");
          }}
        >
          update
        </button>
      </div>
      <div>
        <label htmlFor="file2">File:</label>
        <input type="file" id="file2" onChange={handleFileChange} />
      </div>

      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={handleDataChange}
        />
      </div>

      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={data.author}
          onChange={handleDataChange}
        />
      </div>

      <div>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={data.category}
          onChange={handleDataChange}
        />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={data.description}
          onChange={handleDataChange}
        />
      </div>

      <div>
        <label htmlFor="isMatureContent">Is Mature Content:</label>
        <input
          type="checkbox"
          id="isMatureContent"
          name="isMatureContent"
          checked={data.isMatureContent}
          onChange={handleDataChange}
        />
      </div>

      <div>
        <label htmlFor="availability">Availability:</label>
        <input
          type="text"
          id="availability"
          name="availability"
          value={data.availability}
          onChange={handleDataChange}
        />
      </div>

      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={data.price}
          onChange={handleDataChange}
        />
      </div>

      <div>
        <label htmlFor="status">Status:</label>
        <input
          type="text"
          id="status"
          name="status"
          value={data.status}
          onChange={handleDataChange}
        />
      </div>

      <div>
        <label htmlFor="timestamp">Timestamp:</label>
        <input
          type="number"
          id="timestamp"
          name="timestamp"
          value={data.timestamp}
          onChange={handleDataChange}
        />
      </div>

      <div>
        <label htmlFor="isTrending">Is Trending:</label>
        <input
          type="checkbox"
          id="isTrending"
          name="isTrending"
          checked={data.isTrending}
          onChange={handleDataChange}
        />
      </div>

      <div>
        <label htmlFor="isCreatorChoice">Is Creator&apos;s Choice:</label>
        <input
          type="checkbox"
          id="isCreatorChoice"
          name="isCreatorChoice"
          checked={data.isCreatorChoice}
          onChange={handleDataChange}
        />
      </div>

      <button className="btn bg-red-300" onClick={handleSubmit}>
        Upload and Save
      </button>

      {result && (
        <div>
          <p>File URL: {result.fileUrl}</p>
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default FileUploader;
