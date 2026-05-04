# 🌤️ Weather App Clone

A modern, responsive weather application that provides real-time weather information with a beautiful UI and smooth user experience.

## ✨ Features

- 🔍 **City Search** - Search weather information for any city worldwide
- 📍 **Geolocation** - Automatically get weather for your current location
- 🌡️ **Temperature Units** - Toggle between Celsius (°C) and Fahrenheit (°F)
- 🌙 **Dark/Light Theme** - Switch between dark and light themes
- 💾 **Recent Searches** - Quick access to previously searched cities
- 🌐 **Country Flags** - Display country flags for each location
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Real-time Data** - Powered by OpenWeatherMap API

## 🎨 Demo

![Weather App Demo](https://via.placeholder.com/800x600?text=Insert+GIF+Here)

## 🛠️ Tech Stack

- **HTML5** - Structure
- **SCSS** - Advanced styling
- **JavaScript (ES6+)** - Core functionality
- **Bootstrap Icons** - UI icons
- **OpenWeatherMap API** - Weather data
- **Geolocation API** - Location services

## 📋 Project Structure

```
WheatherApp_Clone/
├── index.html           # Main HTML file
├── js/
│   ├── main.js         # Main application logic
│   ├── api.js          # API calls and data fetching
│   ├── ui.js           # UI rendering and updates
│   └── constants.js    # Constants and configuration
├── styles/
│   ├── styles.scss     # Main SCSS file
│   ├── _variables.scss # SCSS variables
│   └── styles.css      # Compiled CSS
└── README.md           # Documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- Internet connection for API calls

### Installation

1. Clone the repository:
```bash
git clone https://github.com/veyseleminoglu/WheatherApp_Clone.git
cd WheatherApp_Clone
```

2. Open the application:
   - Simply open `index.html` in your web browser
   - Or use a local development server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

3. Allow location access when prompted (for geolocation feature)

## 💡 Usage

1. **Search by City** - Type a city name in the search box and press Enter or click the search button
2. **Use Current Location** - Click the crosshair icon to get weather for your current location
3. **Toggle Units** - Click °C or °F to switch temperature units
4. **Change Theme** - Click the moon/sun icon to toggle between dark and light themes
5. **Quick Access** - Click on recent search chips to quickly view weather for previously searched cities

## 🔌 API

This project uses the **OpenWeatherMap API**:
- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Features**: Current weather, temperature, humidity, pressure, wind speed, and more
- **Language**: Turkish (`lang=tr`)

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🎓 What I Learned

- RESTful API integration and data fetching
- DOM manipulation and event handling
- Local storage for persistent data
- Geolocation API usage
- SCSS preprocessor and advanced styling
- Theme switching and state management
- Responsive web design principles

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements!

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Veysel Eminoğlu**
- GitHub: [@veyseleminoglu](https://github.com/veyseleminoglu)

## 📞 Contact

For questions or suggestions, feel free to reach out!

---

⭐ If you found this project helpful, please consider giving it a star!
