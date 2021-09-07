import React from "react";

const SnowMint = () => {
        return (
                <section id="mint">
                <div className="container">
                   <div className="numberminted">
                      <div className="number">10000/10,000</div>
                      <div className="text">Snow Globe minted</div>
                   </div>
                   <div className="settings soldout">
                      <select>
                         <option value="1">1</option>
                         <option value="2">2</option>
                         <option value="3">3</option>
                         <option value="4">4</option>
                         <option value="5">5</option>
                      </select>
                      <a href="https://opensea.io/collection/snowglobenft" className="cta soldout" style={{ textDecoration: "none"}}>View on Opensea</a>
                   </div>
                </div>
             </section>

);
}

export default SnowMint;