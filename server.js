const express = require('express');
const app = express();
process.env.HARDHAT_NETWORK = 'goerli';
const hre = require("hardhat");
const PORT = process.env.PORT || 3000;



async function distributeToAddress(recipient) {
    // Reset HRE and set it to use Goerli

    const [owner] = await hre.ethers.getSigners();

    const DISTRIBUTOR_ADDRESS = "0x6E30B70401E1655778aA9E91fAccEB459e50B5Da";
    const Distributor = await hre.ethers.getContractFactory("Distributor");
    const distributor = Distributor.attach(DISTRIBUTOR_ADDRESS);

    const gasPrice = await hre.ethers.provider.getGasPrice();

    const transactionResponse = await distributor.distribute(recipient, { 
        value: hre.ethers.utils.parseEther("0.0001"),
        gasLimit: 500000, 
        gasPrice: gasPrice.add(gasPrice.div(2))
    });

    // Wait for the transaction to be mined
    const receipt = await transactionResponse.wait();

    return {
        transactionHash: transactionResponse.hash,
        blockNumber: receipt.blockNumber
    };
}

app.get('/claim/:recipientAddress', async (req, res) => {
    try {
        const recipientAddress = req.params.recipientAddress;

        // Validate Ethereum address
        if (!hre.ethers.utils.isAddress(recipientAddress)) {
            return res.status(400).json({ error: 'Invalid Ethereum address.' });
        }

        const result = await distributeToAddress(recipientAddress);
        res.json({
            message: `0.0001 ETH sent to: ${recipientAddress}`,
            transactionHash: result.transactionHash,
            blockNumber: result.blockNumber
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error processing the transaction.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
