export function processWeatherData(data) {
  return {
    city: data.resolvedAddress,
    temp: data.currentConditions.temp,
    conditions: data.currentConditions.conditions,
  };
}
