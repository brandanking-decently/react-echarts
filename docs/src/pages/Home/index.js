import "./index.css";
import { NavLink } from "react-router-dom";
import background from "../../../../public/img/logo.png";

export const Home = {
  label: "Home",
  route: "",
  order: 0,
  exact: true,
  component: (props) => {
    return (
      <div className={"react_echarts__home"}>
        <div className={"react_echarts__home__description"}>
          <span>
            <span
              style={{
                fontWeight: "bold",
                color: "var(--font-color)",
              }}
            >
              React ECharts
            </span>{" "}
            is a simple and declarative set of React components built on top of
            ECharts
          </span>

          <p>
            <a href="https://echarts.apache.org/en/index.html">ECharts</a> is a
            pure Javascript chart library, providing intuitive, vivid,
            interactive, highly personalized and customized data visualization
            charts.
          </p>

          <p>
            react-echarts is an abstraction library built with React on top of
            ECharts. It exposes a set of components for developers that can be
            combined to set up amazing charts in their web pages.
          </p>

          <p>Main principles of React ECharts are:</p>

          <ol>
            <li>
              <strong>Simple:</strong> React ECharts makes it easy to generate
              ECharts components by wrapping the code required to render the
              entire chart.
            </li>
            <li>
              <strong>Customizable:</strong> A simple options-structure allows
              for deep customization.
            </li>
            <li>
              <strong>Declarative:</strong> Purely presentational components. In
              most cases, charts look and behave exactly as you need without
              modifications.
            </li>
          </ol>
        </div>
        <div className={"react_echarts__home__cards"}>
          <NavLink to={"/gallery"}>Gallery</NavLink>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    );
  },
};
