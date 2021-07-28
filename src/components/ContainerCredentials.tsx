import React, {useEffect, useState} from "react";
import {
    View,
    Text
} from "react-native"
import { ScaledSheet } from "react-native-size-matters";

import { Button } from "./Button";

import { theme } from "../global/styles/theme";

interface ContainerCredentialsProps {
    title: string;
    children: any;
    textButton: string;
    navigation: any;
    loading?: boolean;
    isDisabled?: boolean;
};

export function ContainerCredentials({ 
    title,
    children, 
    textButton,
    navigation, 
    loading = false,
    isDisabled = false
}: ContainerCredentialsProps) {
    
    return (
      <View style={styles.containerCredentials}>
            <Text style={styles.title}>
                {title}
            </Text>
            {children}
            <View style={styles.buttonContainer}>
                <Button
                    title={textButton}
                    onPress={navigation}
                    loading={loading}
                    enabled={!isDisabled}
                />
            </View>
      </View>
    );
};

const styles = ScaledSheet.create({
    containerCredentials: {
        width: "270@s",
        backgroundColor: theme.colors.black_secondary,
        borderRadius: "20@s",
        paddingTop: "15@s",
        justifyContent: "space-between",
    },

    title: {
        color: theme.colors.white,
        fontFamily: theme.fonts.title700,
        fontSize: "17@s",
        marginLeft: "30@s"
    },

    buttonContainer: {
        alignItems: "flex-end",
        paddingHorizontal: "60@s",
        marginBottom: "20@s"
    }

});