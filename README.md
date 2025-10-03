# D3 Choropleth Map - US Educational Attainment

An interactive choropleth map visualization displaying the percentage of adults with bachelor's degrees or higher across US counties, built with D3.js for the freeCodeCamp Data Visualization certification.

## 🌟 [Live Demo](https://d3-choropleth.vercel.app/)

## ✨ Key Features

- **Interactive county mapping** - Hover over any US county to see detailed education statistics
- **Color-coded visualization** - Blue color scale representing education levels from lowest to highest
- **Dynamic tooltips** - Real-time data display showing county name, state, and exact percentage
- **Responsive legend** - Clear scale indicators for easy data interpretation

## 🛠️ Tech Stack

- **D3.js v7** - Data visualization and DOM manipulation
- **TopoJSON** - Geographic data format and county boundaries
- **CSS3** - Styling and responsive design
- **Vanilla JavaScript** - Core functionality and data processing

## 🚀 Quick Start

```bash
git clone https://github.com/jesslyntrixie/d3-choropleth.git
cd d3-choropleth
# Open index.html in your browser or serve with a local server
```

## 💡 Implementation Overview

This visualization fetches US county boundary data and educational statistics from freeCodeCamp's API, then renders an interactive choropleth map using D3.js. The implementation utilizes TopoJSON for efficient geographic rendering, quantize scales for color mapping, and event-driven tooltips for user interaction. Counties are colored using a 9-step blue color scheme that corresponds to education levels, creating an intuitive visual representation of educational attainment across America.

## 📚 Learning Outcomes

- **Geographic data visualization** - Working with TopoJSON and GeoJSON formats for mapping
- **D3.js scales and legends** - Implementing quantize color scales and custom legend components  
- **Interactive data binding** - Creating responsive tooltips with mouseover/mouseout events
- **API data integration** - Combining multiple datasets for comprehensive visualizations

## 🏆 Certification Context

This project fulfills the **Choropleth Map** requirement for freeCodeCamp's [Data Visualization Certification](https://www.freecodecamp.org/learn/data-visualization/). It demonstrates proficiency in creating geographic data visualizations and interactive user interfaces with D3.js.

## 📁 Project Structure

```
├── index.html          # Main HTML structure and D3 library imports
├── script.js           # Core D3.js visualization logic and data processing
├── styles.css          # Styling for map, tooltips, and responsive design
└── README.md           # Project documentation
```

---

Portfolio piece by [@jesslyntrixie](https://github.com/jesslyntrixie)