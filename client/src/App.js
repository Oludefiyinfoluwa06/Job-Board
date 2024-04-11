import React from "react";

// React router dom imports
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

// Routes imports
import LandingPage from "./routes/LandingPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<LandingPage />} />
    </>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;