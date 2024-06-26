import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";
// import lineaData from './utils/eip155-59141.json';

const projectId:string = process.env.WALLET_CONNECT_PROJECT_ID!;

const network = {
	chainId: 10,
	name: 'OP Mainnet',
	currency: 'ETH',
	explorerUrl: 'https://explorer.optimism.io',
	rpcUrl: 'https://mainnet.optimism.io'
  }

const chains:any[] = [network]!;

const metadata = {
	name: "Froggy Topia",
	description: 'Froggy Topia app',
	url: "https://web3modal.com",
	icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const ethersConfig = defaultConfig({ metadata });

createWeb3Modal({
	ethersConfig,
	projectId,
	chains,
	themeVariables: {
		'--w3m-color-mix': '#88AA11',
		'--w3m-color-mix-strength': 40
	},
	defaultChain: network,
	includeWalletIds: ['c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
		'4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
	],
	featuredWalletIds: ['c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
		'4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
	],
	tokens: {
		[10]: {
		  address: '0x4200000000000000000000000000000000000006',
		  image: "https://s2.coinmarketcap.com/static/img/coins/64x64/2396.png"
		},
	}
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
