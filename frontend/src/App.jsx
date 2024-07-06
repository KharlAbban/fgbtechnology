import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { AboutUsPage, CareersPage, ConsultationsPage, ContactUsPage, ErrorPage, HomePage, InternetPage, LayoutPage, ProductsPage } from "./pages";
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
        element: <ContactUsPage />,
        action: homePageAction
      },
      {
        path: "/products",
        element: <ProductsPage />
      },
      {
        path: "/consultancy",
        element: <ConsultationsPage />
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
