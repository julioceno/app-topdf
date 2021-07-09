import React, {useEffect, useState} from "react";
import {
    View,
    Text,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native"
import { ScaledSheet } from "react-native-size-matters";
import { useNavigation } from '@react-navigation/core';

import { theme } from "../global/styles/theme"

import { ContainerCredentials } from "../components/ContainerCredentials"
import { FooterMiniLogo } from "../components/FooterMiniLogo"
import { Input } from "../components/Input"

export function ForgotPassword() {
    const navigation = useNavigation();
    const [email, setEmail] = useState<string>("")
    const [forgotPasswordReady, setForgotPasswordReady] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)


    function onChangeTextEmail(text: string) {
        if (!!text) {
            setForgotPasswordReady(true)
        } else {
            setForgotPasswordReady(false)
        };

        setEmail(text)
        setError(false)
    };

    function handleLogin() {
        navigation.navigate("ForgotPasswordPart2")
    };


    return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <ContainerCredentials 
                title={`Esqueceu sua senha? \nNão se preocupe`}
                navigation={handleLogin}
                loading={false}
                isDisabled={!forgotPasswordReady}
                textButton={"Enviar"}
            >
                <View style={styles.form}>
                    <Input 
                        placeholder="Coloque seu e-mail"
                        autoCorrect={false}
                        autoCapitalize="none"
                        autoCompleteType="email"
                        textContentType="emailAddress"
                        icon={0}
                        onChangeText={onChangeTextEmail}
                        value={email}
                    />
                </View>
            </ContainerCredentials>

            {error &&
                <View>
                    <Text style={styles.textError}>E-mail incorreto</Text>
                </View>
            }
            
            <View style={styles.footer}>
                <FooterMiniLogo />
            </View>
        </View>
    </TouchableWithoutFeedback>
    )
};


const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.black_shape,
        alignItems: "center",
        justifyContent: "center"
    },
   
    containerCredentials: {
        height: "260@s",
        width: "270@s",
        backgroundColor: theme.colors.black,
        borderRadius: "20@s"
    },

    form: {
        height: "120@s",
        alignItems: "flex-end",
        justifyContent: "center",
    },

    textError: {
        position: "absolute",
        color: theme.colors.white,
        alignSelf: "center",
        marginTop: "10@s",
        fontFamily: theme.fonts.title500,
        fontSize: "13@s"
    },

    footer: {
        alignItems: "flex-end",
        width: "100%",
        position: "absolute",
        bottom: 0
    },
});