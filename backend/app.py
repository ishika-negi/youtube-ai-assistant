from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.youtube import router as youtube_router


app = FastAPI(
    title="YouTube AI Assistant API",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(youtube_router)


@app.get("/")
def home():
    return {
        "message": "YouTube AI Assistant backend is running!"
    }