import { processWeatherData } from "../modules/processData";
import { getGify } from "../api/apiGify";
import { gifyCondition } from "../modules/gifCondition";
export async function updateDom(container, rawData) {
  // Clear any existing content
  container.innerHTML = "";

  // Process the raw data into a clean object
  const data = processWeatherData(rawData);

  // Get the GIF keyword and fetch the GIF
  const gifKeyword = gifyCondition(data.conditions); // <-- ADDED: Uses the new mapping function
  const gifUrl = await getGify(gifKeyword); // <-- ADDED: Fetches the GIF asynchronously

  const weatherCard = document.createElement("div");
  weatherCard.classList.add("weather-card");

  document.querySelector("body").style.backgroundImage = gifUrl
    ? `url("${gifUrl}")`
    : "none";

  // Format date and time
  const dayName = new Date(data.day || Date.now()).toLocaleDateString("en-US", {
    weekday: "long",
  });
  const timeString = data.datetime
    ? new Date(`2000-01-01T${data.datetime}`).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  weatherCard.innerHTML = `
    <div class="weather-details">
      <p>Rain: ${data.precip}%</p>
      <p>Humidity: ${data.humidity}%</p>
      <p>Wind: ${data.windSpeed} km/h</p>
    </div>
    <div class="weather-main">
      <h3 class="city">${data.city}</h3>
      <p class="temp">${data.temp}°C</p>
      <p class="cond">${data.conditions}</p>
      <hr />
      <p>Weather</p>
      <p>${dayName} ${timeString}</p>
      <p>Mostly ${data.conditions.toLowerCase()}</p>
      <p>${data.description || ""}</p>
    </div>
  `;
  container.appendChild(weatherCard);
}
