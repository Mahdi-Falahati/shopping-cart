import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import { useEffect } from "react";
import Api from "./utils/Api";
import { useDispatch } from "react-redux";
import { fetchingData } from "./features/ProductSlice";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
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
