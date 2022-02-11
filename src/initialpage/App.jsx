import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// We will create these two pages in a moment
//Authendication
import LoginPage from "./loginpage";
import RegistrationPage from "./RegistrationPage";
import ForgotPassword from "./forgotpassword";
import OTP from "./otp";
import LockScreen from "./lockscreen";
import ApplyJobs from "./ApplyJob";

//Main App
import DefaultLayout from "./Sidebar/DefaultLayout";
import Settinglayout from "./Sidebar/Settinglayout";
import Tasklayout from "./Sidebar/tasklayout";
import Emaillayout from "./Sidebar/emaillayout";
import chatlayout from "./Sidebar/chatlayout";

import uicomponents from "../MainPage/UIinterface/components";
//Error Page
import Error404 from "../MainPage/Pages/ErrorPage/error404";
import Error500 from "../MainPage/Pages/ErrorPage/error500";

// Import cookie
import Cookies from "universal-cookie";
// import 'Assets/css/font-awesome.min.css';

import $ from "jquery";
window.jQuery = $;
window.$ = $;
// import UserPage from './pages/UserPage'
/**
 * Initial Path To Check Whether User Is Logged In Or Not
 */
const InitialPath = ({ component: Component, authUser, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authUser ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default class App extends Component {
  componentDidMount() {
    if (
      location.pathname.includes("login") ||
      location.pathname.includes("register") ||
      location.pathname.includes("forgotpassword") ||
      location.pathname.includes("otp") ||
      location.pathname.includes("lockscreen")
    ) {
      // $('body').addClass('account-page');
    } else if (
      location.pathname.includes("error-404") ||
      location.pathname.includes("error-500")
    ) {
      $("body").addClass("error-page");
    }
  }
  render() {
    const cookies = new Cookies();
    const { location, match } = this.props;
    // const user = cookies.get("agent");
    const user = {
      _id: "61bb2160f2a45912dc500415",
      firstName: "OCTA",
      lastName: "Bot",
      email: "doodle@lms.in",
      phone: 8979877325,
      agentID: "1234",
      role: "agent",
      photo: {
        secure_url:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      },
      createdAt: "2021-12-16T11:22:08.932+00:00",
    };
    if (location.pathname === "/") {
      if (user === null) {
        return <Redirect to={"/login"} />;
      } else {
        return <Redirect to={"/app/main/dashboard"} />;
      }
    }

    if (location.pathname === "/") {
      return <Redirect to={"/app/main/dashboard"} />;
    }
    return (
      <Switch>
        <InitialPath
          path={`${match.url}app`}
          authUser={user}
          component={DefaultLayout}
        />
        <Redirect exact from={`${match.url}/`} to={`${match.url}/login`} />
        <Route path="/login" component={LoginPage} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/otp" component={OTP} />
        <Route path="/lockscreen" component={LockScreen} />
        <Route path="/applyjob" component={ApplyJobs} />

        <Route path="/app" component={DefaultLayout} />
        <Route path="/settings" component={Settinglayout} />
        <Route path="/tasks" component={Tasklayout} />
        <Route path="/email" component={Emaillayout} />
        <Route path="/conversation" component={chatlayout} />

        <Route path="/ui-components" component={uicomponents} />
        <Route path="/error-404" component={Error404} />
        <Route path="/error-500" component={Error500} />
      </Switch>
    );
  }
}
