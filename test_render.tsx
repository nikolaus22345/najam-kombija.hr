import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./src/App";

try {
  const html = renderToString(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
  console.log("SUCCESS length:", html.length);
} catch (e) {
  console.error("APP CRASH:", e);
}
