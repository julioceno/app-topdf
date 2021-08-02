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
    text: string;
    closePopup: () => void;                                                                      
};                                                   

export function DownloadsModal({ visible, text, closePopup }:ModalProps) {
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
                <Text style={styles.textPopup}>
                    { text }
                </Text>
            </View>

            <TouchableOpacity style={{
                flex: 1,
                height: "100%",
                width: "100%",
                position: "absolute"
            }} 
                onPress={() => closePopup()}
            />

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
        height: "150@s",
        width: "250@s",
        borderRadius: "7@s",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
        paddingHorizontal: "5@s"
    },

    textPopup: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.white_secondary,
        fontSize: "13@s",
        textAlign: "center",
        paddingHorizontal: "7@s"
    }
})