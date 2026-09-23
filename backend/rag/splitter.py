from langchain_text_splitters import RecursiveCharacterTextSplitter

def split_transcript(text: str):
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=150
    )

    chunks = splitter.create_documents([text])

    return chunks