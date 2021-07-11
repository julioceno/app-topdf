import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

import Tab from "../routes/tab.routes";

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes() {
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
                name="Tab"
                component={Tab}
            />
        </Navigator>
    );
}