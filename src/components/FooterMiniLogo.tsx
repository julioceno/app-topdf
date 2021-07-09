import React from "react";
import {
    View,
    
    Image
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { theme } from "../global/styles/theme"

import logo from "../assets/logo.png"

export function FooterMiniLogo() {
    return (
        <Image 
            source={logo}
            style={styles.logo}
        />
    );
}

const styles = ScaledSheet.create({
  
    logo: {
        width: "35@s",
        height: "35@s",
        marginRight: "13@s",
        marginBottom: "13@s"
    }
});