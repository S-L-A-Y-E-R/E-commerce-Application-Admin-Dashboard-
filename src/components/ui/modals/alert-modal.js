'use client';

import { useEffect, useState } from "react";
import Modal from "../modal";
import { Button } from "../button";

const AlertModal = ({ isOpen, onClose, onConfirm, loading }) => {
    const [isMounted, setIsMountes] = useState(false);

    useEffect(() => {
        setIsMountes(true);
    }, []);

    if (!isMounted) return null;

    return (
        <Modal
            title={'Are you sure?'}
            onClose={onClose}
            isOpen={isOpen}
            description={'This action can not be undone'}
        >
            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                    disabled={loading}
                    variant={'outline'}
                    onClick={onClose}
                >
                    Cancel
                </Button>
                <Button
                    disabled={loading}
                    variant='destructive'
                    onClick={onConfirm}
                >
                    Continue
                </Button>
            </div>

        </Modal>
    );
}

export default AlertModal;