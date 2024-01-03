import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function Details() {
  let location = useLocation();
  const id = location.pathname.replace("/", "");
  const products = useSelector((state) => state.products.value);

  const { price, image, title, description, category } = products?.filter(
    (product) => product.id === +id
  )[0];

  return (
    <Box sx={{ flexGrow: 1,minHeight:"81vh" }} my={4}>
      <Grid container spacing={8} justifyContent="center" alignItems="center">
        <Grid item xs={11} sm={3}>
          <Box
            sx={{
              backgroundImage: `url(${image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "400px",
            }}
          />
        </Grid>
        <Grid item xs={11} sm={5}>
          <Typography variant="h6" color="primary" gutterBottom>
            {title}
          </Typography>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Extra Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{description}</Typography>
            </AccordionDetails>
          </Accordion>
          <Typography variant="body1" gutterBottom>
            <Typography
              mt={2}
              mr={2}
              variant="h6"
              display="inline-block"
              color="orangered"
            >
              category :
            </Typography>
            {category}
          </Typography>
          <Typography
            variant="button"
            color="#fff"
            sx={{
              background: "#22c55e",
              padding: "3px 10px",
              minWidth: "90px",
              textAlign: "center",
              borderRadius: "10px",
            }}
          >
            {price} $
          </Typography>
          <Link to="/" style={{ marginTop: "20px", display: "block" }}>
            <Button variant="contained" size="medium" fullWidth={true}>
              Back to Store
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
