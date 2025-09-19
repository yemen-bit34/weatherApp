const API_KEY = process.env.API_KEY;
const UNIT_GROUP = process.env.UNIT_GROUP;
const CONTENT_TYPE = process.env.CONTENT_TYPE;

export async function getWeatherData(query) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=${UNIT_GROUP}&key=${API_KEY}&contentType=${CONTENT_TYPE}`;

  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    return await response.json();
  } catch (error) {
    console.error("errooooor :", error);
    return null;
  }
}
