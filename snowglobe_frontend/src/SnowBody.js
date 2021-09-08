import React from "react";

const SnowBody = () => {
    return (
        <div className="container">
        <section id="about">
           <div className="content">
              <h2>What is this?</h2>
              <p>Snow Globes is a collection of programmatically, randomly generated NFTs on the Ethereum blockchain. The collection consists of 10,000 randomly assembled animated Snow Globess from over 10,00k total options.<br/> Each Snow Globes member is comprised of a globe quality, background, falling snow, themes, and geo locations.</p>
           </div>
           <img src="./assets/img3.png" alt="Various Snow Globes" />
        </section>
        <section id="gallery">
          <img className='normal-img' src="./assets/img1.png" alt="Character N1 Snow Globes"/>
          <img className='normal-img' src="./assets/img2.png" alt="Character N2 Snow Globes"/>
          <img className='normal-img' src="./assets/img3.png" alt="Character N3 Snow Globes"/>
          <img className='normal-img' src="./assets/img4.png" alt="Character N4 Snow Globes"/>
          <img className='normal-img' src="./assets/img5.jpg" alt="Character N5 Snow Globes"/>
          <img className='normal-img' src="./assets/img6.jpg" alt="Character N6 Snow Globes"/>
        </section>
        <section id="faq">
           <div className="question faq1">
              <h2>Who?</h2>
              <p>Snow Globes was created by a team of animators / devs</p>
           </div>
           <div className="question faq2">
              <h2>How much?</h2>
              <p>Every Snow Globes NFT costs the same flat rate 👉 0.04 Ξ</p>
              <span className="royalty">Secondary sales royalty:</span> 2.5% to Snow Globes artists / 2.5% to Opensea 
           </div>
           <div className="question faq3">
              <h2>How many?</h2>
              <p>There will only ever be 7840 Snow Globes NFTs in this collection. 6840 will be released simultaneously on the drop date. 1000 will be held back for giveaways and unlockable rewards for Snow Globes members.</p>
           </div>
           <div className="question faq4">
              <h2>Where?</h2>
              <p>You will be able to mint Snow Globes NFTs on this website on Aug 2nd. If you miss the mint secondary sales will be available on Opensea.</p>
           </div>
        </section>
        <section id="gallery-inline">
           <img className='small-img' src="./assets/img1.png" alt="Character N1 Snow Globes"/>
          <img className='small-img' src="./assets/img2.png" alt="Character N2 Snow Globes"/>
          <img className='small-img' src="./assets/img3.png" alt="Character N3 Snow Globes"/>
          <img className='small-img' src="./assets/img4.png" alt="Character N4 Snow Globes"/>
          <img className='small-img' src="./assets/img5.jpg" alt="Character N5 Snow Globes"/>
          <img className='small-img' src="./assets/img6.jpg" alt="Character N6 Snow Globes"/>
        </section>
        <section id="roadmap">
           <h2>Roadmap?</h2>
           <p>Release date 👉 18th September</p>
           <img src="./assets/sketch_arrow_1.gif" alt="Arrow"/>
           <div className="step">
              <p className="percent">Sell out 50%</p>
              <p>Unlocks a community exclusive raffle to win some Ethereum!</p>
           </div>
           <img src="./assets/sketch_arrow_2.gif" className="left" alt="Arrow"/>
           <div className="step">
              <p className="percent">Sell out 75%</p>
              <p>Unlocks another community exclusive raffle to win some more Ethereum!</p>
           </div>
           <img src="./assets/sketch_arrow_2.gif" className="right" alt="Arrow"/>
           <div className="step-right-stars">
              <p className="percent">Sell out 100%</p>
              <p>We reward the Snow Globes with some of the rarest Snow Globes NFTs</p>
           </div>
           <img src="./assets/sketch_arrow_2.gif" className="left" alt="Arrow"/>
           <div className="step-left-stars">
              <p className="percent">Continue the Snow Globes universe.</p>
              <p>With our own smart contract Snow Globes will be able to claim free NFTs from future collections. Pets? Mutants? Gamify the collection?<br/> Snow Globes will be rewarded in the Snow Globes</p>
           </div>
        </section>
        <section id="alone">
           <img className="huge" src="./assets/img6.jpg" alt="Various Big"/>
           <div className="patterns">
            <img src="./assets/sketch_alien.gif" className="alien" alt="Arrow"/>
            <img src="./assets/sketch_diamond.gif" className="diamond" alt="Arrow"/>
            <img src="./assets/sketch_stars.gif" className="stars1" alt="Arrow"/>
            <img src="./assets/sketch_stars.gif" className="stars2" alt="Arrow"/>
            <img src="./assets/sketch_ovni.gif" className="ovni" alt="Arrow"/>
         </div>
        </section>
     </div>
);
}

export default SnowBody;