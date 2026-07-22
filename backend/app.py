from fastapi import FastAPI
from routes.youtube import router as youtube_router

app = FastAPI(
    title="YouTube AI Backend",
    version="1.0.0"
)

app.include_router(youtube_router)

@app.get("/")
def home():
    return {
        "message": "Backend Running 🚀"
    }