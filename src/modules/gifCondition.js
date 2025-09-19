export const gifyCondition = (conditions) => {
  const lowerCaseConditions = conditions.toLowerCase();

  switch (true) {
    case lowerCaseConditions.includes("rain"):
      return "rain";

    case lowerCaseConditions.includes("snow"):
      return "snow";

    case lowerCaseConditions.includes("storm") ||
      lowerCaseConditions.includes("thunder"):
      return "thunderstorm";

    case lowerCaseConditions.includes("cloud") ||
      lowerCaseConditions.includes("overcast"):
      return "cloudy";

    case lowerCaseConditions.includes("sun") ||
      lowerCaseConditions.includes("clear"):
      return "sunny";

    case lowerCaseConditions.includes("wind"):
      return "windy";

    case lowerCaseConditions.includes("haze") ||
      lowerCaseConditions.includes("fog"):
      return "fog";

    default:
      return "weather";
  }
};
