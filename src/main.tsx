import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "decathlon-crm", element: <div>CRM</div> },
  {
    path: "decathlon-sample-return",
    element: <div>SAMPLE RETURN MANAGEMENT</div>,
  },
  {
    path: "decathlon-quality",
    element: <div>QUALITY MANAGEMENT</div>,
  },
]);

// biome-ignore lint/style/noNonNullAssertion: Default React behaviour
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="flex min-h-screen w-screen justify-center text-stone-800 bg-stone-50">
      <div className="flex w-full h-full max-w-4xl flex-col gap-8 p-8">
        <RouterProvider router={router} />
      </div>
    </main>
  </StrictMode>,
);
