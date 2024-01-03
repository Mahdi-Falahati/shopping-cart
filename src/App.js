import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./components/templates/RootLayout";
import Home from "./pages/Home";
import { useEffect } from "react";
import Api from "./utils/Api";
import { useDispatch } from "react-redux";
import { fetchingData } from "./features/ProductSlice";
import Details from "./pages/Details";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path=":id" element={<Details />} />
      <Route path="/cart" element={<CartPage />} />
    </Route>
  )
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = async () => {
      const response = await Api(
        "https://api-react-shopping-cart.vercel.app/data"
      );
      dispatch(fetchingData(response.data));
    };
    data();
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
