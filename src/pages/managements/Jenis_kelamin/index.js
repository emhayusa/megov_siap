import { useState } from "react";
import { Helmet } from "react-helmet-async";
import PageHeader from "./PageHeader";
import PageTitleWrapper from "src/components/PageTitleWrapper";

import { Container, Tabs, Tab, Grid, styled } from "@mui/material";
import Footer from "src/components/Footer";

import DaftarTab from "./DaftarTab";

const TabsWrapper = styled(Tabs)(
  () => `
    .MuiTabs-scrollableX {
      overflow-x: auto !important;
    }
`
);

function ManagementsJenis_kelamin() {
  const [currentTab, setCurrentTab] = useState("daftar");

  const tabs = [{ value: "daftar", label: "Daftar Jenis_kelamin" }];

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  return (
    <>
      <Helmet>
        <title>Managements - Jenis_kelamin</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <TabsWrapper
              onChange={handleTabsChange}
              value={currentTab}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </TabsWrapper>
          </Grid>
          <Grid item xs={12}>
            {currentTab === "daftar" && <DaftarTab />}
          
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ManagementsJenis_kelamin;
