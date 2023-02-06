//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

interface IExchange {
    function getExchange(address _token) external view returns (address);

    function ethToTokenSwap(uint256 _minTokens) external payable;

    function ethToTokenTransfer(uint256 _minTokens, address _recipient)
        external
        payable;
}
