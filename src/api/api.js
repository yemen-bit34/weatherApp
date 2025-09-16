const API_KEY = "9W8BQCT4HK8KFSQXW4SLWXD7M";
const UNIT_GROUP = "metric";
const CONTENT_TYPE = "json";
const cardsContainer = document.querySelector(".cards");

export async function getWeatherData(query) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=${UNIT_GROUP}&key=${API_KEY}&contentType=${CONTENT_TYPE}`;

  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    return await response.json();
  } catch (error) {
    cardsContainer.innerHTML =
      '<p class="empty">An error occurred. Please try again later.</p>';
    return null;
  }
}
