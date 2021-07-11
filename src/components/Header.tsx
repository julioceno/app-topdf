import React from "react";
import {
    View,
    Text,
    Image
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "../global/styles/theme"
import logo from "../assets/logo.png"

interface HeaderProps {
    title: string
}

export function Header({title}: HeaderProps) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Image 
                source={logo}
                style={styles.logo}
            />
        </View>
    );
};

const styles = ScaledSheet.create({
    container: {
        marginTop: getStatusBarHeight(),
        paddingTop: "5@s",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingHorizontal: "15@s"
    },

    title: {
        fontFamily: theme.fonts.title500,
        fontSize: "22@s",
        color: theme.colors.white,
        marginTop: "23@s"
    },

    logo: {
        height: "132@s",
        width: "132@s",
    }
});