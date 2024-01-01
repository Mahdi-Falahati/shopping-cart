import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

export default function ProductCard(props) {
  const {id,title,image,price}=props;
  return (
    <Card id={id} sx={{ maxWidth: 240, padding:'5px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={image}
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
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
        <Link to={""} style={{ color: "blue" }}>
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
