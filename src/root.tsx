import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import TelegramProvider from "./lib/TelegramProvider.tsx";
import HomeScreen from "./screens/home/HomeScreen.tsx";
import WorkoutScreen from "./screens/workout/WorkoutScreen.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/workout",
    element: <WorkoutScreen />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TelegramProvider>
      <RouterProvider router={router} />
    </TelegramProvider>
  </StrictMode>
);
