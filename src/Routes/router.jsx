import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import AppliedJobs from "../Pages/AppliedJobs";
import Blog from "../Pages/Blog";
import ErrorPage from "../Pages/ErrorPage";
import JobDetails from "../components/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: async () => await fetch("../jobs.json"),
      },
    ],
  },
]);

export default router;
