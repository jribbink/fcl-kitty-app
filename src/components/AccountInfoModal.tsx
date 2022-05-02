// @ts-ignore
import * as fcl from '@onflow/fcl'
import useCurrentUser from 'hooks/use-current-user'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

type AccountInfoModalProps = {
    show: boolean,
    onShowChange: (visibility: boolean) => void
}

export default ({ show, onShowChange }: AccountInfoModalProps) => {
    const currentUser: any = useCurrentUser()
    if(!currentUser) return null

    return (
        <Modal show={show} onHide={() => onShowChange(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Account Info</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Address: {currentUser.addr}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="danger" onClick={fcl.unauthenticate}>Log out</Button>
            </Modal.Footer>
        </Modal>
    )
}