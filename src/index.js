import React from "react";
import ReactDOM from "react-dom/client";
import "dotenv/config";
import App from "./App";

const root = document.getElementById("root") || document.createElement("div");
const rootElement = ReactDOM.createRoot(root);

rootElement.render(<App />);
