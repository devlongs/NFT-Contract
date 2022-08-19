import { ethers } from "hardhat";

// CONTRACT DEPLOYED TO: 0x39ef98a05b53e45a081d87832cffdc5dc6009d66
// OPENSEA LINK TO NFT: https://testnets.opensea.io/assets/rinkeby/0x39ef98a05b53e45a081d87832cffdc5dc6009d66/0

async function main() {
  const Longs = await ethers.getContractFactory("Longs");
  const LongsNFT = Longs.attach(
    "0x39ef98a05b53e45a081d87832cffdc5dc6009d66"
  );

  const NFTName = await LongsNFT.name();
  console.log(NFTName);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
