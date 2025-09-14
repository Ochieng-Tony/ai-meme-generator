import React, { useState } from "react";
import axios from "axios";

export default function CaptionSuggestions({ image, captions, setCaptions }) {
  const [loading, setLoading] = useState(false);

  const getCaptions = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/suggest?prompt=funny meme");
      setCaptions(res.data.captions);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div>
      <img src={image} alt="Uploaded" className="max-w-xs mb-4" />
      <button onClick={getCaptions} className="p-2 bg-blue-500 text-white rounded">
        {loading ? "Loading..." : "Get AI Captions"}
      </button>
      <ul className="mt-4">
        {captions.map((c, i) => (
          <li key={i} className="mb-2">{c}</li>
        ))}
      </ul>
    </div>
  );
}
