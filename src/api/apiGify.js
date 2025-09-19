const API_KEY = process.env.SECOND_API_KEY;

export async function getGify(keyword) {
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}=${keyword}`;

  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error("Failed to fetch GIF !!!");
    }
    const gifData = await response.json();
    return gifData.data.images.original.url; //returns the gif
  } catch (error) {
    console.error("GIF erroooor!!!! :", error);
    return null;
  }
}
