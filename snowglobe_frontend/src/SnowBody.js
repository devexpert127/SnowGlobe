import React from "react";

const SnowBody = () => {
    return (
        <div className="container">
        <section id="about">
           <div className="content">
              <h2>What are Snow Globes?</h2>
              <p>Snow Globes are a collection of programmatically, randomly generated NFTs on the Ethereum blockchain which are crafted from the finest of materials including ultra-high grade quality glass finishes with each individual Snow Globe originating from over 14 different parts of the world where only the best snow is known to fall. There are only 8,340 animated Snow Globes to collect.</p>
           </div>
           <img src="./assets/vari.gif" alt="Various Snow Globes" />
        </section>
        <section id="gallery">
          <img className='normal-img' src="./assets/img1.gif" alt="Character N1 Snow Globes"/>
          <img className='normal-img' src="./assets/img2.gif" alt="Character N2 Snow Globes"/>
          <img className='normal-img' src="./assets/img3.gif" alt="Character N3 Snow Globes"/>
          <img className='normal-img' src="./assets/img4.gif" alt="Character N4 Snow Globes"/>
          <img className='normal-img' src="./assets/img5.gif" alt="Character N5 Snow Globes"/>
          <img className='normal-img' src="./assets/img6.gif" alt="Character N6 Snow Globes"/>
        </section>
        <section id="faq">
           <div className="question faq1">
              <h2>Snow Globes Make the Perfect Gift!</h2>
              <p>Whether it be a friend, partner or loved one, give them something different this Christmas or on any occasion with a 1 of a kind Snow Globe. A gift that keeps on giving with addictive animations that brings entertainment to everybody.<br/>
               <br/>Show how much you care this Christmas by gifting a rare 1 of a kind Snow Globe to that special person and watch their face light up with that amazing smile 😊
            </p>
           </div>
           <div className="question faq2">
              <h2>How to Buy?</h2>
              <p>Simply connect with Metamask by clicking the “Connect” button at the top of our webpage, choose how many Snow Globes you wish to mint (max of 15 at a time) and then press the “Mint” button. 
<br/><br/>
Your Snow Globe(s) will be automatically credited to your Metamask wallet with instant reveal.
<br/><br/>
Each Snow Globe NFT costs the same flat rate 👉 0.09 Ξ
</p>
              <span className="royalty">Secondary sales royalty:</span> 2.5% to Snow Globes artists / 2.5% to Opensea

           </div>
           <div className="question faq3">
              <h2>How many?</h2>
              <p>There will only ever be 8340 Snow Globes NFTs in this collection. 7840 will be available for minting by users on launch. 500 will be held back for unlockable rewards and giveaways aswell as promotions to grow the Snow Globes community in a sustainable way.</p>
           </div>
           <div className="question faq4">
              <h2>When?</h2>
              <p>You will be able to mint Snow Globes NFTs on this website on:
OCTOBER 1st @ 11AM EST. 
<br/><br/>
<a href="https://calendar.google.com/calendar/u/0/r?tab=rc">Click here to add a reminder to your calendar.</a>
<br/><br/>
If you miss the mint, secondary sales will be available on Opensea.
</p>
           </div>
        </section>
        <section id="gallery-inline">
           <img className='small-img' src="./assets/img1.gif" alt="Character N1 Snow Globes"/>
          <img className='small-img' src="./assets/img2.gif" alt="Character N2 Snow Globes"/>
          <img className='small-img' src="./assets/img3.gif" alt="Character N3 Snow Globes"/>
          <img className='small-img' src="./assets/img4.gif" alt="Character N4 Snow Globes"/>
          <img className='small-img' src="./assets/img5.gif" alt="Character N5 Snow Globes"/>
          <img className='small-img' src="./assets/img6.gif" alt="Character N6 Snow Globes"/>
        </section>
        <section id="roadmap">
           <h2>Roadmap?</h2>
           <p>Release date 👉 October 1st @ 11AM EST</p>
           <img src="./assets/sketch_arrow_1.gif" alt="Arrow"/>
           <div className="step">
              <p className="percent">25% Minted</p>
              <p>We giveaway a free Snow Globe to each of 25 lucky random holders!</p>
           </div>
           <img src="./assets/sketch_arrow_2.gif" className="left" alt="Arrow"/>
           <div className="step">
              <p className="percent">50% Minted</p>
              <p>We giveaway more Snow Globes to each of 50 lucky random holders!</p>
           </div>
           <img src="./assets/sketch_arrow_2.gif" className="left" alt="Arrow"/>
           <div className="step">
              <p className="percent">75% Minted</p>
              <p>We hold an exclusive community raffle to win 7.5 Ethereum!</p>
           </div>
           <img src="./assets/sketch_arrow_2.gif" className="right" alt="Arrow"/>
           <div className="step-right-stars">
              <p className="percent">100% Minted</p>
              <p>We hold our biggest giveaway of 100 free Snow Globes to lucky random holders PLUS 10 Ethereum!</p>
           </div>
           <img src="./assets/sketch_arrow_2.gif" className="left" alt="Arrow"/>
           <div className="step-left-stars">
              <p className="percent">Ongoing Growth and Sustainability</p>
              <p>We will be opening an exclusive Merchandise Store aswell as holding regular giveaways and promotions in an aim to grow the Snow Globes community through onboarding Crypto Influencers and well-known celebrities.
               <br/><br/>
               Holders will also be able to claim free NFTs from future collections which we will be looking to expand into from the use of our own smart contract.
               </p>
           </div>
        </section>
        <section id="alone">
           <img className="huge" src="./assets/vari.gif" alt="Various Big"/>
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