import React, { useState, useEffect } from "react";
import { 
    Modal,
    TouchableOpacity,
    Text,
    View
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { theme } from "../global/styles/theme";

interface ModalProps { 
    visible: boolean;
    title: string;
    text: string;
    isJustConfirm?: boolean,                                                                  
    closePopup: () => void;    
    confirmPopup: () => void;
};                                                   

export function ModalOptions({ 
    visible, 
    title, 
    text, 
    isJustConfirm, 
    closePopup, 
    confirmPopup 
}:ModalProps) {
    const [showModal, setShowModal] = useState(visible)

    useEffect( () => {
        if (visible) {
            setShowModal(true)
        } else {
            setShowModal(false)
        };
    },[visible])

    return (
        <Modal
        animationType={'slide'}
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
            closePopup()
        }}
      >
          <View style={styles.modalContainer}>
            <View style={styles.main}>
                <Text style={styles.titlePopup}>{title}</Text>
                <Text style={styles.textPopup}>
                    { text }
                </Text>

                <View style={styles.buttons}>
                   { 
                    !isJustConfirm &&
                   <TouchableOpacity
                        activeOpacity={.7}
                        onPress={closePopup}
                    >
                        <Text style={styles.button}>Cancelar</Text>
                    </TouchableOpacity>}

                    <TouchableOpacity
                        activeOpacity={.7}
                        onPress={confirmPopup}
                    >
                        <Text style={styles.button}>Confirmar</Text>
                    </TouchableOpacity>
                </View>
            </View>

          </View>
      </Modal>
    )
}

const styles = ScaledSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,.1)",
        justifyContent: "center",
        alignItems: "center"
    },

    main: {
        backgroundColor: theme.colors.black,
        height: "130@s",
        width: "225@s",
        borderRadius: "7@s",
        // alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "20@s",
        zIndex: 10,
        paddingHorizontal: "5@s"
    },

    titlePopup: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.white_secondary,
        fontSize: "14.5@s",
        paddingHorizontal: "7@s"
    },

    textPopup: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.white_secondary,
        fontSize: "13@s",
        textAlign: "center",
        paddingHorizontal: "7@s",
        flex: 1,
        marginTop: "10@s"
    },

    buttons: {
        marginBottom: "7@s",
        justifyContent: "flex-end",
        flexDirection: "row",
        marginRight: "5@s"
    },

    button: {
        fontFamily: theme.fonts.title500,
        color: theme.colors.white_secondary,
        fontSize: "13@s",
        marginHorizontal: "4@s",
    }
})