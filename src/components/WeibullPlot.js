import React, { Component } from "react";
import Plot from "react-plotly.js";

function weib(i, c, k) {
  return (k / c) * (i / c) ** (k - 1) * 2.7182818284 ** -((i / c) ** k);
}

export default function WeibullPlot({ begin, end, c, k }) {
  const a = Array.from(
    { length: parseFloat(end) - parseFloat(begin) },
    (_, i) => i + parseFloat(begin)
  );
  return (
    <div className="plot">
      <Plot
        data={[
          {
            x: a,
            y: a.map((i) => weib(i, c, k)),
            type: "scatter",
          },
        ]}
      />
    </div>
  );
}
