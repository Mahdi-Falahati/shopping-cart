import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Box, IconButton, Stack } from "@mui/material";
import { useState } from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';

export default function ProductCard(props) {
  const { id, title, image, price } = props;
  const [count, setCount] = useState(0);

  const addProductHandler = () => {
    setCount((prev) => prev + 1);
  };

  const deleteProductHandler = () => {
    setCount((prev) => prev - 1);
  };

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
          flexWrap: "nowrap",
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
            minWidth: "90px",
            textAlign: "center",
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
        <Link to={`/${id}`} style={{ color: "blue", textDecoration: "none" }}>
          Details
        </Link>
        {!count ? (
          <Button
            size="small"
            variant="contained"
            startIcon={<AddShoppingCartOutlinedIcon />}
            onClick={addProductHandler}
          >
            Add to cart
          </Button>
        ) : (
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            {count <= 1 ? (
              <IconButton
                onClick={deleteProductHandler}
                aria-label="delete"
                color="warning"
              >
                <DeleteForeverOutlinedIcon fontSize="inherit" />
              </IconButton>
            ) : (
              <IconButton
                onClick={deleteProductHandler}
                aria-label="delete"
                color="warning"
              >
                <IndeterminateCheckBoxOutlinedIcon fontSize="inherit" />
              </IconButton>
            )}
            <Typography fontWeight="bold">{count}</Typography>
            <IconButton
              onClick={addProductHandler}
              aria-label="add"
              color="success"
            >
              <ControlPointOutlinedIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        )}
      </CardActions>
    </Card>
  );
}
