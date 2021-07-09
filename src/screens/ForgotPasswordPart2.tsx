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

export function ForgotPasswordPart3() {
    const navigation = useNavigation();
    const [code, setCode] = useState<string>("")
    const [codeReady, setCodeReady] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)


    function onChangeTextEmail(text: string) {
        if (!!text) {
            setCodeReady(true)
        } else {
            setCodeReady(false)
        };

        setCode(text)
        setError(false)
    };

    function handleLogin() {
        // navigation.navigate("")
    };


    return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <ContainerCredentials 
                title={`Insira o código que \nenviamos para você`}
                navigation={handleLogin}
                loading={false}
                isDisabled={!codeReady}
                textButton={"Prosseguir"}
            >
                <View style={styles.form}>
                    <Input 
                        placeholder="Código"
                        autoCorrect={false}
                        autoCapitalize="none"
                        autoCompleteType="cc-number"
                        textContentType="postalCode"
                        icon={0}
                        onChangeText={onChangeTextEmail}
                        value={code}
                    />
                </View>             
            </ContainerCredentials>

            {error &&
                <View>
                    <Text style={styles.textError}>Código incorreto</Text>
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