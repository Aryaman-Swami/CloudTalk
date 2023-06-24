import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LoginComponent from './components/login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <LoginComponent />
//   </React.StrictMode>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginComponent />,
  },
  {
    path: "/home/:userId",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
