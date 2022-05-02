// @ts-ignore
import * as fcl from '@onflow/fcl'
import { useEffect } from 'react'

const resolver = async () => ({
    appIdentifier: "Awesome App (v0.0)",
    nonce: "3037366134636339643564623330316636626239323161663465346131393662",
})

export default function useConfig() {
    useEffect(() => {
        if(!process.env.LOCAL) {
            fcl.config({
                env: "testnet",
                "accessNode.api": "https://access-testnet.onflow.org",
                "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
                "fcl.eventsPollRate": 2500,
                "0xLockedTokens": "0x95e019a17d0e23d7",
                "0xFungibleToken": "0x9a0766d93b6608b7",
                "0xFUSD": "0xe223d8a629e49c68",
              })
              return
        }

        const config = fcl.config()

        config
            .put("app.detail.title", "Kitten App")
            .put("app.detail.icon", "https://placekitten.com/g/200/200")
            .put("service.OpenID.scopes", "email")
            

        for (let key in process.env) {
            if(key.startsWith("0x")){
                config.put(key, process.env['key'])
            }
        }

        if(process.env.LOCAL) {
            config
                .put("env", "local")
                .put("debug.accounts", true)
                .put("logger.level", 2)
                .put("accessNode.api", "http://localhost:8080")
                .put("discovery.wallet", "http://localhost:8701/fssscl/authn")
                .put("discovery.wallet.method.default", "IFRAME/RPC")
                .put("fcl.accountProof.resolver", resolver)
        } else {
            config
                .put("debug.accounts", true)
                .put("logger.level", 2)
                .put("fcl.accountProof.resolver", resolver)
                // testnet
                .put("env", "testnet")
                .put("accessNode.api", "https://rest-testnet.onflow.org")
                .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn")
        }
    }, [])
}