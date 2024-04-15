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
import SigninPage from './routes/auth/SigninPage';

// Layout imports
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/signin' element={<SigninPage />} />
      <Route path='/' element={<RootLayout />}>
        <Route index element={<LandingPage />} />
      </Route>
    </>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;