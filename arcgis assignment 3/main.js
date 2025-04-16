import { Map, SceneView, Legend } from "https://js.arcgis.com/4.32/@esri/core.js";
import { povLayer, povLayer1, districtBoundaryLayer } from "./layers.js";

const map = new Map({
  basemap: "topo-vector",
  layers: [povLayer, povLayer1, districtBoundaryLayer]
});

const view = new SceneView({
  container: "viewDiv",
  map: map,
  camera: {
    position: { latitude: 20.6, longitude: 79, z: 1534560 },
    tilt: 45,
    heading: 10
  }
});

const legend = new Legend({ view });
view.ui.add(legend, "bottom-right");