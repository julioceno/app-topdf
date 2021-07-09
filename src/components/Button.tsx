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
    isDisabled?: boolean;
    loading?: boolean;                                                                                  
};                                                   

export function Button({ title, isDisabled = false, loading = false, ...rest }:ButtonProps) {
    return (
        <RectButton 
            style={[styles.container, isDisabled && { backgroundColor: theme.colors.gray}]}
            {...rest}
        >
            { loading && 
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="small" color={theme.colors.white} style={styles.loading}/>
                </View>
            }
            <Text 
                style={[styles.text]}
            >
                { title }
            </Text>
        </RectButton>
    )
}

const styles = ScaledSheet.create({
    container: {
        height: "35@s",
        borderRadius: "8@s",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.primary,
        marginVertical: 7,
        flexDirection: "row"
    },

    loadingContainer: {
        justifyContent: "center"
    },

    loading: {
        position: "absolute",
        marginLeft: "10@s",
    },
    
    text: {
        fontSize: "16@s",
        color: theme.colors.white,
        fontFamily: theme.fonts.title500,
        flex: 1,
        textAlign: "center"
    }
})