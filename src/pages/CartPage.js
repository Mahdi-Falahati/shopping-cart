import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServicesOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import shopingcart from "../assets/shopingcart.svg";
import { Link } from "react-router-dom";
import ProductCard from "../components/modules/ProductCard";
import { clearDataSelected } from "../features/ProductSlice";

export default function CartPage() {
  const products = useSelector((state) => state.products.value);
  const dispatch = useDispatch();
  let selected = [];
  products.forEach((i) => {
    if (i.buy) {
      selected.push(i);
    }
  });

  let totalPrice = 0;
  for (const item of selected) {
    totalPrice += item.price * item.count;
  }

  const clearProductHandler = () => {
    dispatch(clearDataSelected());
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: "81vh" }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid
          item
          xs={11}
          mt={4}
          sm={7}
          display="flex"
          justifyContent="space-around"
          flexDirection="row"
          flexWrap="wrap"
          sx={{ height: "75vh", overflow: "auto" }}
        >
          {selected.length > 0 ? (
            selected.map((item) => <ProductCard key={item.id} {...item} />)
          ) : (
            <Stack justifyContent="center" alignItems="center">
              <img
                src={shopingcart}
                style={{ height: "200px" }}
                alt="shoping cart"
              />
              <Typography variant="h6">
                Your Cart is Currently Empty!
              </Typography>
              <Link to="/" style={{ marginTop: "20px" }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ width: "260px" }}
                >
                  Back to Store
                </Button>
              </Link>
            </Stack>
          )}
        </Grid>
        <Grid item xs={11} mt={4} sm={4} md={3}>
          <Typography color="primary" variant="h6">
            Total Products: {selected.length}
          </Typography>
          <Typography color="primary" variant="h6">
            Total Price: {totalPrice.toFixed(3)} $
          </Typography>
          <Stack
            mt={2}
            flexWrap="wrap"
            flexDirection="row"
            justifyContent="space-around"
          >
            <Button
              sx={{ margin: "10px 0px" }}
              variant="contained"
              color="warning"
              onClick={clearProductHandler}
              startIcon={<CleaningServicesOutlinedIcon />}
            >
              Clear All
            </Button>
            <Button
              sx={{ margin: "10px 0px" }}
              color="success"
              onClick={clearProductHandler}
              variant="contained"
              endIcon={<ShoppingCartCheckoutOutlinedIcon />}
            >
              Checkout
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
