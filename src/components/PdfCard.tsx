import React, { useState } from "react";
import {
    TouchableOpacity,
    Text, 
    View,
    Animated,
    Image,
    Alert
} from "react-native"
import { Feather } from "@expo/vector-icons";
import { ScaledSheet } from "react-native-size-matters";
import { RectButton, RectButtonProps} from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import * as FileSystem from 'expo-file-system';

import { theme } from "../global/styles/theme"
import pdfIcon from "../assets/pdf.png"
import pdfDownload from "../assets/pdfDownload.png"

interface PlantProps extends RectButtonProps {
    data: {
        name: string;
        date: string;
    },
    handleRemove: () => void;
}



export function PdfCard({data, handleRemove, ...rest} : PlantProps) {
    const [pdfUrl, setPdfUrl] = useState("../assets/example.pdf")
    const [progressValue, setProgressValue] = useState(0);
    const [downloadConcluded, setDownloadConcluded] = useState<boolean>(false);
    const [errorDownload, setErrorDownload] = useState<boolean>(false);
    
    async function handleDownloadPdf(name: string) {
        const date = new Date;
        
        try {
            const { uri: localUri } = await FileSystem.downloadAsync("../assets/example.pdf", FileSystem.documentDirectory + name + ".pdf");

        } catch(err) {
            console.log(err)
        } 
      
       
    };

    return(
        <Swipeable
            overshootRight={false}
            renderRightActions={()  => (
                <Animated.View>
                    <View>
                        <RectButton
                            style={styles.buttonRemove}
                            onPress={handleRemove}
                        >
                            <Feather name="trash" size={32} color={theme.colors.white} />

                        </RectButton>
                    </View>
                </Animated.View>
            )}
        >
            <View 
                style={styles.container}
            >
                <Text style={{color: "white"}}>{progressValue}</Text>
                <Image 
                    source={pdfIcon}
                    style={styles.pdfIcon}
                />   
                
                <View style={styles.texts}>
                    <Text style={styles.title}>
                        { data.name }
                    </Text>
                    <Text style={styles.date}>
                        { data.date }
                    </Text>
                </View>

                <TouchableOpacity 
                    style={styles.downloadContainer}
                    activeOpacity={.7}
                    onPress={ () => handleDownloadPdf(data.name)}
                >
                    <Image 
                        source={pdfDownload}
                        style={styles.downloadPdfIcon}
                    />   
                
                    <Text style={styles.downloadPdfText}>Baixar</Text>
                </TouchableOpacity>
            </View>
        </Swipeable>
    );
};

const styles = ScaledSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: "15@s",
        paddingVertical: 25,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: theme.colors.black,
        marginVertical: 5,
    },

    pdfIcon: {
       height: "38@s",
       width: "36@s",
       marginRight: "10@s"
    }, 

    texts: {
        flex: 1
    },

    downloadContainer: {
        flexDirection: "column",
        alignItems: "center"
    },

    downloadPdfIcon: {
        height: "25@s",
        width: "25@s",
    },

    downloadPdfText: {
        fontFamily: theme.fonts.text400,
        fontSize: "8.5@s",
        color: theme.colors.primary,
        marginTop: "2@s"
    },

    title: {
        flex: 1,
        fontFamily: theme.fonts.title500,
        fontSize: "12.5@s",
        color: theme.colors.white
    },

    date: {
        flex: 1,
        fontFamily: theme.fonts.text400,
        fontSize: "11@s",
        color: theme.colors.white
    },

 
    buttonRemove: {
        width: "90@s",
        height: "65@s",
        backgroundColor: theme.colors.red_secondary,
        marginTop: "15@s",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        right: "20@s",
        paddingLeft: "15@s"
    }

})