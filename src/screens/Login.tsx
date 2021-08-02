import React, {useEffect, useState} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native"
import { ScaledSheet } from "react-native-size-matters";
import { useNavigation } from '@react-navigation/core';

import { theme } from "../global/styles/theme"

import { ContainerCredentials } from "../components/ContainerCredentials"
import { FooterMiniLogo } from "../components/FooterMiniLogo"
import { Input } from "../components/Input"

export function Login() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [showPassword, setShowPassword] = useState<boolean>(true)
    const [loginReady, setLoginReady] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    
    const navigation = useNavigation();
    
    function onChangeTextEmail(text: string) {
        if (!!text && !!password) {
            setLoginReady(true)
        } else {
            setLoginReady(false)
        };

        setEmail(text)
        setError(false)
    };

    function onChangeTextPassword(text: string) {
        if (!!text && !!email) {
            setLoginReady(true)
        } else {
            setLoginReady(false)
        };

        setPassword(text)
        setError(false)
    };

    function handleForgotPassword() {
        navigation.navigate("ForgotPassword")
        
    }

    function handleLogin() {
        // navigation.navigate("")
        console.log(loginReady)
    };

 

    return(
        <>
        <StatusBar 
             translucent
             barStyle="light-content"
             backgroundColor="transparent"
        />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ContainerCredentials 
                    title={`Bem vindo de volta\nestávamos esperando você`}
                    navigation={handleLogin}
                    loading={false}
                    isDisabled={!loginReady}
                    textButton={"Login"}
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

                        <Input 
                            placeholder="Coloque sua senha"
                            autoCapitalize="none"
                            textContentType="password"
                            secureTextEntry={showPassword}
                            icon={0}
                            isPassword
                            showPassword={() => setShowPassword(!showPassword)}
                            isShow={showPassword}
                            onChangeText={onChangeTextPassword}
                            value={password}
                            isMargin
                        />

                        <TouchableOpacity
                            activeOpacity={.7}
                            onPress={handleForgotPassword}
                        >
                            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
                        </TouchableOpacity>
                    </View>
                </ContainerCredentials>

                {error &&
                    <View>
                        <Text style={styles.textError}>Credenciais incorretas</Text>
                    </View>
                }
                
                <View style={styles.footer}>
                    <FooterMiniLogo />
                </View>
            </View>
        </TouchableWithoutFeedback>
        </>
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


    forgotPassword: {
        color: theme.colors.white,
        fontFamily: theme.fonts.text300,
        fontSize: "9@s",
        marginRight: "20@s",
        marginTop: "5@s"
    },

    footer: {
        alignItems: "flex-end",
        width: "100%",
        position: "absolute",
        bottom: 0
    },


});