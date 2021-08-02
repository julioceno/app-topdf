import React, { useState } from "react";
import {
    View,
    StatusBar,
    FlatList,
    TouchableOpacity,
    Text,
    Alert
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from "expo-media-library"

import { theme } from "../global/styles/theme";

import { Header } from "../components/Header";
import { PdfCard } from "../components/PdfCard";
import { SimpleModal } from "../components/SimpleModal";

export function DownloadPdf() {
    const [isVisibility, setIsVisibility] = useState(false)
    const [isVisibilityPopupDownloads, setIsVisibilityPopupDownloads] = useState(false)
    const [firstDownload, setFirstDownload] = useState(false)

    async function handleDownloadPdf(name: string) {
        const date = new Date;
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert( "Precisamos de sua permissão", "Precisamos de sua permissão para liberar essa funcionalidade");
            return;
        };
        try {

                await FileSystem.downloadAsync(
                    'https://download.inep.gov.br/educacao_basica/encceja/material_estudo/livro_estudante/ciencias_fund.pdf',
                    FileSystem.documentDirectory + name, 
                )
                .then(async ({ uri }) => {
                    const asset = await MediaLibrary.createAssetAsync(uri)
                    await MediaLibrary.createAlbumAsync("ToPdf", asset)
                    .then( () => {
                        // pdf salvado com sucesso
                        setFirstDownload(true)
                  }) 
                    .catch( (err: any) => {
                      console.log("err", err)
                      alert("Erro ao salvar seu pdf, por favor, tente novamente.")
                  })
                 
                })
                .catch(error => {
                    setIsVisibility(false)
                });
          

        } catch(err) {
            setIsVisibility(false)
        } 
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
                    title={`Ops... esqueceu \nde baixar algum \nPDF?`}
                />

                <FlatList 
                    data={[{id: 1},{id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}]}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <PdfCard 
                            data={{
                                name: "Documento de identificação ",
                                date: "13/03/2021 as 14:35"
                            }}
                            onPress={() => handleDownloadPdf("Documento de identificação")}
                            handleRemove={() => alert("remover")}
                        />
                    )}
                    ListFooterComponent={() => (
                        <TouchableOpacity 
                            activeOpacity={.7}
                        >
                            { firstDownload &&
                                <Text style={styles.currentDownloads}>Ver downloads</Text>
                            }
                        </TouchableOpacity>
                    )}

                    contentContainerStyle={styles.containerPdf}
                />

                <SimpleModal 
                    visible={isVisibility}
                    text={"Ocorreu um erro ao efetuar o download do pdf, verifique sua conexão com a internet ou tente novamente mais tarde."}
                    closePopup={() => {
                        setIsVisibility(false)
                    }}   
                />
            </View>
        </>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.black_shape,
    },

    containerPdf: {
        marginHorizontal: "10@s",
        marginTop: "10@s",
        paddingBottom: "90@s"
    },

    currentDownloads: {
        fontFamily: theme.fonts.title700,
        fontSize: "12.5@s",
        color: theme.colors.white,
        textAlign: "center",
        marginTop: "10@s"
    }
});