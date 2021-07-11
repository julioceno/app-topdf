import React from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScaledSheet } from "react-native-size-matters";

import { DownloadPdf } from "../screens/DownloadPdf";
import { MorePdf } from "../screens/MorePdf";
import { Settings } from "../screens/Settings";

const { Navigator, Screen } = createBottomTabNavigator()

import { theme } from "../global/styles/theme";

import download from "../assets/download.png";
import more from "../assets/more.png";
import settings from "../assets/settings.png";

const AppRoutes = () => {
    return (
        <Navigator
            tabBarOptions={{
                showLabel: false,
                labelPosition: "beside-icon",
                style: {
                    position: "absolute",
                    backgroundColor: "#0F0F0F",
                    height: 60,
                    borderTopWidth: 0
                },
                keyboardHidesTabBar: true,
            }}
        >
            <Screen 
                name="DownloadPdf"
                component={DownloadPdf}
                options={{
                   tabBarIcon: ({focused}) => (
                       <View style={{alignItems: "center", justifyContent: "center", }}>
                           <Image 
                            source={download}
                            resizeMode="contain"
                            style={{
                                height: 25,
                                tintColor: focused? theme.colors.primary : theme.colors.white
                            }}
                           />

                       </View>
                   ),
                }
            }
            />

            <Screen 
                name="More"
                component={MorePdf}
                options={{
                   tabBarIcon: ({focused}) => (
                       <View style={{alignItems: "center", justifyContent: "center", }}>
                           <Image 
                            source={more}
                            resizeMode="contain"
                            style={{
                                height: 25,
                                tintColor: focused? theme.colors.primary : theme.colors.white
                            }}
                           />

                       </View>
                   ),
                }
            }
            />

            <Screen 
                name="Settings"
                component={Settings}
                options={{
                   tabBarIcon: ({focused}) => (
                       <View style={{alignItems: "center", justifyContent: "center", }}>
                           <Image 
                            source={settings}
                            resizeMode="contain"
                            style={{
                                height: 25,
                                tintColor: focused? theme.colors.primary : theme.colors.white
                            }}
                           />

                       </View>
                   ),
                }
            }
            />

        </Navigator>
    )
}

const styles = ScaledSheet.create({
 
})

export default AppRoutes;