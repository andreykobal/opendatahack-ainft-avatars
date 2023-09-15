const hre = require("hardhat");

async function main() {
    const [owner] = await hre.ethers.getSigners();

    // Replace with your deployed contract address:
    const DISTRIBUTOR_ADDRESS = "0x6E30B70401E1655778aA9E91fAccEB459e50B5Da";
    const Distributor = await hre.ethers.getContractFactory("Distributor");
    const distributor = Distributor.attach(DISTRIBUTOR_ADDRESS);

    // Change the recipient address here:
    const recipient = "0x77df32b40A8fc6B1Fad487ECe1C9B517A96c562D";

    const gasPrice = await hre.ethers.provider.getGasPrice();

    const transactionResponse = await distributor.distribute(recipient, { 
        value: hre.ethers.utils.parseEther("0.0001"),
        gasLimit: 500000,  // This is just an arbitrary high limit to ensure the transaction doesn't fail due to gas limits. Adjust accordingly.
        gasPrice: gasPrice.add(gasPrice.div(2))  // Adding 50% on top of the current gas price for faster confirmation
    });

    console.log("Transaction hash:", transactionResponse.hash);

    // Wait for the transaction to be mined
    const receipt = await transactionResponse.wait();
    console.log("Transaction was mined in block:", receipt.blockNumber);

    console.log("0.0001 ETH sent to:", recipient);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
