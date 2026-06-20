import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import { Routes } from "../routes";

// pages
import DashboardOverview from "./dashboard/DashboardOverview";
import POSSystemPage from "./services/POSSystemPage";
import WebDesignPage from "./services/WebDesignPage";
import WebHostingPage from "./services/WebHostingPage";

import Supermarket from "./POS/supermarket";
import Restaurant from "./POS/restaurant";
import Wines from "./POS/wines";
import Retail from "./POS/retail";
import PharmacyDashboard from "./POS/pharmacy";
import HardwareDashboard from "./POS/hardware";
import ElectronicsDashboard from "./POS/electronics";
import BeautyDashboard from "./POS/Beauty";
import HospitalDashboard from "./erp/Hospital";
import LawFirmDashboard from "./erp/lawfirm";
import RealEstateDashboard from "./erp/realestate";
import SchoolDashboard from "./erp/school";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true;
  };

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  };

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <main className="content" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <Navbar />
          <Component {...props} />
          <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
        </main>
      </>
    )} />
  );
};

export default () => (
  <Switch>
    <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routes.POSSystemPage.path} component={POSSystemPage} />
    <RouteWithSidebar exact path={Routes.WebDesignPage.path} component={WebDesignPage} />
    <RouteWithSidebar exact path={Routes.WebHostingPage.path} component={WebHostingPage} />

    <RouteWithSidebar
      exact
      path={Routes.POSRetail.path}
      component={Retail}
    />

    <RouteWithSidebar
      exact
      path={Routes.POSSupermarket.path}
      component={Supermarket}
    />

    <RouteWithSidebar
      exact
      path={Routes.POSWines.path}
      component={Wines}
    />

    <RouteWithSidebar
      exact
      path={Routes.POSRestaurant.path}
      component={Restaurant}
    />

    <RouteWithSidebar
      exact
      path={Routes.POSPharmacy.path}
      component={PharmacyDashboard}
    />

    <RouteWithSidebar
      exact
      path={Routes.POSHardware.path}
      component={HardwareDashboard}
    />

    <RouteWithSidebar
      exact
      path={Routes.POSElectronics.path}
      component={ElectronicsDashboard}
    />

    <RouteWithSidebar
      exact
      path={Routes.POSBeauty.path}
      component={BeautyDashboard}
    />

    <RouteWithSidebar
      exact
      path={Routes.ERPHospital.path}
      component={HospitalDashboard}
    />

    <RouteWithSidebar
      exact
      path={Routes.ERPLawFirm.path}
      component={LawFirmDashboard}
    />

    <RouteWithSidebar
      exact
      path={Routes.ERPProperty.path}
      component={RealEstateDashboard}
    />

    <RouteWithSidebar
      exact
      path={Routes.ERPSchool.path}
      component={SchoolDashboard}
    />
  </Switch>
);