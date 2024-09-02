import React, { Component } from "react";

export default function ShapeFormula(props) {
  return (
    <span class="math">
      <math>
        <mi is="true">β</mi>
        <mo linebreak="badbreak" linebreakstyle="after" is="true">
          =
        </mo>
        <mfrac is="true">
          <mrow is="true"></mrow>
          <mrow is="true"></mrow>
        </mfrac>
        <msup is="true">
          <mrow is="true">
            <mo stretchy="true" is="true">
              (
            </mo>
            <mfrac is="true">
              <mrow is="true">
                <mi is="true">σ</mi>
              </mrow>
              <mrow is="true">
                <mi is="true">μ</mi>
              </mrow>
            </mfrac>
            <mo stretchy="true" is="true">
              )
            </mo>
          </mrow>
          <mrow is="true">
            <mi is="true">-1.086</mi>
          </mrow>
        </msup>
      </math>
    </span>
  );
}
