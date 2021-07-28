import React, { useEffect, useState } from "react";
import {
    Modal
} from "react-native";

interface PopUpContainerProps {
    visible: boolean;
    children: React.FC
};

export function ModalPopup({visible, children}: PopUpContainerProps ) {
    const [showModal, setShowModal] = useState(visible);
     
    useEffect( () => {
        if (visible) {
            setShowModal(true)
        } else {
            setShowModal(false)
        };
    }, [visible])

    return(
        <Modal transparent  visible={showModal} animationType="slide" >
            {children}
        </Modal>
    );
}