import { processWeatherData } from "../modules/processData";
import { timeNow } from "../modules/timeFunction";
export function updateDom(container, rawData) {
  // Clear any existing content
  container.innerHTML = "";

  // Process the raw data into a clean object
  const data = processWeatherData(rawData);

  const weatherCard = document.createElement("div");
  weatherCard.classList.add("weather-card");

  weatherCard.innerHTML = `
    <div class="card-left">
        <div class="weather-icon">
            <span class="icon">☀️</span>
        </div>
        <p class="small muted">${timeNow()}</p>
    </div>
    <div class="card-main">
        <h3 class="city">${data.city}</h3>
        <p class="temp">${data.temp}°C</p>
        <p class="cond">${data.conditions}</p>
        <p>${data.description}</p>
    </div>
  `;
  container.appendChild(weatherCard);
}
