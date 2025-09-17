export function processWeatherData(data) {
  //defensive code for if not have expexctedd data feiled  returned
  if (
    !data ||
    !data.resolvedAddress ||
    !data.currentConditions ||
    typeof data.currentConditions.temp !== "number" ||
    typeof data.currentConditions.conditions !== "string"
  ) {
    throw new Error("Invalid weather data formate...");
  }
  return {
    city: data.resolvedAddress,
    temp: data.currentConditions.temp,
    conditions: data.currentConditions.conditions,
    description: data.description,
  };
}
