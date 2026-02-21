# dApp Demo

This repository contains a simple dApp demo that showcases the use of a vault contract for depositing and withdrawing Runes (ERC20 tokens).

## Installation

To install the necessary dependencies for this project, run the following command:

```bash
pnpm install
```

## Development

The repository is a monorepo managed by [pnpm](https://pnpm.io/) and consists of the following packages:

- `contracts`: Contains the smart contracts for the dApp.
- `dapp`: Contains the frontend application that interacts with the smart contracts.

### Compiling and deploying contracts

Please read the [contracts README](packages/contracts/README.md) for instructions on how to compile and deploy the smart contracts.

### Running the dApp

To run the dApp, navigate to the `dapp` package and start the development server:

```bash
cd apps/dapp
pnpm dev
```

### Interacting with the dApp

Once the dApp is running, you can interact with it through your web browser. The dApp allows you to deposit and withdraw Runes (ERC20 tokens) from the vault contract.

#### Pre-requisites

Ensure you have Runes in your wallet and they have been added to the MIDL ecosystem.

1. Install the [XVerse wallet](https://xverse.app/) to manage your Runes and connect to the dApp.
2. Get tBTC from the [MIDL Faucet](https://faucet.staging.midl.xyz/).
3. Etch (mint) Runes with [MIDL Token Minter](https://runes.midl.xyz/)

##### Steps to interact with the dApp

1. Open your browser and navigate to `http://localhost:3000`.
2. Connect your wallet (e.g., XVerse).
3. Use the dApp to deposit and withdraw Runes (ERC20 tokens) from the vault.
4. You can view the transaction history on (Mempool)(http://mempool.staging.midl.xyz) and on the [MIDL Explorer](https://blockscout.staging.midl.xyz/).


---


## What this demo proves (MIDL VibeHack)
- **Xverse wallet connection** (Regtest)
- **User-triggered action in UI** (Add Rune / Approve / Deposit attempt)
- **On-chain confirmation with tx hash** (Blockscout proof)
- UI surfaces proof / errors (proof-first UX)

## On-chain Proof (Blockscout)

Wallet (EOA):
- https://blockscout.staging.midl.xyz/address/0xc6e10ff529fb5BB71dFF357984CBcDC398572729

Vault contract:
- https://blockscout.staging.midl.xyz/address/0x17f670d63F93BD7bF061Bc693E65a359BF9C46d8

Rune token (ERC20 representation on MIDL):
- https://blockscout.staging.midl.xyz/address/0xeDc861C4A8b940e5E141578399dD7773E1162374

Transactions:
- https://blockscout.staging.midl.xyz/tx/0x13626b9dc026617c6604a342a5b47ce976ff993bb1ab79202f751f2fe3df8f49
- https://blockscout.staging.midl.xyz/tx/0x4b974e23f3d3ea50991a438b9c099252a64b84c5f67a78b65ce744a8baf44a8e
