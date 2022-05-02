import Kitty from "models/Kitty"
import { Button, Modal } from "react-bootstrap"

type KittyModalProps = {
    show: boolean,
    onShowChange: (visibility: boolean) => void,
    kitty: Kitty
}

export default ({show, onShowChange, kitty}: KittyModalProps) => {
    const purchaseNFT = () => {

    }

    return (
        <Modal show={show} onHide={() => onShowChange(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{kitty.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{kitty.price}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={purchaseNFT}>Purchase</Button>
            </Modal.Footer>
        </Modal>
    )
}