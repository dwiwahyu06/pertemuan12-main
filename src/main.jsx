import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Product from './components/Product.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element : <App/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/product",
        element: <Product/>

      }

    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

