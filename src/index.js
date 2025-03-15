import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Projects } from './components/Projects'; // ✅ Ensure correct import

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Projects />} /> {/* ✅ No leading "/" */}
      <Route path= 'projects' element={<Projects />} /> {/* ✅ No leading "/" */}
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

reportWebVitals();