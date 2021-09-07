import React from "react";

const SnowFooter = () => {
  return (
    <footer id="footer">
      <div className="wrapper">
        <div className="left">
          <div className="logo"></div>
          <h2>Snow Globe</h2>
        </div>
        <a href="https://ropsten.etherscan.io/address/0x5432d6e992e81dcb3b605810a136ba13e7ea152c#code" alt="Etherscan Link">Our Smart Contract</a>
        <div className="social">
          <a href="http://twitter.com/snowglobenft" target="_blank">
            <img src="./assets/footer-twitter.svg" alt=""/>
          </a>
          <a href="https://discord.gg/6HsRbDRtCa" target="_blank"><img src="./assets/footer-discord.svg" alt=""/></a>
          <a href="https://opensea.io/collection/snowglobenft" target="_blank"><img src="./assets/footer-opensea.svg" alt=""/></a>
        </div>
      </div>
    </footer>
  );
}

export default SnowFooter;
