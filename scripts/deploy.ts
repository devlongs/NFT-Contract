import { ethers } from "hardhat";

async function main() {
  const Longs = await ethers.getContractFactory("Longs");
  const LongsNFT = await Longs.deploy();

  await LongsNFT.deployed();

  console.log(`Longs NFT deployed to ${LongsNFT.address}`); // 0x39ef98a05b53e45a081d87832cffdc5dc6009d66
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
