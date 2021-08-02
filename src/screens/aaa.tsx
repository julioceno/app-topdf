import React from "react";
import {
    View,
    StatusBar,
    Text
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { useNavigation } from '@react-navigation/core';

import { theme } from "../global/styles/theme"

import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function ChangeEmail() {

    return (
        <>
            <StatusBar 
                translucent
                barStyle="light-content"
                backgroundColor="transparent"
            />
            <View style={styles.container}>
                
            </View>
        </>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.black_shape,
    },

    section: {
        marginVertical: "20@s",
        marginLeft: "15@s"
    },

    title: {
        color: theme.colors.gray,
        fontFamily: theme.fonts.title500,
        fontSize: "12.5@s",
    }
});