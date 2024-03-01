const MyToken = artifacts.require("MyToken");

module.exports = (deployer) => {
    deployer.deploy(MyToken, "Waifu", "WAIFU", 69000000);
};
