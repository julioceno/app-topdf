import React from "react";
import {
    View,
    StatusBar,
    FlatList,
    TouchableOpacity,
    Text
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { theme } from "../global/styles/theme";

import { Header } from "../components/Header";
import { PdfCard } from "../components/PdfCard";

export function DownloadPdf() {

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
                            handleRemove={() => alert("remover")}
                        />
                    )}
                    ListFooterComponent={() => (
                        <TouchableOpacity 
                            activeOpacity={.7}
                        >
                            <Text style={styles.currentDownloads}>Ver downloads em andamento</Text>
                        </TouchableOpacity>
                    )}

                    contentContainerStyle={styles.containerPdf}
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