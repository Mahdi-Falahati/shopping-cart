import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from './layout.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Stack mx={4} alignItems="center" justifyContent="space-between" flexDirection="row">
        <Typography variant="h4" fontWeight="bold" color="primary">
          Store
        </Typography>
        <Link to="/cart">
          <Badge badgeContent={4} color="warning">
            <ShoppingCartOutlinedIcon fontSize="large" />
          </Badge>
        </Link>
      </Stack>
    </header>
  );
}
