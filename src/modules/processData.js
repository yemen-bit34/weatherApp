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
    humidity: data.currentConditions.humidity, // نسبة الرطوبة
    windSpeed: data.currentConditions.windspeed, // سرعة الرياح
    precip: data.currentConditions.precipprob || 0, // احتمالية الأمطار %
    datetime: data.currentConditions.datetime, // Example: "09:00:00"
    day: data.days && data.days[0]?.datetime, // Example: "2025-09-19"
  };
}
