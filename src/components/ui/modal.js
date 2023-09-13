'use client'

import {
    Dialog,
    DialogHeader,
    DialogContent,
    DialogTitle,
    DialogDescription
} from "./dialog";

const Modal = ({ title, description, children, isOpen, onClose }) => {
    const onChange = (open) => {
        if (!open) onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div>{children}</div>
            </DialogContent>
        </Dialog>
    );
};

export default Modal;