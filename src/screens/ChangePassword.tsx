import React, { useState } from "react";
import {
    View,
    StatusBar,
    Text,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { useNavigation } from '@react-navigation/core';

import { theme } from "../global/styles/theme"

import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { SimpleModal } from "../components/SimpleModal";

export function ChangePassword() {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordReady, setPasswordReady] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(true)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState<boolean>(true)

    const navigation = useNavigation()

    function handleTextPassword(text: string) {
        if (!!text && !!confirmPassword && text === confirmPassword) {
            setPasswordReady(true)
        } else {
            setPasswordReady(false)
        };
        setPassword(text);
    };

    function handleTextConfirmPassword(text: string) {
        if (!!text && !!password && text === password) {
            setPasswordReady(true)
        } else {
            setPasswordReady(false)
        };
        setConfirmPassword(text);
    };

    function handleConfirmPassword() {
        navigation.navigate("ChangePasswordConfirm")
    };

    return (
        <>
            <StatusBar 
                translucent
                barStyle="light-content"
                backgroundColor="transparent"
            />
            <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Header 
                        title={`Tome cuidado \nao mexer nessa \nparte`}
                    />

                    <View style={styles.section}>
                        <Text style={styles.label}> Alterando Senha </Text>
                            <Input 
                                icon={1}
                                inputBackground={theme.colors.black}
                                placeholder="Sua nova senha"
                                autoCorrect={false}
                                isPassword
                                showPassword={() => setShowPassword(!showPassword)}
                                isShow={showPassword}
                                secureTextEntry={showPassword}
                                autoCapitalize="none"
                                autoCompleteType="password"
                                textContentType="password"
                                onChangeText={handleTextPassword}
                                value={password}
                            />

                            <Input 
                                icon={1}
                                inputBackground={theme.colors.black}
                                placeholder="Confirme sua nova senha"
                                autoCorrect={false}
                                isPassword
                                showPassword={() => setShowPasswordConfirm(!showPasswordConfirm)}
                                isShow={showPasswordConfirm}
                                secureTextEntry={showPasswordConfirm}
                                autoCapitalize="none"
                                autoCompleteType="password"
                                textContentType="password"
                                onChangeText={handleTextConfirmPassword}
                                value={confirmPassword}
                                isMargin
                            />

                        <View style={styles.buttonContainer}>
                            <Button 
                                title="Próximo"
                                onPress={handleConfirmPassword}
                                enabled={passwordReady}
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
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
        marginLeft: "15@s",
    },

    label: {
        color: theme.colors.gray,
        fontFamily: theme.fonts.title500,
        fontSize: "12.5@s",
        marginLeft: "16@s",
        marginBottom: "5@s"
    },

    buttonContainer: {
        paddingHorizontal: "20@s",
        marginTop: "20@s"
    }
});