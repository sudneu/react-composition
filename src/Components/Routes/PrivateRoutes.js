import React from 'react';
import {Route, Redirect} from "react-router-dom";

// import {AuthValues as Auth} from "../../Contexts/AuthContext/AuthValues";

const PrivateRoutes = ({children, ContextName, ...rest}) => {
    const loggedIn = React.useContext(ContextName);
    console.log("Inside private routes auth values: ",loggedIn);
    const {isAuthenticated, user} = loggedIn;
    console.log("Authenticated " , isAuthenticated);
    console.log("User", user);
    // const ContextValue = React.useContext(Auth);
    // console.log("ContextValue in PrivateRoute.js file : ", ContextValue);
    return (
        <Route {...rest} render={
                            ({location}) => {
                            return (
                                isAuthenticated === true
                                ? children
                                : <Redirect to={{pathname : "/", state: {from: location} }} />
                            )
                        }
                    } 
        />       
    )}

export default PrivateRoutes;