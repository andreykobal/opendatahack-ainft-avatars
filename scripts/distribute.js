const hre = require("hardhat");

async function main() {
    const [owner] = await hre.ethers.getSigners();

    // Replace with your deployed contract address:
    const DISTRIBUTOR_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const Distributor = await hre.ethers.getContractFactory("Distributor");
    const distributor = Distributor.attach(DISTRIBUTOR_ADDRESS);

    // Change the recipient address here:
    const recipient = "0x77df32b40A8fc6B1Fad487ECe1C9B517A96c562D";
    await distributor.distribute(recipient, { value: hre.ethers.utils.parseEther("0.0001") });

    console.log("0.0001 ETH sent to:", recipient);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
