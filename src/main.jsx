import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx';
import Post from './pages/Post.jsx';
import AllPosts from './pages/AllPosts.jsx';
import './custom.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "allPosts",
      element: <AllPosts />,
    },
    {
      path: "post/:slug",
      element: <Post />,
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
