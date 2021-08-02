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

export function ChangeEmail() {
    const [email, setEmail] = useState("")

    const navigation = useNavigation()

    function handleConfirmChangeEmail() {

        navigation.navigate("ChangeEmailConfirm")
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
                        <Text style={styles.label}> Alterando E-mail </Text>
                            <Input 
                                icon={0}
                                inputBackground={theme.colors.black}
                                placeholder="Seu novo e-mail"
                                autoCorrect={false}
                                autoCapitalize="none"
                                autoCompleteType="email"
                                textContentType="emailAddress"
                                onChangeText={setEmail}
                                value={email}
                            />

                        <View style={styles.buttonContainer}>
                            <Button 
                                title="Próximo"
                                onPress={handleConfirmChangeEmail}
                                enabled={!!email}
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