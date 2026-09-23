const API_URL = "http://127.0.0.1:8000";


export async function getTranscript(videoId) {

  const response = await fetch(
    `${API_URL}/youtube/transcript/${videoId}`
  );

  if (!response.ok) {
    throw new Error(
      `Backend returned ${response.status}`
    );
  }

  return response.json();
}