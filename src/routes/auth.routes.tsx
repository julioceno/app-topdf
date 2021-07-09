import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

import { Welcome } from "../screens/Welcome";
import { Login } from "../screens/Login";
import { ForgotPassword } from "../screens/ForgotPassword";
import { ForgotPasswordPart2 } from "../screens/ForgotPasswordPart3";
import { ForgotPasswordPart3 } from "../screens/ForgotPasswordPart2";
import { CreateEmail } from "../screens/CreateEmail";
import { CreatePassword } from "../screens/CreatePassword";

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
    return(
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: "transparent"
                }
            }}
        >
            <Screen 
                name="Welcome"
                component={Welcome}
            />

            <Screen 
                name="Login"
                component={Login}
            />

            <Screen 
                name="ForgotPassword"
                component={ForgotPassword}
            />

            <Screen 
                name="ForgotPasswordPart2"
                component={ForgotPasswordPart2}
            />

            <Screen 
                name="ForgotPasswordPart3"
                component={ForgotPasswordPart3}
            />
            
            <Screen 
                name="CreateEmail"
                component={CreateEmail}
            />

            <Screen 
                name="CreatePassword"
                component={CreatePassword}
            />
        </Navigator>
    );
}