
// Initialize and add the map
let map;

async function initMap() {
  // The location of Singapore
  const position = { lat: 1.290270, lng: 103.851959 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Singapore
  map = new Map(document.getElementById('map'), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Singapore
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Singapore",
  });
}

initMap();

function displayMap() {
  const mapOptions = {
    center: { lat: 1.290270, lng: 103.851959 },
    zoom: 4
  };
  const mapDiv = document.getElementById('map');
  const map = new google.maps.Map(mapDiv, mapOptions);
  return map;
}

 loader.then(() => {
   console.log('Maps JS API loaded');
   const map = displayMap();
 });
