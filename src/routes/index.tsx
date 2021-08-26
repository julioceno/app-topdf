import React from "react";
import { NavigationContainer } from "@react-navigation/native"

import { AuthRoutes } from "./auth.routes"
import { AppRoutes } from "./app.routes"

export function Routes() {
    return (
        <NavigationContainer>
           { true? <AuthRoutes /> : <AppRoutes />}
        </NavigationContainer>
    );
};