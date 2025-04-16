export const povertyRenderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude"
        }
      ]
    },
    visualVariables: [
      {
        type: "size",
        field: "popsc23",
        stops: [
          { value: 1000, size: 10000, label: "1,000" },
          { value: 6621033, size: 300000, label: ">150,000" }
        ]
      },
      {
        type: "color",
        field: "popsc23",
        normalizationField: "poptot23",
        legendOptions: {
          title: "% population with income below poverty level"
        },
        stops: [
          { value: 0.1, color: "#FFFCD4", label: "<15%" },
          { value: 0.35, color: [153, 83, 41], label: ">35%" }
        ]
      }
    ]
  };
  
  export const expenditureRenderer = {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: { primitive: "cylinder" },
          material: { color: [255, 0, 0, 0.8] },
          width: 20000,
          height: {
            field: "y202122be",
            valueUnit: "meters",
            stops: [
              { value: 100, size: 400000, label: "1,00" },
              { value: 144540, size: 500000, label: ">100,000" }
            ]
          }
        },
        {
          type: "object",
          resource: { primitive: "cylinder" },
          material: { color: [255, 255, 0, 0.8] },
          width: 20000,
          height: {
            field: "y202122be_1",
            valueUnit: "meters",
            stops: [
              { value: 100, size: 400000, label: "1,00" },
              { value: 144540, size: 500000, label: ">100,000" }
            ]
          }
        }
      ]
    },
    visualVariables: [
      {
        type: "size",
        field: "y202122be",
        legendOptions: { title: "Expenditure" },
        valueUnit: "meters",
        axis: "height"
      }
    ]
  };