from fastapi import APIRouter
from services.youtube import get_transcript


router = APIRouter(
    prefix="/youtube",
    tags=["YouTube"]
)


@router.get("/transcript/{video_id}")
def transcript(video_id: str):

    text = get_transcript(video_id)

    return {
        "video_id": video_id,
        "transcript": text
    }