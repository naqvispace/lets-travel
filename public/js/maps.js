let platform = new H.service.Platform({
  apikey: "OyCZmBkerb8DsYCGZr-IH_p43U4i3O8SkYMJaUFA7tM",
});

function landmarkGeocode() {
  let title = document.querySelector("h1").textContent;
  let geocoder = platform.getGeocodingService(),
    landmarkGeocodingParameters = {
      searchtext: title,
      jsonattributes: 1,
    };

  geocoder.search(landmarkGeocodingParameters, showMap, (e) => console.log(e));
}

function showMap(result) {
  let location = result.response.view[0].result[0];
  // Obtain the default map types from the platform object:
  let defaultLayers = platform.createDefaultLayers();

  // Instantiate (and display) a map object:
  let map = new H.Map(
    document.querySelector(".map"),
    defaultLayers.vector.normal.map,
    {
      zoom: 15,
      center: { lat: location.latitude, lng: location.longitude },
    }
  );

  let ui = H.ui.UI.createDefault(map, defaultLayers);
}

landmarkGeocode();
