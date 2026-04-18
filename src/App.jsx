import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorMessage from "./components/ErrorMessage";
import RestaurantMenu from "./components/RestaurantMenu";
// making the App container for the app to start
const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

// we will implement the router configuration here
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorMessage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// JSX - It is not HTML in JS , it a syntax extension to JS which looks similar to HTML
root.render(<RouterProvider router={appRouter} />);
// // This {} object in the createElement function is for attributes like class, id, style etc.
// const heading = React.createElement('h1' , { id: "heading"} , "Hello world from react!");
// // create a root so that the react code can be injected into the div with id 'root' and also so that all the code and elements can be easily rendered by react
// const root = ReactDOM.createRoot(document.getElementById('root'));
// // Now render the heading in the root id div
// root.render(heading);
