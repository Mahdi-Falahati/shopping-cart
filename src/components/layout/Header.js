import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "../templates/layout.module.css";
import { useSelector } from "react-redux";

export default function Header() {
  const count = useSelector((state) => state.selectProducts.counter);

  return (
    <header className={styles.header}>
      <Stack
        mx={4}
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
      >
        <Typography variant="h5" fontWeight="bold" color="primary">
          <Link to={`/`} style={{ textDecoration: "none", color: "blue" }}>
            Store
          </Link>
        </Typography>
        <Link to="/cart">
          <Badge badgeContent={count} color="warning">
            <ShoppingCartOutlinedIcon fontSize="large" />
          </Badge>
        </Link>
      </Stack>
    </header>
  );
}
