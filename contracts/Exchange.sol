//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./interfaces/IFactory.sol";
import "./interfaces/IExchange.sol";

contract Exchange is ERC20 {
    IERC20 token;
    IFactory factory;

    // 로그 찍기
    event TokenPurchase(
        address indexed buyer,
        uint256 indexed ethSold,
        uint256 indexed tokensBought
    );
    event EthPurchase(
        address indexed buyer,
        uint256 indexed ethSold,
        uint256 indexed tokensBought
    );
    event AddLiquidity(
        address indexed provider,
        uint256 indexed ethAmount,
        uint256 indexed tokenAmount
    );
    event RemoveLiquidity(
        address indexed provider,
        uint256 indexed ethAmount,
        uint256 indexed tokenAmount
    );

    constructor(address _token) ERC20("Gray Uniswap V2", "GUNI-V2") {
        token = IERC20(_token);
        factory = IFactory(msg.sender);
    }

    function addLiquidity(uint256 _maxTokens) public payable {
        uint256 totalLiquidity = totalSupply();
        if (totalLiquidity > 0) {
            uint256 ethReserve = address(this).balance - msg.value;
            uint256 tokenReserve = token.balanceOf(address(this));
            uint256 tokenAmount = (msg.value * tokenReserve) / ethReserve;
            require(_maxTokens >= tokenAmount);
            token.transferFrom(msg.sender, address(this), tokenAmount);
            uint256 liquidityMinted = (totalLiquidity * msg.value) / ethReserve;
            _mint(msg.sender, liquidityMinted);
        } else {
            uint256 tokenAmount = _maxTokens;
            uint256 initialLiquidity = address(this).balance;
            _mint(msg.sender, initialLiquidity);
            token.transferFrom(msg.sender, address(this), tokenAmount);
        }
        // token.transferFrom(msg.sender, address(this), _maxTokens);
    }

    function removeLiquidity(uint256 _lpTokenAmount) public {
        require(_lpTokenAmount > 0);
        uint256 totalLiquidity = totalSupply();
        uint256 ethAmount = (_lpTokenAmount * address(this).balance) /
            totalLiquidity;
        uint256 tokenAmount = (_lpTokenAmount *
            token.balanceOf(address(this))) / totalLiquidity;

        _burn(msg.sender, _lpTokenAmount);
        payable(msg.sender).transfer(ethAmount);
        token.transfer(msg.sender, tokenAmount);
    }

    // ETH -> ERC20
    function ethToTokenSwap(uint256 _minTokens) public payable {
        // // calculate amount out (zero fee)
        // uint256 outputAmount = getOutputAmountWithFee(
        //     msg.value,
        //     address(this).balance - msg.value,
        //     token.balanceOf(address(this))
        // );
        // require(outputAmount >= _minTokens, "Insufficient output Amount");
        // // transfer token out
        // IERC20(token).transfer(msg.sender, outputAmount);
        ethToToken(_minTokens, msg.sender);
    }

    function ethToTokenTransfer(uint256 _minTokens, address _recipient)
        public
        payable
    {
        ethToToken(_minTokens, _recipient);
    }

    function ethToToken(uint256 _minTokens, address _recipient) private {
        // calculate amount out (zero fee)
        uint256 outputAmount = getOutputAmountWithFee(
            msg.value,
            address(this).balance - msg.value,
            token.balanceOf(address(this))
        );
        require(outputAmount >= _minTokens, "Insufficient output Amount");
        emit TokenPurchase(_recipient, msg.value, outputAmount);
        // transfer token out
        IERC20(token).transfer(_recipient, outputAmount);
    }

    // ERC20 -> ETH
    function tokenToEthSwap(uint256 _tokenSold, uint256 _minEth) public {
        uint256 outputAmount = getOutputAmount(
            _tokenSold,
            token.balanceOf(address(this)),
            address(this).balance
        );
        require(outputAmount >= _minEth, "Insufficient output Amount");
        IERC20(token).transferFrom(msg.sender, address(this), _tokenSold);
        payable(msg.sender).transfer(outputAmount);
    }

    function tokenToTokenSwap(
        uint256 _tokenSold,
        uint256 _minTokenBought,
        uint256 _minEthBought,
        address _tokenAddress
    ) public {
        address toTokenExchangeAddress = factory.getExchange(_tokenAddress);
        // ERC20 -> ETH
        // calculate amount out(zero fee)
        uint256 ethOutputAmount = getOutputAmountWithFee(
            _tokenSold,
            token.balanceOf(address(this)),
            address(this).balance
        );
        require(ethOutputAmount >= _minEthBought, "Insufficient output Amount");

        // transfer token out
        IERC20(token).transferFrom(msg.sender, address(this), _tokenSold);

        // 새로운 인터페이스 필요
        // ETH -> ERC20
        IExchange(toTokenExchangeAddress).ethToTokenTransfer{
            value: ethOutputAmount
        }(_minTokenBought, msg.sender);
    }

    function getPrice(uint256 inputReserve, uint256 outputReserve)
        public
        pure
        returns (uint256)
    {
        uint256 numerator = inputReserve;
        uint256 denominator = outputReserve;
        return numerator / denominator;
    }

    function getOutputAmount(
        uint256 inputAmount,
        uint256 inputReserve,
        uint256 outputReserve
    ) public pure returns (uint256) {
        uint256 numerator = outputReserve * inputAmount;
        uint256 denominator = inputReserve + inputAmount;
        return numerator / denominator;
    }

    function getOutputAmountWithFee(
        uint256 inputAmount,
        uint256 inputReserve,
        uint256 outputReserve
    ) public pure returns (uint256) {
        uint256 inputAmountWithFee = inputAmount * 99;
        uint256 numerator = outputReserve * inputAmountWithFee;
        uint256 denominator = inputReserve * 100 + inputAmountWithFee;
        return numerator / denominator;
    }
}
