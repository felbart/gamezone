import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ThemeContextProvider from './hooks/useTheme.jsx'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import Destaques from './components/Destaques.jsx'
import Ofertas from './pages/Ofertas.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/destaques",
        element: <Destaques />
      },  
      {
        path: "/blog",
        element: <Blog />
      },  
      {
        path: "/ofertas",
        element: <Ofertas />
      },  
      {
        path: "/contato",
        element: <Contact />
      },  
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
    <RouterProvider router={router}/>
    </ThemeContextProvider>
  </StrictMode>,
)
