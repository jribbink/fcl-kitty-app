import { useFlowBalance } from "hooks/use-flow-balance"
import FlowImage from 'assets/flow.png'
import Image from "next/image"

type UserInfoProps = {
    user: any
}

export default ({user}: UserInfoProps) => {
    const balance = useFlowBalance(user.addr)

    return (
        <div className="bg-white p-3 rounded-pill shadow d-flex flex-row align-items-center">
            <span className="me-2">{balance}</span>
            <Image src={FlowImage} width="20" height="20" ></Image>
        </div>
    )
}