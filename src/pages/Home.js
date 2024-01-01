import { Container, CssBaseline, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import ProductCard from "../components/modules/ProductCard";

export default function Home() {
  const products = useSelector((state) => state.products.value);

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
          {products?.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </Stack>
      </Container>
    </>
  );
}
