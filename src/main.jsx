import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import SingleGalleryPage from './components/SingleGalleryPage.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/about',
        element: <About />,
      },

      {
        path: '/services',
        element: <Services />,
      },

      {
        path: '/gallery',
        element: <Gallery />,
      },

      {
        path: '/contact',
        element: <Contact />,
      },
     
      {
        path: '/gallery/:id',
        element: <SingleGalleryPage />,
        loader: ({params}) => fetch(`http//localhost:3000/blogs/${params.id}`)
      },


    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
