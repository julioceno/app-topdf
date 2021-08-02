import React from "react";
import { 
    TouchableOpacity,
    View,
    Image,
    TextInput,
    TextInputProps
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { Ionicons } from '@expo/vector-icons';

import { theme } from "../global/styles/theme";

interface InputProps extends TextInputProps { 
    placeholder: string;        
    icon: number;
    isPassword?: boolean;
    showPassword?: any;
    isShow?: boolean;
    isMargin?: boolean;
    inputBackground?: string
};                                                   

export function Input({
    icon, 
    placeholder, 
    isPassword = false, 
    showPassword, 
    isShow = false,
    isMargin = false,
    inputBackground,
    ...rest
}:InputProps) {

    const icons = [
        require("../assets/login-account.png"),
    ]

    return (
        <View
            style={[
                styles.container,
                isMargin && styles.margin, 
                !!inputBackground && {backgroundColor: inputBackground}
            ]}
        >
            <Image 
                source={icons[icon]}
                style={styles.icon}
            />

            <TextInput 
                {...rest}
                placeholder={placeholder}
                placeholderTextColor={theme.colors.white_secondary}
                
                style={styles.input}
            />

            { isPassword &&
                <TouchableOpacity
                    activeOpacity={.7}
                    onPress={showPassword}
                >
                    { isShow
                        ?<Ionicons name="eye" style={styles.hiddenPassword} />
                        :<Ionicons name="eye-off" style={styles.hiddenPassword} />
                    }
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = ScaledSheet.create({
    container: {
        backgroundColor: theme.colors.black_shape,
        height: "35@s",
        marginHorizontal: "20@s",
        borderRadius: "3@s",
        alignItems: "center",
        paddingHorizontal: "10@s",
        flexDirection: "row",
    },

    margin: {
        marginTop: "10@s"
    },

    icon: {
        height: "20@s",
        width: "20@s",
        marginRight: "10@s"
    },

    input: {
        color: theme.colors.white,
        fontFamily: theme.fonts.title500,
        fontSize: "11@s",
        flex: 1,
        marginRight: "4@s"
    },

    hiddenPassword: {
        fontSize: "14.4@s",
        color: theme.colors.white
    }

   
})