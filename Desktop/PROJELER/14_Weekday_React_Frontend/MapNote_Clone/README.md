# MapNote Clone

A simple location-based notes app built with plain JavaScript and Leaflet.

## 🌍 Overview

MapNote Clone is a map-driven note app where users can add points with a title, date, and category. Notes are stored locally in the browser and shown both on the map and in a sidebar list.

## ✨ Features

- 🗺️ Interactive Leaflet map
- 📌 Tap the map to add a new note
- 💾 Notes saved in `localStorage`
- 🏠🚗✈️🧑‍💼 Custom icons for note types
- ✈️ Fly-to-note animation from the list
- 🗑️ Delete notes with confirmation
- 📱 Responsive sidebar for mobile and desktop

## 🎬 Demo

![MapNote Demo](./demo.gif)

> Replace `./demo.gif` with your own animated preview file.

## 🚀 How it works

1. The app requests location and centers the map on the current position.
2. Click a map location to open the note form.
3. Enter a title, date, and choose a category.
4. Notes appear in the sidebar and as markers on the map.
5. Use the airplane button to zoom to a note’s location.
6. Use the trash button to remove a note.

## 📁 Project files

- `index.html` — main page layout
- `style.css` — styling for map and sidebar
- `js/main.js` — core map and note logic
- `js/helpers.js` — date formatting, icon selection, and status labels
- `js/ui.js` — UI selectors and Leaflet marker icons
- `images/` — custom pin icons for each note type

## ⚙️ Setup

1. Open `index.html` in your browser.
2. Or use a local server such as Live Server in VS Code.
3. Allow location access when prompted.

## 💡 Notes

- Notes are saved in the browser, so they remain until `localStorage` is cleared.
- `demo.gif` is a placeholder — add your own GIF or update the image path.

## 📜 License

MIT License
