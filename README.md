# AINFT Avatars Mobile App 

![photo_2023-09-17 17 43 45](https://github.com/andreykobal/bitcoin-web3auth-ainft/assets/19206978/75c28444-bae8-45f9-813c-01551ce15d99)


## Introduction

Welcome to the  AINFT Mobile App GitHub repository. This repository contains the code for an Android/iOS app that allows users to seamlessly interact with AINFT avatars and manage their semi-custodial crypto wallet. Users can log in using various social logins like Google and Facebook, receive a small amount of tokens to cover gas fees, mint avatars, and interact with them. Additionally, users can copy their wallet address and export the passphrase to import the wallet into MetaMask for trading avatars on OpenSea or other marketplaces.

## Table of Contents

1. [What is an AINFT Avatar?](#what-is-an-ainft-avatar)
2. [AINFT Smart Contract](#ainft-smart-contract)
3. [Distribute Tokens Smart Contract](#distribute-tokens-smart-contract)
4. [MintNft Unity Script](#mintnft-unity-script)
5. [OpenAIChat Unity Script](#openaichat-unity-script)
6. [NFTStorage.js Script](#nftstoragejs-script)

![avatars](https://github.com/andreykobal/bitcoin-web3auth-ainft/assets/19206978/bc8c3035-679f-4367-b8d5-7ae047d3373a)


## What is an AINFT Avatar?


An AINFT avatar is a digital representation of a person or historical figure created using advanced artificial intelligence and technology. These avatars are more than just images; they encapsulate the essence of individuals, including their appearance, voice, mannerisms, and stories. Here's what you need to know:

- **Digital Time Capsules:** AINFT avatars serve as digital time capsules, preserving memories and identities for future generations.
- **Personal Legacy:** They enable descendants to interact with avatars of their ancestors, gaining insights into family histories and forging a sense of continuity.
- **Historical Figures:** AINFT avatars can bring historical figures to life, offering personalized interactions and immersive learning experiences.
- **Companionship:** In an increasingly isolated world, these avatars provide companionship and connection, offering solace and conversation.
- **Continuous Learning:** They redefine learning by enabling conversations with experts, like Einstein, and facilitating continuous growth.
- **Entertainment:** Artists and celebrities can create avatars for unique fan interactions, revolutionizing entertainment.
- **Cultural Heritage:** AINFT avatars preserve cultural traditions and ensure their accessibility and appreciation on a global scale.
- **Generational Understanding:** They bridge generational gaps by encouraging empathy, dialogue, and shared connections.

To dive deeper into the fascinating world of AINFT avatars, [read the full article](https://medium.com/@ailand/ainft-avatars-bridging-legacy-and-connection-in-the-digital-age-b3a3769e909c).

## AINFT Smart Contract

`contracts/AINFT.sol`

### Contract Details

- **Name**: AINFT
- **Inheritance**: ERC721Enumerable, ContextMixin, NativeMetaTransaction, Ownable
- **Description**: This smart contract represents the AINFT avatars. Users can mint new avatars and check their balance.
- **Functions**:
  - `mintItem(string memory tokenURI)`: Allows users to mint a new avatar with the given token URI.
  - `getBalance(address wallet)`: Returns the balance of avatars owned by a specific wallet.
  - `getTokensOfOwner(address owner)`: Returns the avatars owned by a specific owner in JSON format.

### Contract Usage

- The `mintItem` function is used to mint new avatars with a token URI.
- The `getBalance` function returns the balance of avatars owned by a specific wallet.
- The `getTokensOfOwner` function returns the avatars owned by a specific owner in JSON format.

### Example Usage

```solidity
// Mint a new avatar
uint256 newItemId = mintItem("https://tokenURI.example/avatar123");

// Check the balance of avatars owned by a wallet
uint256 balance = getBalance(walletAddress);

// Get the avatars owned by an owner in JSON format
string memory tokens = getTokensOfOwner(ownerAddress);
```

## Distribute Tokens Smart Contract

`contracts/Distributor.sol`

### Contract Details

- **Name**: Distributor
- **Description**: This smart contract allows the owner to distribute tokens to other addresses.

### Functions

- `distribute(address payable _recipient)`: Allows the owner to distribute tokens to the specified recipient.
- `withdraw()`: Allows the owner to withdraw the contract's balance.

### Contract Usage

- The `distribute` function is used by the owner to distribute tokens to a recipient.
- The `withdraw` function is used by the owner to withdraw the contract's balance.

### Example Usage

```solidity
// Distribute tokens to a recipient
distribute(recipientAddress);

// Withdraw the contract's balance
withdraw();
```

## MintNft Unity Script

`web3auth-unity/Assets/Scripts/Web3Auth/MintNft.cs`

### Overview

The `MintNft` Unity script allows users to log in, mint AINFT avatars, and check their avatar balances. It interacts with the AINFT smart contract on the Ethereum network.

### Key Functions

- `login()`: Initiates the login process using social logins like Google.
- `onLogin(Web3AuthResponse response)`: Handles the user's login response and initializes the Web3 instance.
- `mintNft()`: Mints a new AINFT avatar.
- `GetTokensOfOwner()`: Retrieves the avatars owned by the user.
- `ProcessSentenceQueue()`: Processes sentences for speech synthesis.

### Example Usage

```csharp
// Login with Google
login();

// Mint a new AINFT avatar
mintNft();

// Get avatars owned by the user
GetTokensOfOwner();
```

## OpenAIChat Unity Script

`web3auth-unity/Assets/Scripts/AiNft/OpenAIChat.cs`

### Overview

The `OpenAIChat` Unity script enables users to engage in a conversation with an AI character, Aurelia Everwood. It utilizes the OpenAI GPT-3.5 model to generate responses and offers speech synthesis capabilities for a more immersive experience.

### Key Functions

- `SendMessage(string message)`: Sends a message to the AI character and processes responses.
- `ProcessSentenceQueue()`: Manages the queue of sentences for speech synthesis.
- `TrimConversationContext()`: Ensures the conversation context does not exceed the maximum length.
- `initialGreeting()`: Initiates the conversation with an initial greeting.
- `setVoiceConfig(string voice)`: Sets the voice configuration for speech synthesis.

### Example Usage

```csharp
// Send a message to the AI character
SendMessage("Hello, Aurelia!");

// Set the voice configuration
setVoiceConfig("en-US_AllisonV3Voice");

// Start the conversation with an initial greeting
initialGreeting();
```

## NFTStorage.js Script

`nft-storage/upload-script.js`

### Overview

The `NFTStorage.js` script is used to upload NFT files and generate metadata for AINFT avatars. It utilizes the NFT.Storage API to store files and metadata on IPFS.

### Key Functions

- `uploadNFTFiles()`: Uploads NFT files (GLB and JPG) and generates metadata for avatars.
- `readJSONFile(filePath)`: Reads the content of a JSON file.

### Example Usage

```javascript
// Upload NFT files and generate metadata
uploadNFTFiles();
```

## Conclusion

This documentation provides an overview of the key components in the AINFT Mobile App GitHub repository. Developers can use this information to understand and work with the codebase for building and improving the AINFT mobile application.
