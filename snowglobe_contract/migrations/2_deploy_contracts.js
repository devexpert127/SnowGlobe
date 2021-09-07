const SnowGlobe = artifacts.require("SnowGlobe");
const initMessage = "Snow Globe!";

module.exports = function(deployer) {
  deployer.deploy(SnowGlobe, initMessage);
};