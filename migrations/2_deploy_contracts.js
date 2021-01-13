const Migrations = artifacts.require("./TodoList.sol");

// Migrations are changing the `state` of the blockchain
// The number tells what order to deploy.
module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
