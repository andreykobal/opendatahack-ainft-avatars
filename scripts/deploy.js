const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Distributor = await hre.ethers.getContractFactory("Distributor");
    const distributor = await Distributor.deploy();
    await distributor.deployed();

    console.log("Distributor contract deployed to:", distributor.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
