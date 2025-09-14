from fastapi import FastAPI
from transformers import pipeline

app = FastAPI()
caption_model = pipeline("text-generation", model="gpt2")

@app.post("/suggest")
async def suggest_caption(prompt: str):
    result = caption_model(prompt, max_length=20, num_return_sequences=3)
    return {"captions": [r["generated_text"] for r in result]}
