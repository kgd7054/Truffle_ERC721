const Migrations = artifacts.require('Migrations');
const MyNFTs = artifacts.require('MyNFTs.sol');

module.exports = function (deployer) {
	deployer.deploy(Migrations);
	deployer.deploy(MyNFTs);
};
