import { useSelector } from "react-redux";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServicesOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import shopingcart from "../assets/shopingcart.svg";
import { Link } from "react-router-dom";

export default function CartPage() {
  return (
    <Box sx={{ flexGrow: 1, minHeight: "81vh" }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={11} mt={4} sm={7}>
          <Stack justifyContent="center" alignItems="center">
            <img
              src={shopingcart}
              style={{ height: "200px" }}
              alt="shoping cart"
            />
            <Typography variant="h6">Your Cart is Currently Empty!</Typography>
            <Link to="/" style={{ marginTop: "20px" }}>
              <Button variant="contained" size="large" sx={{ width: "260px" }}>
                Back to Store
              </Button>
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={11} mt={4} sm={4} md={3}>
          <Typography color="primary" variant="h6">
            Total Products: 0
          </Typography>
          <Typography color="primary" variant="h6">
            Total Price: 0 $
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
              startIcon={<CleaningServicesOutlinedIcon />}
            >
              Clear All
            </Button>
            <Button
              sx={{ margin: "10px 0px" }}
              color="success"
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
