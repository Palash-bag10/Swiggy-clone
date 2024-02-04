import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Body */}
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
