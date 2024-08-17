const t = L.map("map").setView([56.8321, 13.9394], 13);
async function e() {
    let e = document.getElementById("searchInput").value
      , o = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(e)}`;
    try {
        let e = await fetch(o)
          , n = await e.json();
        if (n && n.length > 0) {
            let e = n[0].lat
              , o = n[0].lon;
            t.setView([e, o], 14),
            L.marker([e, o]).addTo(t).bindPopup("<b>Din sökta plats</b>").openPopup()
        } else
            console.error("Din angivna plats hittades inte...")
    } catch (t) {
        console.error("Ett fel uppstod.", t)
    }
}
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(t),
L.control.locate().addTo(t),
document.getElementById("locationForm").addEventListener("submit", function(t) {
    t.preventDefault(),
    e()
});
//# sourceMappingURL=maps.90b958e3.js.map
