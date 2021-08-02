import React from "react";
import { 
    Text,
    ActivityIndicator,
    View
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { RectButton, RectButtonProps} from "react-native-gesture-handler";

import { theme } from "../global/styles/theme";

interface ButtonProps extends RectButtonProps { 
    title: string;        
    data?: string;    
};                                                   

export function ButtonChangeData({ title, data, ...rest }:ButtonProps) {
    return (
        <RectButton 
            style={ styles.container }
            {...rest}
        >
            <Text style={styles.title}> {title} </Text>
            
            <Text style={styles.data}> {data} </Text>
        </RectButton>
    )
}

const styles = ScaledSheet.create({
    container: {
        height: "35@s",
        marginVertical: "5@s",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },

    title: {
        color: theme.colors.white,
        fontFamily: theme.fonts.title500,
        flex: 1,
        fontSize: "13@s",
    },

    data: {
        color: theme.colors.white_secondary,
        fontFamily: theme.fonts.text400,
        flex: 1,
        fontSize: "12@s",
    }
})