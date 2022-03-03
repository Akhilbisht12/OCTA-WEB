/**
 * Crm Routes
 */
/* eslint-disable */
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Taskboard from "./taskboard";
import Services from "./services";
import ServiceList from "./servicelist";
import ServiceView from "./ServiceView";

const ServiceRoute = ({ match }) => (
  <Switch>
    <Redirect
      exact
      from={`${match.url}/`}
      to={`${match.url}/services_dashboard`}
    />
    <Route
      exact
      path={`${match.url}/services_dashboard`}
      component={Services}
    />
    <Route exact path={`${match.url}/services_list`} component={ServiceList} />
    <Route exact path={`${match.url}/service_view`} component={ServiceView} />
    <Route exact path={`${match.url}/task-board`} component={Taskboard} />
  </Switch>
);

export default ServiceRoute;
