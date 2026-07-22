export function getVideoId(url) {
  if (!url) return null;

  try {
    const parsedUrl = new URL(url);

    if (
      parsedUrl.hostname.includes("youtube.com") &&
      parsedUrl.searchParams.has("v")
    ) {
      return parsedUrl.searchParams.get("v");
    }

    if (parsedUrl.hostname === "youtu.be") {
      return parsedUrl.pathname.substring(1);
    }

    return null;
  } catch {
    return null;
  }
}