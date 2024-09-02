import React, { Component } from "react";

export default function ScaleFormula(props) {
  return (
    <span class="math">
      <math>
        <mrow is="true">
          <mi is="true">α</mi>
        </mrow>
        <mo linebreak="badbreak" linebreakstyle="after" is="true">
          =
        </mo>
        <mrow is="true">
          <mfrac is="true">
            <mrow is="true">
              <mi is="true">μ</mi>
            </mrow>
            <mrow is="true">
              <mspace width="0.2em" is="true"></mspace>
              <mi mathvariant="normal" is="true">
                Γ
              </mi>
              <mrow is="true">
                <mo stretchy="true" is="true">
                  (
                </mo>
                <mn is="true">1</mn>
                <mo linebreak="badbreak" linebreakstyle="after" is="true">
                  +
                </mo>
                <mfrac is="true">
                  <mrow is="true">
                    <mn is="true">1</mn>
                  </mrow>
                  <mrow is="true">
                    <mi is="true">β</mi>
                  </mrow>
                </mfrac>
                <mo stretchy="true" is="true">
                  )
                </mo>
              </mrow>
              <mo is="true">,</mo>
            </mrow>
          </mfrac>
        </mrow>
      </math>
    </span>
  );
}
