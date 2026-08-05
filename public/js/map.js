mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: listing.geometry.coordinates,
  zoom: 11,
});

// Create custom marker
const markerElement = document.createElement("div");
markerElement.className = "location-marker";

markerElement.innerHTML = `
    <i class="fa-solid fa-location-dot"></i>
    <span>₹${listing.price.toLocaleString("en-IN")}</span>
`;

new mapboxgl.Marker({
    element: markerElement,
    anchor: "bottom"
})
.setLngLat(listing.geometry.coordinates)
.addTo(map);