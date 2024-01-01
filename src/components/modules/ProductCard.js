import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Box } from "@mui/material";

export default function ProductCard(props) {
  const { id, title, image, price } = props;
  return (
    <Card id={id} sx={{ maxWidth: 250, padding: "5px", margin: "15px 0px" }}>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "200px",
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap:"nowrap"
        }}
      >
        <Typography
          sx={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
          gutterBottom
          variant="h5"
          component="p"
        >
          {title}
        </Typography>
        <Typography
          ml={2}
          variant="button"
          color="#fff"
          sx={{
            background: "#22c55e",
            padding: "3px 10px",
            minWidth:"90px",
            textAlign:"center",
            borderRadius: "10px",
          }}
        >
          {price} $
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link to={`/${id}`} style={{ color: "blue" }}>
          Details
        </Link>
        <Button
          size="small"
          variant="contained"
          startIcon={<AddShoppingCartOutlinedIcon />}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
