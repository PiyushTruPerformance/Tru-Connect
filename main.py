from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import routers from each team's folder
from ai_orchestration.router import router as ai_router
from mcp.router import router as mcp_router
from rag.router import router as rag_router
from web_server.router import router as web_server_router

app = FastAPI(
    title="TRU Connect API",
    version="1.0.0",
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # tighten later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(
    ai_router,
    prefix="/ai",
    tags=["AI Orchestration"]
)

app.include_router(
    mcp_router,
    prefix="/mcp",
    tags=["MCP"]
)

app.include_router(
    rag_router,
    prefix="/rag",
    tags=["RAG"]
)

app.include_router(
    web_server_router,
    prefix="/server",
    tags=["Web Server"]
)

@app.get("/")
async def root():
    return {
        "message": "Welcome to TRU Connect"
    }