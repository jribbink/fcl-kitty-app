import styles from '../styles/cards.module.css'
import Kitty from "../models/Kitty"
import FlowIcon from "assets/flow.png"
import Image from "next/image"

//@ts-ignore
import * as fcl from '@onflow/fcl'

type KittyItemProps = {
    kitty: Kitty
}

export default ({kitty}: KittyItemProps) => {
    const kittyCardStyles = {
        backgroundColor: kitty.color,
        borderRadius: '15px'
    }

    const kittyClick = () => {
        alert("What should FCL do?")
    }


    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 p-4">
            <div className={"position-relative shadow " + styles['kitty-card']} style={kittyCardStyles} onClick={kittyClick}>
                <div className={"d-flex flex-column justify-content-center " + styles['kitty-card-overlay']}>
                    <div className='d-flex flex-row justify-content-center'>
                        <button className='btn btn-success' style={{fontSize: '1.5em'}}>Purchase</button>
                    </div>
                </div>
                <span className="mt-2 p-3 d-flex justify-content-center position-absolute w-100">
                    <div className="d-flex bg-white rounded-pill p-2">
                    <Image src={FlowIcon} height="20px" width="20px" objectFit="contain" className="align-middle"></Image>
                        <span className="ps-1">{kitty.price} FLOW</span>
                    </div>
                </span>
                <div className="d-flex flex-column p-2 pt-4">
                    <img src={kitty.url} className="rounded-pill" style={{marginBottom: '-40px'}}></img>
                    <hr />
                    <span className="p-2">{kitty.name}</span>
                </div>
            </div>
        </div>
    )
}