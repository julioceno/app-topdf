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
import { ModalOptions } from "../components/ModalOptions";

export function DeleteAccount() {
    const [password, setPassword] = useState("")
    const [passwordReady, setPasswordReady] = useState<boolean>(false)
    const [isVisibleDeleteAccount, setIsVisibleDeleteAccount] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState(true)

    function handleTextPassword(text: string) {
        if (!!text) {
            setPasswordReady(true)
        } else {
            setPasswordReady(false)
        };
        setPassword(text);
    };

    function handleConfirmPassword() {
        setIsVisibleDeleteAccount(true)
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
                    <Text style={styles.label}> Excluir conta </Text>

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
                               onChangeText={handleTextPassword}
                               value={password}
                        />

                        <Text style={styles.alert}>
                            Você tem que está ciente que se você excluir sua 
                            {"\n"}conta você não terá mais acesso a nenhum dos pdf's 
                            {"\n"}convertidos.
                        </Text>

                        <View style={styles.buttonContainer}>
                            <Button 
                                title="Excluir conta"
                                onPress={handleConfirmPassword}
                                enabled={passwordReady}
                            />
                        </View>
                    </View>

                    <ModalOptions 
                     visible={isVisibleDeleteAccount} 
                     title={"Deletar conta"}
                     text={`Tem certeza que deseja deletar \nsua conta?`}
                     closePopup={() => {
                         setIsVisibleDeleteAccount(false)
                     }}
                     confirmPopup={() => {
                        //  setIsVisibleDeleteAccount(false)
                     }}
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

    alert: {
        color: theme.colors.white_secondary,
        fontFamily: theme.fonts.text400,
        fontSize: "12.5@s",
        marginTop: "10@s",
        alignSelf: "center"
    },

    buttonContainer: {
        paddingHorizontal: "20@s",
        marginTop: "20@s"
    }
});