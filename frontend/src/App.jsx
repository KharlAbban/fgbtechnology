import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { AboutUsPage, ConsultationsPage, ContactUsPage, ErrorPage, HomePage, InfrastructurePage, InternetPage, LayoutPage, SoftwarePage, UCPPage } from "./pages";

const fgbRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePage />
      },
      {
        path: "/about",
        element: <AboutUsPage />
      },
      {
        path: "/contact",
        element: <ContactUsPage />
      },
      {
        path: "/internet",
        element: <InternetPage />
      },
      {
        path: "/infrastructure",
        element: <InfrastructurePage />
      },
      {
        path: "/consultation",
        element: <ConsultationsPage />
      },
      {
        path: "/software",
        element: <SoftwarePage />
      },
      {
        path: "/ucp",
        element: <UCPPage />
      },
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={fgbRouter} />
  )
}

export default App
