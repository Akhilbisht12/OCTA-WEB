/**
 * Crm Routes
 */
/* eslint-disable */
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Clients from "./clients";
import ClientsList from "./clientslist";
import Leades from "./leades";
import Tickets from "./tickets/tickets";
import TicketView from "./ticketsView/ticketview";

const EmployeeRoute = ({ match }) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/clients`} />
    <Route exact path={`${match.url}/clients`} component={Clients} />
    <Route exact path={`${match.url}/clients-list`} component={ClientsList} />
    <Route exact path={`${match.url}/leads`} component={Leades} />
    <Route exact path={`${match.url}/tickets`} component={Tickets} />
    <Route exact path={`${match.url}/singleTicket`} component={TicketView} />
  </Switch>
);

export default EmployeeRoute;
