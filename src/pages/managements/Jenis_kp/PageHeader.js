import { Typography, Button, Grid } from "@mui/material";

function PageHeader() {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Jenis_kp
        </Typography>
        <Typography variant="subtitle2">
          Pengelolaan Daftar Jenis_kp
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
