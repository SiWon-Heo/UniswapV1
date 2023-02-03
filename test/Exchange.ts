import { ethers } from "hardhat"
import { expect } from "chai";
import { BigNumber } from "ethers";
import { Exchange } from "../typechain-types/contracts/Exchange"
import { Token } from "../typechain-types/contracts/Token";


const toWei = (value: number) => ethers.utils.parseEther(value.toString());
const toEth = (value: BigNumber) => ethers.utils.formatEther(value);
const getBalance = ethers.provider.getBalance;

describe("Exchange", () => {
    let owner: any;
    let user: any;
    let exchange: Exchange;
    let token: Token;

    beforeEach(async () => {
        [owner, user] = await ethers.getSigners();

        const TokenFactory = await ethers.getContractFactory("Token");
        token = await TokenFactory.deploy("GrayToken", "GRAY", toWei(50));
        await token.deployed();

        const ExchangeFactory = await ethers.getContractFactory("Exchange");
        exchange = await ExchangeFactory.deploy(token.address);
        await exchange.deployed();
    });

    describe.skip("addLiquidity", async () => {
        it("add Liquidity", async () => {
            await token.approve(exchange.address, toWei(500));
            await exchange.addLiquidity(toWei(500), { value: toWei(1000) });
            expect(await getBalance(exchange.address)).to.equal(toWei(1000));
            expect(await token.balanceOf(exchange.address)).to.equal(toWei(500));

            await token.approve(exchange.address, toWei(100));
            await exchange.addLiquidity(toWei(100), { value: toWei(200) });
            expect(await getBalance(exchange.address)).to.equal(toWei(1200));
            expect(await token.balanceOf(exchange.address)).to.equal(toWei(600));
        });
    });
    describe.skip("removeLiquidity", async () => {
        it("remove Liquidity", async () => {
            await token.approve(exchange.address, toWei(500));
            await exchange.addLiquidity(toWei(500), { value: toWei(1000) });
            expect(await getBalance(exchange.address)).to.equal(toWei(1000));
            expect(await token.balanceOf(exchange.address)).to.equal(toWei(500));

            await token.approve(exchange.address, toWei(100));
            await exchange.addLiquidity(toWei(100), { value: toWei(200) });
            expect(await getBalance(exchange.address)).to.equal(toWei(1200));
            expect(await token.balanceOf(exchange.address)).to.equal(toWei(600));

            await exchange.removeLiquidity(toWei(600));
            expect(await getBalance(exchange.address)).to.equal(toWei(600));
            expect(await token.balanceOf(exchange.address)).to.equal(toWei(300));

        });
    });
    describe.skip("swap", async () => {
        it("swap", async () => {
            await token.approve(exchange.address, toWei(10000));
            await exchange.addLiquidity(toWei(1000), { value: toWei(1000) });

            await exchange.connect(user).ethToTokenSwap(toWei(1), { value: toWei(1) });

            expect(await getBalance(exchange.address)).to.equal(toWei(1001));
            expect(await token.balanceOf(exchange.address)).to.equal(toWei(999));
            expect(await token.balanceOf(user.address)).to.equal(toWei(1));
        });
    });
    describe.skip("getOutputAmount", async () => {
        it("correct getOutputAmount", async () => {
            await token.approve(exchange.address, toWei(4000));
            // 4:1
            await exchange.addLiquidity(toWei(4000), { value: toWei(1000) });

            // 1ETH = ?GRAY
            console.log(toEth(await exchange.getOutputAmount(toWei(1), getBalance(exchange.address), token.balanceOf(exchange.address))));
        });
    });
    describe("swapWithFee", async () => {
        it("correct swapWithFee", async () => {
            await token.approve(exchange.address, toWei(50));

            // LP ETH 50, GRAY 50
            await exchange.addLiquidity(toWei(50), { value: toWei(50) });

            // User swap ETH 30, GRAY 18.63xx
            await exchange.connect(user).ethToTokenSwap(toWei(18), { value: toWei(30) });

            // after swap: user GRAY 18.63xx
            expect(toEth((await token.balanceOf(user.address))).toString()).to.equal("18.632371392722710163");

            // remove liquidity
            await exchange.removeLiquidity(toWei(50));

            // owner: 50 - 18.63xx = 31.36xx
            expect(toEth(await token.balanceOf(owner.address)).toString()).to.equal("31.367628607277289837");
        });
    });
})