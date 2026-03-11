import { createBrowserRouter } from "react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./components/Layout";

const Home = lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));
const Projects = lazy(() => import("./pages/Projects").then(m => ({ default: m.Projects })));
const About = lazy(() => import("./pages/About").then(m => ({ default: m.About })));
const Playground = lazy(() => import("./pages/Playground").then(m => ({ default: m.Playground })));
const Connection = lazy(() => import("./pages/Connection").then(m => ({ default: m.Connection })));
const Pitch = lazy(() => import("./pages/Pitch").then(m => ({ default: m.Pitch })));
const NotFound = lazy(() => import("./pages/NotFound").then(m => ({ default: m.NotFound })));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, element: <Suspense fallback={< div className="min-h-screen flex items-center justify-center" > Loading...</div>}><Home /> </Suspense> },
      { path: "projects", element: <Suspense fallback={< div className="min-h-screen flex items-center justify-center" > Loading...</div>}><Projects /> </Suspense> },
      {
        path: "about", element: <Suspense fallback={<div className="min-h-screen flex items-center justify-center" > Loading...</div>}><About /> </Suspense>
      },
      {
        path: "playground", element: <Suspense fallback={<div className="min-h-screen flex items-center justify-center" > Loading...</div>}><Playground /> </Suspense>
      },
      {
        path: "connection", element: <Suspense fallback={<div className="min-h-screen flex items-center justify-center" > Loading...</div>}><Connection /> </Suspense>
      },
      {
        path: "pitch", element: <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}><Pitch /></Suspense>
      },
      {
        path: "*", element: <Suspense fallback={<div className="min-h-screen flex items-center justify-center" > Loading...</div>}><NotFound /> </Suspense>
      },
    ],
  },
]);
