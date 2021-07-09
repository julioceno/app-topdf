import React, { useEffect }  from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Image,
    Platform
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { useNavigation } from '@react-navigation/core';

import { theme } from "../global/styles/theme"

import { FooterMiniLogo } from "../components/FooterMiniLogo"

import viewingPdf from "../assets/viewing-pdf.png"
import loginAccount from "../assets/login-account.png"

export function Welcome() {
    const navigation = useNavigation();

    function handleLogin() {
        navigation.navigate("Login")
    }

    function handleCreateAccount() {
        navigation.navigate("CreateEmail")
    }

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <StatusBar 
                    translucent
                    barStyle="light-content"
                    backgroundColor="transparent"
                />

                <Text style={styles.title}>
                    Junte-se a nós nessa{"\n"}
                    jornada e deixe{"\n"}
                    sua vida mais fácil
                </Text>

                <Image 
                    source={viewingPdf}
                    style={styles.image}
                    resizeMode={"contain"}
                />

                <View style={styles.buttons}>
                    <TouchableOpacity 
                        style={styles.button}
                        activeOpacity={.7}
                        onPress={handleLogin}
                    >
                        <Image 
                            source={loginAccount}
                            style={styles.iconButton}
                        />

                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.button, {backgroundColor: theme.colors.black}]}
                        activeOpacity={.7}
                        onPress={handleCreateAccount}
                    >
                        <Image 
                            source={loginAccount}
                            style={styles.iconButton}
                        />

                        <Text style={styles.buttonText}>Registrar-se</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footer}>
                <FooterMiniLogo />
            </View>

        </View>
    );
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.black_shape,
        alignItems: "center"
    },
    main: {
        flex: 1
    },
    title: {
        textAlign: "center",
        color: theme.colors.white,
        fontFamily: theme.fonts.title500,
        fontSize: "25@s",
        marginTop: "70@s",
    },

    image: {
        width: "220@s",
        height: "220@s",
        marginTop: "40@s"
    },

    buttons: {
        flexDirection: "row",
        marginTop: "50@s"
    },

    button: {
        backgroundColor: theme.colors.primary,
        height: "75@s",
        width: "85@s",
        borderRadius: "10@s",
        marginHorizontal: "15@s",
        justifyContent: "center",
        alignItems: "center"
    },

    iconButton: {
        height: "38@s",
        width: "38@s",
        marginBottom: "6@s"
    },

    buttonText: {
        fontSize: "11@s",
        fontFamily: theme.fonts.text400,
        color: theme.colors.white,
    },

    footer: {
        alignItems: "flex-end",
        width: "100%",
    }

});