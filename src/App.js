import Histogram from "./components/Histogram";
import WeibullFormula from "./components/WeibullFormula";
import ShapeFormula from "./components/ShapeFormula";
import ScaleFormula from "./components/ScaleFormula";
import WeibullPlot from "./components/WeibullPlot";
import { useState } from "react";

function App() {
  const [k, setk] = useState("2");
  const [c, setc] = useState("30");

  return (
    <div className="App">
      <header class="c-header">
        <h1>Weibull Distribution Model</h1>
        <p>
          The following sections provide an example of the application of the
          Weibull distribution model on aircraft engine failure prediction and
          an interactive visualization to generate different Weibull
          distributions.
        </p>
      </header>
      <section class="c-posts">
        <article class="c-post-100">
          <h2>Weibull Model</h2>
          <p>
            The Weibull distribution is widely used in reliability as a model
            for time to failure. It generalizes the exponential model to include
            nonconstant failure rate functions. In particular, it encompasses
            both increasing and decreasing failure rate functions and has been
            used successfully to describe both initial burning failures as well
            as failures attributed to wearout. The two-parameter Weibull
            distribution is given by:
          </p>
          <WeibullFormula />
          <p>
            The parameter β controls the shape of the distribution and is called
            the shape parameter, while α is known as the scale parameter.
          </p>
          <h2>Scale Parameter</h2>
          <p>
            The scale parameter α is the Weibull factor, known as characteristic
            life, is related to the mean-time-to failure. In Weibull analysis α
            is known as the t at which 63.2% of systems or components under
            analysis will have failed.
          </p>
          <ScaleFormula />
          <h2>Shape Parameter</h2>
          <p>
            The shape parameter β is the Weibull shape factor. It specifies the
            shape of a Weibull distribution and takes on a value between 1 and
            3. A small value of β signifies very variable time to failure while
            a high value of β characterizes constant values for time to failure.
          </p>
          <ShapeFormula />
          <h2>Aircraft Engine Failure Analysis Application</h2>
          <p>
            An application example would be a batch of aircraft engines, in this
            example instead of using the time at which the engine fails, an
            alternative indicator would be the number of cycles that it takes an
            engine to fail. The Weibull distribution of this dataset is shown
            below. The scale parameter α resulted in a value of 224, so we can
            predict that 63.2% of the engines will fail after 224 cycles.
          </p>
        </article>
        <article class="c-posts__item">
          <h2>Cycles to Failure Histogram</h2>
          <Histogram />
        </article>
        <article class="c-posts__item">
          <h2>Weibull Distribution</h2>
          <WeibullPlot begin="120" end="369" c="224.4088" k="5.1125" />
        </article>
        <h2 class="c-post-100">Interactive Visualization</h2>
        <p class="c-post-100">
          Here is an interactive visualization so that you can build a feeling
          on the representation of different α and β values within the
          probability distribution.{" "}
        </p>
        <form class="form-split-bill">
          <label>β value: </label>
          <input
            type="number"
            placeholder="2"
            onChange={(e) => setk(e.target.value)}
          />
          <label>α value: </label>
          <input
            type="number"
            placeholder="30"
            onChange={(e) => setc(e.target.value)}
          />
        </form>
        <WeibullPlot begin="0" end="100" c={c} k={k} />
      </section>

      <footer class="c-footer">
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/garzafatima/">Fatima Garza</a>
      </footer>
    </div>
  );
}

export default App;
