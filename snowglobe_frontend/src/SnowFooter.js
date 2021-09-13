import React from "react";

const SnowFooter = () => {
  return (
    <footer id="footer">
      <div className="wrapper">
        <div className="left">
          <div className="logo"></div>
          <h2>Snow Globes</h2>
        </div>
        <a href=" https://ropsten.etherscan.io/address/0x03F111c6f4A88773e1AD80CF1F06366d32FE8A2b#code" alt="Etherscan Link">Our Smart Contract</a>
        <div className="social">
          <a href="https://twitter.com/snowglobesnft" target="_blank">
            <img src="./assets/footer-twitter.svg" alt=""/>
          </a>
          <a href="https://discord.gg/5PGqxTveQv" target="_blank"><img src="./assets/footer-discord.svg" alt=""/></a>
          <a href="https://opensea.io/collection/snowglobenft" target="_blank"><img src="./assets/footer-opensea.svg" alt=""/></a>
        </div>
      </div>
    </footer>
  );
}

export default SnowFooter;
