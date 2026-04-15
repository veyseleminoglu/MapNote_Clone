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

<img width="320" height="240" alt="Kayıt 2026-04-16 001301" src="https://github.com/user-attachments/assets/5767d3dd-2446-4db1-bcb5-1f0464514b90" />

## 🚀 How it works

1. The app requests location and centers the map on the current position.
2. Click a map location to open the note form.
3. Enter a title, date, and choose a category.
4. Notes appear in the sidebar and as markers on the map.
5. Use the airplane button to zoom to a note’s location.
6. Use the trash button to remove a note.
