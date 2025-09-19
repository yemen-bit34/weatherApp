# 🌤️ Weather App

A modern, responsive weather application built with vanilla JavaScript, featuring dynamic backgrounds and real-time weather data.

![Weather App](https://img.shields.io/badge/Status-Live-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Webpack](https://img.shields.io/badge/Webpack-5.x-blue)

## ✨ Features

- 🌍 **Real-time Weather Data** - Get current weather conditions for any city worldwide
- 🎨 **Dynamic Backgrounds** - Beautiful animated GIFs that change based on weather conditions
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast & Lightweight** - Built with modern web technologies for optimal performance
- 🎯 **User-Friendly** - Clean, intuitive interface with smooth animations

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Build Tool**: Webpack 5
- **APIs**:
  - [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api) for weather data
  - [Giphy API](https://developers.giphy.com/) for dynamic backgrounds
- **Development**: Node.js, npm, Git

## 🚀 Live Demo

[View Live App](https://your-username.github.io/weather-app)

## 📦 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- API keys for Visual Crossing Weather and Giphy

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
# Weather API Configuration
API_KEY=your_visual_crossing_api_key_here
UNIT_GROUP=metric
CONTENT_TYPE=json

# Giphy API Configuration
SECOND_API_KEY=your_giphy_api_key_here
```

### 4. Get API Keys

- **Visual Crossing Weather API**: [Sign up here](https://www.visualcrossing.com/weather-api)
- **Giphy API**: [Get your key here](https://developers.giphy.com/)

## 🏃‍♂️ Running the App

### Development Mode

```bash
npm run dev
```

Opens the app at `http://localhost:8080` with hot reloading.

### Production Build

```bash
npm run prod
```

Creates optimized build in the `dist/` folder.

## 📂 Project Structure

```
weather-app/
├── src/
│   ├── api/
│   │   ├── api.js          # Weather API integration
│   │   └── apiGify.js      # Giphy API integration
│   ├── dom/
│   │   └── updateDom.js    # DOM manipulation
│   ├── modules/
│   │   ├── processData.js  # Data processing utilities
│   │   └── gifCondition.js # GIF selection logic
│   ├── styles/
│   │   └── styles.css      # Main stylesheet
│   ├── index.js            # Main application entry
│   └── template.html       # HTML template
├── dist/                   # Production build output
├── package.json
├── webpack.config.js
└── README.md
```

## 🎨 Features in Detail

### Weather Data

- Current temperature, humidity, wind speed
- Precipitation probability
- Weather conditions and descriptions
- Location-based weather information

### Dynamic Backgrounds

- Weather-appropriate GIF backgrounds
- Smooth transitions between different weather states
- Optimized loading for better performance

### User Experience

- Search by city name with Enter key support
- Loading states and error handling
- Responsive glassmorphism design
- Smooth animations and transitions

## 🚀 Deployment

### GitHub Pages

```bash
npm run deploy
```

This will build the project and deploy it to GitHub Pages.

### Manual Deployment

1. Run `npm run prod` to create production build
2. Upload the `dist/` folder contents to your web server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Al$haib** - [GitHub Profile](https://github.com/your-username)

---

⭐ **Star this repository if you found it helpful!**
