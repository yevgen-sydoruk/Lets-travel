var platform = new H.service.Platform({
  apikey: "bUekHMgiW8iBkqX3GjfGVgIthy01fwRXzqzL2nK1QYs",
});

var defaultLayers = platform.createDefaultLayers();
var service = platform.getSearchService();

let lendmark = document.querySelector(".main-heading").textContent;
service.geocode(
  {
    q: lendmark,
  },
  (result) => {
    var map = new H.Map(document.querySelector(".map"), defaultLayers.vector.normal.map, {
      zoom: 15,
      center: result.items[0].position,
    });
    map.addObject(new H.map.Marker(result.items[0].position));
    var ui = H.ui.UI.createDefault(map, defaultLayers);
  },
  alert
);
