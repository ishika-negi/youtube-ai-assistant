from langchain_chroma import Chroma

from rag.embeddings import get_embeddings 

def create_vectorstore(documents, video_id):

    embeddings = get_embeddings()

    vectorstore = Chroma.from_documents(
        documents=documents,
        embedding=embeddings,
        collection_name=f"youtube_{video_id}",
        persist_directory="./vectorstore"
    )
    return vectorstore

def get_retriever(vectorstore):

    return vectorstore.as_retriever(
        search_kwargs={
            "k": 5
        }
    )