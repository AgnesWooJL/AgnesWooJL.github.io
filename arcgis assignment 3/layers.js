import { povertyRenderer } from "./renderers.js";
import { expenditureRenderer } from "./renderers.js";

export const povLayer = new FeatureLayer({
  url: "https://livingatlas.esri.in/server/rest/services/India/DT_Rural_Population_2021_23/FeatureServer",
  renderer: povertyRenderer,
  title: "Population living in poverty by District",
  outFields: ["*"],
  popupTemplate: {
    title: "{name}, {state}",
    content: "{popsc23} of {poptot23} people live below the poverty line.",
    fieldInfos: [
      { fieldName: "popsc23", format: { digitSeparator: true, places: 0 } },
      { fieldName: "poptot23", format: { digitSeparator: true, places: 0 } }
    ]
  }
});

export const povLayer1 = new FeatureLayer({
  url: "https://livingatlas.esri.in/server/rest/services/RBI/ST_Capital_Outlay_SocialSector_Expenditure/MapServer/0",
  renderer: expenditureRenderer,
  title: "Economic Expenditure by State",
  outFields: ["*"],
  popupTemplate: {
    title: "{name}",
    content:
      "Capital expenditure: {y202122be}, Capital Overlay: {y202122be_1}, Social Sector Expenditure: {y202122be_2}",
    fieldInfos: [
      { fieldName: "y202122be", format: { digitSeparator: true, places: 0 } },
      { fieldName: "y202122be_1", format: { digitSeparator: true, places: 0 } },
      { fieldName: "y202122be_2", format: { digitSeparator: true, places: 0 } }
    ]
  }
});

export const districtBoundaryLayer = new FeatureLayer({
  url: "https://livingatlas.esri.in/server/rest/services/RBI/ST_Capital_Outlay_SocialSector_Expenditure/MapServer/0",
  renderer: {
    type: "simple",
    symbol: {
      type: "simple-line",
      color: [0, 0, 0, 1],
      width: 1
    }
  },
  title: "District Boundaries",
  opacity: 0.8
});