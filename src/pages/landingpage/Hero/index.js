import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
`
);

const MuiAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #e5f7ff;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

const JsAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #fef8d8;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

function Hero() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          <JsAvatar>
            <img
              src={process.env.PUBLIC_URL + "/static/images/logo/logobig.png"}
              alt="javascript"
            />
          </JsAvatar>
          <Typography variant="h4">
            <Box>
              <b>
                KEMENTERIAN LINGKUNGAN HIDUP DAN KEHUTANAN <br />
                DIREKTORAT JENDERAL PLANOLOGI KEHUTANAN DAN TATA LINGKUNGAN
                <br />
                DIREKTORAT INVENTARISASI DAN PEMANTAUAN SUMBER DAYA HUTAN
              </b>
            </Box>
          </Typography>
        </Grid>
        <Grid item md={10} lg={8} mx="auto">
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            Egov BIG
          </TypographyH1>
          <LabelWrapper color="success">Version 2.0.0</LabelWrapper>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            EGOV Badan Informasi Geospasial
          </TypographyH2>
          <Button
            component={RouterLink}
            to="/auth/login"
            size="large"
            variant="contained"
          >
            Masuk Dashboard
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
