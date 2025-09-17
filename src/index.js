import "./styles/styles.css";
import { getWeatherData } from "./api/api.js";
import { updateDom } from "./dom/updateDom.js";

const searchBtn = document.querySelector("button");
const searchInput = document.querySelector("input");
const cardsContainer = document.querySelector(".cards");

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});

searchBtn.addEventListener("click", async () => {
  const query = searchInput.value.trim();
  if (!query) return;

  // Clear previous data and show a loading state and  disable button when loading
  searchBtn.disabled = true;
  cardsContainer.innerHTML = '<p class="loader"></p>';

  try {
    const data = await getWeatherData(query);
    if (data) {
      updateDom(cardsContainer, data);
      console.log(data);
    } else {
      cardsContainer.innerHTML =
        '<p class="empty">City not found. Please try again.</p>';
    }
  } catch (error) {
    cardsContainer.innerHTML =
      '<p class="empty">An error occurred. Please try again later.</p>';
    console.error(error);
  } finally {
    searchBtn.disabled = false;
    searchInput.focus();
  }
});
