"use client";

import axios from "axios";

function Upload() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await axios.post("http://localhost:4000/img", formData);
  };

  return (
    <div>
      <form
        action="/img"
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <input type="file" name="avatar" />
        <button type="submit">upload</button>
      </form>
    </div>
  );
}

export default Upload;
