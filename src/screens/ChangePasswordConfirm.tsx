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
import { ModalOptions } from "../components/ModalOptions";

export function ChangePasswordConfirm() {
    const [password, setPassword] = useState("")
    const [isVisibleOptions, setIsVisibleOptions] = useState(false)
    const [showPassword, setShowPassword] = useState(true)

    const navigation = useNavigation()

    function handleConfirmChangeEmail() {
       
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
                        <Text style={styles.label}> Confirme sua senha atual</Text>
                            <Input 
                                icon={1}
                                inputBackground={theme.colors.black}
                                placeholder="Digite sua senha"
                                autoCorrect={false}
                                autoCapitalize="none"
                                isPassword
                                showPassword={() => setShowPassword(!showPassword)}
                                isShow={showPassword}
                                secureTextEntry={showPassword}
                                textContentType="password"
                                onChangeText={setPassword}
                                value={password}
                            />

                        <View style={styles.buttonContainer}>
                            <Button 
                                title="Alterar senha"
                                onPress={handleConfirmChangeEmail}
                                enabled={!!password}
                            />
                        </View>
                    </View>
                    <ModalOptions 
                        visible={isVisibleOptions} 
                        title={"Troca de senha efetuada"}
                        text={`Seu senha foi trocado com sucesso!`}
                        closePopup={() => {
                            setIsVisibleOptions(false)
                        }}
                        confirmPopup={() => {
                            setIsVisibleOptions(false)
                            navigation.reset({
                                index: 1,
                                routes: [{ name: 'Settings' }],
                            });
                        }}
                        isJustConfirm

                    />
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