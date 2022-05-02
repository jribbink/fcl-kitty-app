// @ts-ignore
import * as fcl from "@onflow/fcl"
import 'bootstrap/dist/css/bootstrap.css'

type ConnectWalletButtonProps = {

}

export default (props: ConnectWalletButtonProps) => {
    return (
        <button onClick={fcl.logIn} className="btn btn-success m-1">
            Connect Wallet
        </button>
    )
}