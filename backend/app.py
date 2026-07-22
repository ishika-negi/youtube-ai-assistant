from fastapi import FastAPI

app = FastAPI(title="Youtube AI Backend")

@app.get("/")
def home():
    return {
        "message": "Backend Running successfully"
    }