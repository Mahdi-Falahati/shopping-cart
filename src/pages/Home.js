import { Container, CssBaseline, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/modules/ProductCard";
import CricleLoading from "../components/modules/CricleLoading";
import { Loading } from "../features/ProductSlice";

export default function Home() {
  const products = useSelector((state) => state.products.value);
  const loading = useSelector((state) => state.products.isLoading);
  const dispatch = useDispatch()

  setTimeout(() => {
    dispatch(Loading());
  }, 5000);

  return (
    <>
      <CssBaseline />
      <Container>
        <Stack
          my={5}
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          {loading && <CricleLoading />}
          {!loading &&
            products?.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </Stack>
      </Container>
    </>
  );
}
