from fastapi import APIRouter

router = APIRouter()

@router.get("/health")
async def health():
    return {"service": "mcp", "status": "ok"}