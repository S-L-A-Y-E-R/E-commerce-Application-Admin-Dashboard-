'use client'

import { useModal } from "@/hooks/use-modal";
import Modal from "../modal";

export const StoreModal = () => {
    const storeModal = useModal();

    return (
        <Modal
            title='New Modal'
            description='Totally different modal'
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            Dummy Body
        </Modal>
    );
};