import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { register } from "swiper/element/bundle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/about/about.jsx";
import Skills from "./components/about/skills.jsx";
import Experience from "./components/resume/Experience.jsx";
import Features from "./components/features/Features.jsx";
import Education from "./components/Education/Education.jsx";
import Book from "./components/Books/Book.jsx";
import Contact from "./components/contact/Contact.jsx";
import Projects from "./components/resume/Projects.jsx";
import Mediacov from "./components/media/media-cov.jsx";
import Certi from "./components/cerificates/Certi.jsx";
import { Certific } from "./components/cerificates/Certific.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "books",
        element: <Book />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
     
      {
        path: "media-coverage",
        element: <Mediacov />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
