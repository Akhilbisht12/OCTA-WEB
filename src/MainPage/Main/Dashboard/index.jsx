/**
 * Crm Routes
 */
/* eslint-disable */
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Admindashboard from "./admindashboard";
import AgentDashboard from "./AgentDashboard";
import ConversionHead from "./ConversionHead";
import Employeedashboard from "./employeedashboard";
import UnitHead from "./UnitHead";

const DashboardRoute = ({ match }) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} />
    <Route path={`${match.url}/dashboard`} component={Admindashboard} />
    <Route
      path={`${match.url}/employee-dashboard`}
      component={Employeedashboard}
    />
    <Route path={`${match.url}/agent-dashboard`} component={AgentDashboard} />
    <Route path={`${match.url}/unit-head-dashboard`} component={UnitHead} />
    <Route
      path={`${match.url}/conversion-head-dashboard`}
      component={ConversionHead}
    />
  </Switch>
);

export default DashboardRoute;
