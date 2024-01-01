import { Typography } from "@mui/material";
import FollowTheSignsOutlinedIcon from "@mui/icons-material/FollowTheSignsOutlined";
export default function Footer() {
  return (
    <Typography
      variant="button"
      textAlign="center"
      display="block"
      pt={2}
      sx={{borderTop:"1px dotted #000"}}
    >
      Created By
      <a href="https://github.com/Mahdi-Falahati" target="_blank">
        <FollowTheSignsOutlinedIcon sx={{ margin: "0px 5px" }} />
        Mahdi-Falahati
      </a>
    </Typography>
  );
}
