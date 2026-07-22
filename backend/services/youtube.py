from fastapi import APIRouter
from services.youtube import get_video_info

router = APIRouter(
    prefix="/youtube",
    tags=["YouTube"]
)

@router.get("/video/{video_id}")
def video_info(video_id: str):
    return get_video_info(video_id)