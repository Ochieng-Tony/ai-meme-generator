import React from "react";

export default function UploadImage({ setImage }) {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="mb-4">
      <input type="file" accept="image/*" onChange={handleUpload} />
    </div>
  );
}
