import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <Button primary onClick={handleClose}>Yes</Button>;
    const modal = <Modal 
        onClose={handleClose}
        actionBar={actionBar}>
        <p>Do you want to close this modal</p>
    </Modal>;

    return (
        <div>
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && modal}
        </div>
    );
}

export default ModalPage;