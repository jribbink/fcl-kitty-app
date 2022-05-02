// @ts-ignore
import * as fcl from "@onflow/fcl"
import Image from "next/image";
import { Component, useEffect, useState } from "react";
import KittyImage from "assets/kitty-eth.svg"
import ConnectWalletButton from "./ConnectWalletButton";
import UserMenu from "./UserMenu";

type HeaderProps = {}

const headerStyles = {
    height: '90px'
}

export default (props: HeaderProps) => {
    const [user, setUser] = useState({loggedIn: null})

    useEffect(() => fcl.currentUser.subscribe(setUser), []) 

    return (
        <div className="d-flex flex-row p-3" style={headerStyles}>
            <Image src={KittyImage} height="58" width="58"></Image>
            <div className="ms-auto align-self-center">
                { user.loggedIn ? <UserMenu user={user} /> : <ConnectWalletButton /> }
            </div>
        </div>
    )
}