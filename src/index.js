import "./styles/styles.css";
import { getWeatherData } from "./api/api.js";
import { updateDom } from "./dom/updateDom.js";

const searchBtn = document.querySelector("button");
const searchInput = document.querySelector("input");
const cardsContainer = document.querySelector(".cards");

searchBtn.addEventListener("click", async () => {
  const query = searchInput.value.trim();
  if (!query) return;

  // Clear previous data and show a loading state
  cardsContainer.innerHTML = '<p class="loader"></p>';

  try {
    const data = await getWeatherData(query);
    if (data) {
      updateDom(cardsContainer, data);
    } else {
      cardsContainer.innerHTML =
        '<p class="empty">City not found. Please try again.</p>';
    }
  } catch (error) {
    cardsContainer.innerHTML =
      '<p class="empty">An error occurred. Please try again later.</p>';
  }
});
