import { Link } from "react-router-dom";

export default function Post() {
    return (
        <div className="post">
            <div className="image">
                <img src="https://blog.hubbleprotocol.io/content/images/size/w1200/2023/03/How-to-set-up-Backpack-backpack-crypto-wallet-xnft-backpack-backpack-solana-wallet-xnft-solana-wallet-install-backpack-nft-wallet-hubble-protocol.png" alt="" />
            </div>
            <div className="content">
                <h2>How to Set Up xNFT Backpack Solana Wallet</h2>
                <p className="info">
                    <Link to="/author" className="author">
                        uv
                    </Link>
                    <time>2023-03-27 00:12</time>
                </p>
                <p className="summary">
                    You need a wallet to interact with decentralized
                    finance (DeFi) protocols on Solana.
                    The multi-chain xNFT Backpack wallet is
                    one of the most user-friendly and advanced Solana wallets available.
                </p>
            </div>
        </div>
    )
}
