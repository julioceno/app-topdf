import React, {useState} from "react";
import {
    View,
    StatusBar,
    Text
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { useNavigation } from '@react-navigation/core';

import { theme } from "../global/styles/theme"

import { Header } from "../components/Header";
import { ButtonChangeData } from "../components/ButtonChangeData";
import { ModalOptions } from "../components/ModalOptions";

export function Settings() {
    const [isVisible, setIsVisible] = useState(false)

    const navigation = useNavigation();

    function handleChangeEmail() {
        navigation.navigate("ChangeEmail")
    };

    function handleChangePassword() {
        navigation.navigate("ChangePassword")
    };

    function handleDeleteAccount() {
        navigation.navigate("DeleteAccount")
    };

    function handleLogout() {
        
    };

    return (
        <>
            <StatusBar 
                translucent
                barStyle="light-content"
                backgroundColor="transparent"
            />
            <View style={styles.container}>
                <Header 
                    title={`Tome cuidado \nao mexer nessa \nparte`}
                />

                <View style={styles.section}>
                    <Text style={styles.title}>Informações de conta</Text>
                    <ButtonChangeData 
                        title="E-mail"
                        data="juliocenolima@gmail.com"
                        onPress={handleChangeEmail}
                    />

                    <ButtonChangeData 
                        title="Senha"
                        onPress={handleChangePassword}
                    />
                </View>

                <View style={[styles.section]}>
                    <Text style={styles.title}>Controle de conta</Text>
                    
                    <ButtonChangeData 
                        title="Excluir conta"
                        onPress={handleDeleteAccount}
                    />
                    
                    <ButtonChangeData 
                        title="Sair"
                        onPress={() => setIsVisible(true)}
                    />

                    <ModalOptions 
                        title={"Sair"}
                        text="Deseja mesmo sair de sua conta?"
                        visible={isVisible}
                        closePopup={() => {
                            setIsVisible(false)
                        }}
                        confirmPopup={handleLogout}
                    />

                </View>

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