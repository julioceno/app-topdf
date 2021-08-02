import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

import { Settings } from "../screens/Settings";
import { ChangeEmail } from "../screens/ChangeEmail";
import { ChangeEmailConfirm } from "../screens/ChangeEmailConfirm";
import { ChangePassword } from "../screens/ChangePassword";
import { ChangePasswordConfirm } from "../screens/ChangePasswordConfirm";
import { DeleteAccount } from "../screens/DeleteAccount";

const { Navigator, Screen } = createStackNavigator()

export function SettingRoutes() {
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
                name="Settings"
                component={Settings}
            />

            <Screen 
                name="ChangeEmail"
                component={ChangeEmail}
            />

            <Screen 
                name="ChangeEmailConfirm"
                component={ChangeEmailConfirm}
            />

            <Screen 
                name="ChangePassword"
                component={ChangePassword}
            />

            <Screen 
                name="ChangePasswordConfirm"
                component={ChangePasswordConfirm}
            />

            <Screen 
                name="DeleteAccount"
                component={DeleteAccount}
            />
        </Navigator>
    );
}