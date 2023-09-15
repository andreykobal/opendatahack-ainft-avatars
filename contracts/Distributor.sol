// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Distributor {
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    function distribute(address payable _recipient) external payable onlyOwner {
        require(msg.value == 0.0001 ether, "Send 0.0001 ETH");
        _recipient.transfer(0.0001 ether);
    }

    function withdraw() external onlyOwner {
        owner.transfer(address(this).balance);
    }
}
