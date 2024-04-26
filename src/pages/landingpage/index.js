import {
  Box,
  Button,
  Container,
  Card,
  Typography,
  styled,
} from "@mui/material";
import { Helmet } from "react-helmet-async";

import { Link as RouterLink } from "react-router-dom";
import environment from "src/config/environment";
//import Hero from "./Hero";

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
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

function Overview() {
  return (
    <OverviewWrapper>
      <Helmet>
        <title>EGOV BIG - SIAP | Landing Page</title>
      </Helmet>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#ffffff",
          position: "fixed",
          top: "0px",
          zIndex: "1000",
          marginTop: "0px",
          width: "100%",
          padding: "0",
          top: "0px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "10px",
            fontSize: "20px",
            alignItems: "center",
            width: "600px",
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/static/images/logo/logobig.png"}
            width="70"
            height="70"
            alt="EGOV Badan Informasi Geospasial"
            style={{ marginRight: "10px" }}
          />
          <h3>EGOV BIG - SIAP </h3>
        </Box>
        <Box
          sx={{
            display: "block",
            padding: "0 30px 0 0",
          }}
        >
          <Button
            component={RouterLink}
            to="/auth/login"
            size="large"
            variant="contained"
          >
            Masuk Dashboard
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          height: "90vh",
          paddingTop: "300px",
          background:
            "url('" +
            environment.baseUrl +
            "static/images/bg-auth.jpg') no-repeat center",
          backgroundSize: "cover",
        }}
      ></Box>

      <Box
        sx={{
          display: "block",
          width: "100%",
          background: "#433E38",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#233568",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
            width: "100%",
          }}
        >
          Copyright © Direktorat Teknologi - 2023. All rights reserved.
        </Box>
      </Box>
    </OverviewWrapper>
  );
}
/*

      <Container maxWidth="lg">
        <Card sx={{ p: 10, my: 5, borderRadius: 12 }}>
          <Hero />
        </Card>
      </Container>
      */
export default Overview;
