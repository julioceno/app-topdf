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

export function ForgotPasswordPart2() {
    const navigation = useNavigation();
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")

    const [passwordReady, setPasswordReady] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true)
    const [hiddenConfirmPassword, setHiddenConfirmPassword] = useState<boolean>(true)

    function onChangeTextPassword(text: string) {
        if (!!text && !!confirmPassword && text === confirmPassword) {
            setPasswordReady(true)
        } else {
            setPasswordReady(false)
        };

        setPassword(text)
        setError(false)
    };

    function onChangeTextConfirmPassword(text: string) {
        if (!!text.length && !!password && text === password) {
            setPasswordReady(true)
        } else {
            setPasswordReady(false)
        };

        setConfirmPassword(text)
        setError(false)
    };

    function handleLogin() {
        // navigation.navigate("ForgotPasswordPart3")
        
    };


    return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <ContainerCredentials 
                title={`Para que isso não ocorra novamente, crie uma nova senha`}
                navigation={handleLogin}
                loading={false}
                isDisabled={!passwordReady}
                textButton={"Concluir"}
            >
                <View style={styles.form}>
                    <Input 
                        placeholder="Insira sua nova senha"
                        autoCapitalize="none"
                        textContentType="password"
                        secureTextEntry={hiddenPassword}
                        icon={0}
                        isPassword
                        showPassword={() => setHiddenPassword(!hiddenPassword)}
                        isShow={hiddenPassword}
                        onChangeText={onChangeTextPassword}
                        value={password}
                    />

                    <Input 
                        placeholder="Confirme sua nova senha"
                        autoCapitalize="none"
                        textContentType="password"
                        secureTextEntry={hiddenConfirmPassword}
                        icon={0}
                        isPassword
                        showPassword={() => setHiddenConfirmPassword(!hiddenConfirmPassword)}
                        isShow={hiddenConfirmPassword}
                        onChangeText={onChangeTextConfirmPassword}
                        value={confirmPassword}
                        isMargin
                    />

                </View>             
            </ContainerCredentials>

            {error &&
                <View>
                    <Text style={styles.textError}>A senha é inválida ou ocorreu um erro</Text>
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