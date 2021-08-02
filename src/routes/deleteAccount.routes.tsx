import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

import { Settings } from "../screens/Settings";

const { Navigator, Screen } = createStackNavigator()

export function DeleteAccountRoutes() {
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

        </Navigator>
    );
}