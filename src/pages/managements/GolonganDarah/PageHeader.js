import { Typography, Button, Grid } from "@mui/material";

function PageHeader() {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Golongan_darah
        </Typography>
        <Typography variant="subtitle2">
          Pengelolaan Daftar Golongan_darah
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
