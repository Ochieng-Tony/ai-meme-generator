import React, { useState } from "react";
import UploadImage from "./components/UploadImage";
import CaptionSuggestions from "./components/CaptionSuggestions";

function App() {
  const [image, setImage] = useState(null);
  const [captions, setCaptions] = useState([]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">😂 AI Meme Generator</h1>
      <UploadImage setImage={setImage} />
      {image && <CaptionSuggestions image={image} captions={captions} setCaptions={setCaptions} />}
    </div>
  );
}

export default App;
