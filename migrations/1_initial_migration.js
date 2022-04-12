const Migrations = artifacts.require("Migrations");
const DaiTokenMock= artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
    await deployer.deploy(Migrations);
    await artifacts.require(DaiTokenMock);
    const tokenMock = await DaiTokenMock.deployed()
    // Mint 1000 Dai Tokens for the deployer
    await tokenMock.mint(
        '0x2C6f53712777438105B88Aa3cA8bb8c405F72f66'
        '1000000000000000000000'
    )
};
