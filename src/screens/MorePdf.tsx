import React, { useEffect, useState } from "react";
import {
    View,
    StatusBar,
    TouchableWithoutFeedback,
    Text,
    TextInput,
    Image,
    Keyboard
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { useNavigation } from '@react-navigation/core';
import * as DocumentPicker from "expo-document-picker";
import mime from 'mime';

import { theme } from "../global/styles/theme"
import morePdf from "../assets/create-pdf.png"

import mimeTypes from "../utils/mime";

import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { SimpleModal } from "../components/SimpleModal";


interface DocumentProps {
    type: string,
    uri: string, 
    name: string, 
    size: number
}

export function MorePdf() {
    const [newNameFile, setNewNameFile] = useState<string>()
    const [file, setFile] = useState<string | null>(null)
    const [mimeTypeCurrent, setMimeTypeCurrent] = useState<string | null>(null)
    const [fileName, setFileName] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [isEnabled, setIsEnabled] = useState(false)
    const [isVisibleMimeInvalid, setIsVisibleMimeInvalid] = useState(false)
    const [isVisibleError, setIsVisibleMimeError] = useState(false)
    const [isVisibleSuccessfull, setIsVisibleSuccessfull] = useState(false)

    async function imagePickerCall() {
        let result = await DocumentPicker.getDocumentAsync({type: "*/*"}) as DocumentProps;

        if (result.type === "cancel") {
            setFile(null);
            setIsEnabled(false)
            return;
        };

        if ( !mimeTypes.includes(mime.getType(result.uri))) {
            setIsVisibleMimeInvalid(true)
            setIsEnabled(false)
            return;
        };
        
        if (result.name.length > 20) {
            const array = result.name.split("");
            
            const newArray = array.map( (letter, indice) => {
                if (indice <= 20) return letter;
            });
            
            setFileName(newArray.join("") + "...");
        } else {
            setFileName(result.name)
        };
        
        setFile(result.uri);
        setIsEnabled(!!file && !!newNameFile? true : false);
    };

    function handleGeneratePdf() {
        setIsVisibleSuccessfull(true)
    };
    
    return (
        <>
            <StatusBar 
                translucent
                barStyle="light-content"
                backgroundColor="transparent"
            />
                <View style={styles.container} >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.content}>
                            <Header 
                                title={`Convertendo\nseus problemas`}
                            />
                            
                            <View style={styles.form}>
                                <View style={styles.buttonChooseFileContainer}>
                                    <Button 
                                        title={ fileName || `Escolher aquivo`}
                                        buttonColor={theme.colors.red_secondary}
                                        onPress={imagePickerCall}
                                    />
                                </View>

                                <TextInput 
                                    placeholder="Como será o nome do arquivo pdf"
                                    placeholderTextColor={theme.colors.white_secondary}
                                    onChangeText={text =>  {
                                        setIsEnabled(!!file && !!newNameFile? true : false);
                                        setNewNameFile(text);
                                    }}
                                    value={newNameFile}
                                    
                                    style={styles.inputText}
                                />
                            </View>
                            
                            <View style={styles.secondarySection}>
                                <View style={styles.instructions}>
                                    <Image 
                                        source={morePdf}
                                        style={styles.morePdf}
                                    />

                                    <Text style={styles.text}>Converta seus{"\n"}arquivos em PDF{"\n"}da melhor maneira{"\n"}possível</Text>
                                </View>

                                <View style={styles.buttonContainer}>
                                    <Button 
                                        title="Gerar pdf"
                                        onPress={handleGeneratePdf}
                                        enabled={isEnabled}
                                        // loading={loading}
                                    />
                                </View>
                            </View>

                            <SimpleModal 
                                visible={isVisibleMimeInvalid} 
                                text={"Não é possível transformar este arquivo em pdf. Só é possível converter imagens e arquivos .docx."}
                                closePopup={() => {
                                    setIsVisibleMimeInvalid(false)
                                }}
                            />

                            <SimpleModal 
                                visible={isVisibleError} 
                                text={`Houve um erro ao converter o arquivo para pdf. Tente novamente, se o erro persistir, tente novamente mais tarde.`}
                                closePopup={() => {
                                    setIsVisibleMimeError(false)
                                }}
                            />
                            
                            <SimpleModal 
                                visible={isVisibleSuccessfull} 
                                text={`Seu pdf acabou de ser convertido com sucesso!`}
                                closePopup={() => {
                                    setIsVisibleSuccessfull(false)
                                }}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
        </>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1
    },

    content: {
        backgroundColor: theme.colors.black_shape,
        flex: 1,
    },

    form: {
        marginTop: "20@s"
    },

    buttonChooseFileContainer: {
        paddingHorizontal: "25@s",
        marginBottom: "10@s"
    },

    inputText: {
        backgroundColor: theme.colors.black,
        height: "35@s",
        color: theme.colors.white_secondary,
        fontFamily: theme.fonts.text400,
        fontSize: "12.5@s",
        marginHorizontal: "25@s",
        borderRadius: "10@s",
        paddingLeft: "10@s"
    },

    secondarySection: {
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: 70,
        paddingTop: "50@s"
    },

    instructions: {
        alignItems: "center",
        flexDirection: "row",
    },

    morePdf: {
        height: "140@s",
        width: "155@s",
        marginLeft: "5@s",
        marginRight: "8@s"
    },

    text: {
        color: theme.colors.white_secondary,
        fontFamily: theme.fonts.title500,
        fontSize: "20@s",
    },

    buttonContainer: {
        paddingHorizontal: "15@s",
    },
});