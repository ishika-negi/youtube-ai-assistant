from langchain_huggingface import (
    ChatHuggingFace,
    HuggingFaceEndpoint
)

def get_model():
    llm = HuggingFaceEndpoint(
        repo_id="deepseek-ai/DeepSeek-V4_Pro",
        task="text-generation"
    )

    return ChatHuggingFace(llm=llm)