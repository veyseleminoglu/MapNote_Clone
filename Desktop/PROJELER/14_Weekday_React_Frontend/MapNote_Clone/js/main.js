import {ui, personIcon} from "./ui.js"
import {getNoteIcon, formatDate, getStatus, statusObj} from "./helpers.js"

//Global Degiskenler
const DB_NOTE = "notes"

const STATE = {
    map: null,
    layer: null,
    clickedCoords: null,
    notes: JSON.parse(localStorage.getItem(DB_NOTE) || '[]')
}

//konuma gore harita
window.navigator.geolocation.getCurrentPosition(
    (e) => loadMap([e.coords.latitude, e.coords.longitude]),
    () => loadMap([41.0158089,28.6395352])
)

//harita yukleme
function loadMap(position) {
    
    console.log(position)
    //harita kurulumu
    STATE.map = L.map("map", { zoomControl: false }).setView(position, 11);

    //katman ekle
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(STATE.map);

    //haritaya arayuz ekleme
     L.control.zoom({ position: "bottomright" }).addTo(STATE.map);

    //hariya uzerinden katman yap
    STATE.layer = L.layerGroup().addTo(STATE.map);

    //ekrana merker bas
    const marker = L.marker(position, { icon: personIcon }).addTo(STATE.map)

    //marker a popup ekleme
    marker.bindPopup("<b>buradayi</b>")

    //tiklanma yakala
    STATE.map.on("click",onMapClick)

    //notlari ekle guncelle
    renderNoteCards(STATE.notes)
    renderMarker(STATE.notes)
}

function onMapClick(e) {
    console.log(e)
    //son tiklamanin konumu al
    STATE.clickedCoords = [e.latlng.lat, e.latlng.lng]

    //formu aktif et
    ui.aside.classList.add("add")

    //title degistir
    ui.asideTitle.textContent = "Yeni Not"

}

//kapat butonuna tiklanildiginda
ui.cancelButton.addEventListener("click",()=>{

    ui.aside.classList.remove("add")

    ui.asideTitle.textContent = "Notlar"
})

//ok butonuna tiklanirsa
ui.arrow.addEventListener("click",()=>{
    ui.aside.classList.toggle("hide")
})

//ekle tiklanirsa
ui.form.addEventListener("submit",(e) =>{
    e.preventDefault()

    //form alanlarindaki degerleri al
    const title = e.target[0].value
    const date = e.target[1].value
    const status = e.target[2].value

    if (!title || !date || !status) {
        return alert("alanlar bos olamaz")
    }

    const newNote = {
        id: new Date().getTime(),
        title,
        date,
        status,
        coords: STATE.clickedCoords
    }

    //note dizisine ekle
    STATE.notes.push(newNote)

    //localstorage yaz
    localStorage.setItem(DB_NOTE, JSON.stringify(STATE.notes))

    //ekleme modunu kapat
    ui.aside.classList.remove("add")
    ui.asideTitle.textContent = "Notlar"

    //noktalari ekrana bas
    renderNoteCards(STATE.notes)
    renderMarker(STATE.notes)

    ui.form.reset()
})

//not cartlari ekrana bas
function renderNoteCards(notes) {
    const notesHtml = notes
    .map(
      (note) => `
        <li>
          <div>
            <h3>${note.title}</h3>
            <p>${formatDate(note.date)}</p>
            <p class="status">${getStatus(note.status)}</p>
          </div>
          <div class="icons">
            <i data-id="${note.id}" id="fly-btn" class="bi bi-airplane-fill"></i>
            <i data-id="${note.id}" id="trash-btn" class="bi bi-trash"></i>
          </div>
        </li> `
    )
    .join(" ")

    console.log(notesHtml)
    ui.noteList.innerHTML = notesHtml

    document.querySelectorAll("#trash-btn").forEach((btn) =>{
        const id = +btn.dataset.id

        btn.addEventListener("click",()=>deleteNote(id))
    })

    document.querySelectorAll("#fly-btn").forEach((btn)=>{
        const idm = +btn.dataset.id

        btn.addEventListener("click",()=> flyToNote(idm))
    })

}

//yakinlastir
const flyToNote = (id) =>{
    const note = STATE.notes.find((note)=> note.id === id)

    STATE.map.flyTo(note.coords, 15)
}

//note sil
const deleteNote = (id) =>{

    if (!confirm("silmek istedigne emin misin?")) { return }

    STATE.notes = STATE.notes.filter((note) => note.id != id)

    localStorage.setItem(DB_NOTE,JSON.stringify(STATE.notes))

    //arayuzu guncelle
    renderMarker(STATE.notes)
    renderNoteCards(STATE.notes)

}

//marker lari getir
function renderMarker(notes) {
    
    STATE.layer.clearLayers()

    notes.forEach((note)=>{

        const icon = getNoteIcon(note.status)

        const marker = L.marker(note.coords, { icon }).addTo(STATE.layer);

        marker.bindPopup(`<p class="popup">${note.title}<p>`)

    })
}