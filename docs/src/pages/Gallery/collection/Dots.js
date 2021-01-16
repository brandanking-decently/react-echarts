"use strict";

export const Dots = {
  label: "Dots",
  subLabel: "<ScatterChart />",
  id: "dots",
  style: {
    background:
      "linear-gradient(to bottom, rgba(56,248,249,1) -9.1%, rgba(213,141,240,1) 48%, rgba(249,56,152,1) 111.1% )",
    color: "orange",
  },
  code: `
     <ScatterChart
      xAxis={{ show: false }}
      yAxis={{ show: false }}
      data={[
        [10.0, 8.04],
        [8.07, 6.95],
        [13.0, 7.58],
        [9.05, 8.81],
        [11.0, 8.33],
        [14.0, 7.66],
        [13.4, 6.81],
        [10.0, 6.33],
        [14.0, 8.96],
        [12.5, 6.82],
        [9.15, 7.2],
        [11.5, 7.2],
        [3.03, 4.23],
        [12.2, 7.83],
        [2.02, 4.47],
        [1.05, 3.33],
        [4.05, 4.96],
        [6.03, 7.24],
        [12.0, 6.26],
        [12.0, 8.84],
        [7.08, 5.82],
        [5.02, 5.68],
      ]}
    />
  `,
};
