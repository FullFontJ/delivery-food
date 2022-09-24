import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Menu } from "./Menu";
import { Home } from "./Home";
import { Work } from "./Work";
import { DisheMenu } from "./DisheMenu";
import { App } from "./App";
import { Testimonial } from "./Testimonial";
import { Contact } from "./Contact";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Menu />
    <Home />
    <Work />
    <DisheMenu />
    <App />
    <Testimonial />
    <Contact />
  </React.StrictMode>
);
