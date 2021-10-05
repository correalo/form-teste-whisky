import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";


const Routes = () => {
   return(
       <BrowserRouter>
       <Switch>
            <Route component = { Login }  path="/" />
            <Route component = { ForgotPassword }  path="/forgotpassword" />
       </Switch>

           
       </BrowserRouter>
   )
}

export default Routes;
