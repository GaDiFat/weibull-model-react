import React, { Component } from "react";

export default function WeibullFormula(props) {
  return (
    <span class="math">
      <math>
        <mrow is="true">
          <mtable columnalign="left" is="true">
            <mtr columnalign="left" is="true">
              <mtd columnalign="left" is="true">
                <mrow is="true">
                  <mtext is="true">f</mtext>
                  <mrow is="true">
                    <mo stretchy="true" is="true">
                      (
                    </mo>
                    <mrow is="true">
                      <mtext is="true">t</mtext>
                      <mo is="true">;</mo>
                      <mi is="true">α</mi>
                      <mo is="true">,</mo>
                      <mi is="true">β</mi>
                    </mrow>
                    <mo stretchy="true" is="true">
                      )
                    </mo>
                  </mrow>
                  <mo is="true">=</mo>
                  <mrow is="true">
                    <mo stretchy="true" is="true">
                      (
                    </mo>
                    <mrow is="true">
                      <mrow is="true">
                        <mi is="true">β</mi>
                        <mo is="true">/</mo>
                        <mi is="true">α</mi>
                      </mrow>
                    </mrow>
                    <mo stretchy="true" is="true">
                      )
                    </mo>
                  </mrow>
                  <msup is="true">
                    <mrow is="true">
                      <mrow is="true">
                        <mo stretchy="true" is="true">
                          (
                        </mo>
                        <mrow is="true">
                          <mrow is="true">
                            <mtext is="true">t</mtext>
                            <mo is="true">/</mo>
                            <mi is="true">α</mi>
                          </mrow>
                        </mrow>
                        <mo stretchy="true" is="true">
                          )
                        </mo>
                      </mrow>
                    </mrow>
                    <mrow is="true">
                      <mi is="true">β</mi>
                      <mo is="true">−</mo>
                      <mn is="true">1</mn>
                    </mrow>
                  </msup>
                  <mspace width="0.25em" is="true"></mspace>
                  <mtext is="true">exp</mtext>
                  <mrow is="true">
                    <mo stretchy="true" is="true">
                      [
                    </mo>
                    <mrow is="true">
                      <mo is="true">−</mo>
                      <msup is="true">
                        <mrow is="true">
                          <mrow is="true">
                            <mo stretchy="true" is="true">
                              (
                            </mo>
                            <mrow is="true">
                              <mrow is="true">
                                <mtext is="true">t</mtext>
                                <mo is="true">/</mo>
                                <mi is="true">α</mi>
                              </mrow>
                            </mrow>
                            <mo stretchy="true" is="true">
                              )
                            </mo>
                          </mrow>
                        </mrow>
                        <mi is="true">β</mi>
                      </msup>
                    </mrow>
                    <mo stretchy="true" is="true">
                      ]
                    </mo>
                  </mrow>
                </mrow>
              </mtd>
            </mtr>
            <mtr columnalign="left" is="true">
              <mtd columnalign="left" is="true">
                <mrow is="true">
                  <mspace width="1em" is="true"></mspace>
                  <mspace width="1em" is="true"></mspace>
                  <mspace width="1em" is="true"></mspace>
                  <mspace width="0.25em" is="true"></mspace>
                  <mspace width="0.25em" is="true"></mspace>
                  <mspace width="0.25em" is="true"></mspace>
                  <mtext is="true">t</mtext>
                  <mo is="true">≥</mo>
                  <mn is="true">0</mn>
                  <mo is="true">;</mo>
                  <mi is="true">α</mi>
                  <mo is="true">,</mo>
                  <mi is="true">β</mi>
                  <mo is="true">&gt;</mo>
                  <mn is="true">0</mn>
                  <mo is="true">.</mo>
                </mrow>
              </mtd>
            </mtr>
          </mtable>
        </mrow>
      </math>
    </span>
  );
}
