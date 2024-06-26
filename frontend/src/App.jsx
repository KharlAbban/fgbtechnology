import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { AboutUsPage, CareersPage, ConsultationsPage, ContactUsPage, ErrorPage, HomePage, InfrastructurePage, InternetPage, LayoutPage, SoftwarePage, UCPPage } from "./pages";
import { homePageAction } from "./utils/formActions";

const fgbRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePage />,
        action: homePageAction
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
      {
        path: "/careers",
        element: <CareersPage />
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
