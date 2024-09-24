import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import AddBooking from './pages/Bookings/AddBooking';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "bookings",
        children: [
          {
            path: "add-booking",
            element: <AddBooking />
          }
        ]
      }
    ],
  },
]);


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
