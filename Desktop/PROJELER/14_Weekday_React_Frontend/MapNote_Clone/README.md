# MapNote Clone

A simple location-based notes app built with plain JavaScript and Leaflet.

## Overview

MapNote Clone lets users place notes on an interactive map, save them in the browser, and revisit them later. Notes include a title, date, and category (Visit, Parking, Home, or Job).

## Features

- Interactive Leaflet map
- Click map to add a new note
- Save notes in `localStorage`
- Custom icons for note categories
- Fly to note location from the list
- Delete notes with confirmation
- Responsive sidebar UI

## Demo

![MapNote Demo](./demo.gif)

> Replace `./demo.gif` with your actual animated GIF file.

## How it works

1. The app requests geolocation and centers the map on the current location.
2. Click anywhere on the map to open the note form.
3. Enter a title, date, and category.
4. Notes are displayed in the sidebar and on the map.
5. Clicking the airplane icon flies the map to the note.
6. Clicking the trash icon deletes the note.

## Files

- `index.html` — main page structure
- `style.css` — app styling
- `js/main.js` — map logic, note handling, and UI updates
- `js/helpers.js` — helper functions for icons, status labels, and date formatting
- `js/ui.js` — UI element references and Leaflet icon definitions
- `images/` — custom marker icons

## Setup

1. Open `index.html` in your browser.
2. Or use a local server like Live Server in VS Code.
3. Allow location access if prompted.

## Notes

- Data is saved locally in the browser, so notes persist until localStorage is cleared.
- The demo GIF path is a placeholder: add your own `demo.gif` file or update the image link.

## License

MIT License
