import React from "react";

import SnowHeader from "./SnowHeader.js";
import SnowMint from "./SnowMint.js";
import SnowFooter from "./SnowFooter.js";
import SnowBody from "./SnowBody.js";

const SnowGlobe = () => {
  //the UI of our component
  return (
    <div id="container">
        <div id="app" data-v-app="">
         <div id="project">
            <div id="home" className="">
               {/* <SnowHeader/> */}
               <SnowMint/>
               <SnowBody/>
               <SnowFooter/>
            </div>
            {/* <div className="notif error open close">
               <div className="wrapper">
                  <div className="alert">
                     You are not on the mainnet network. 
                     <div className="close"><img src="./assets/cross.svg" alt="" style={{width: "15px"}}/></div>
                  </div>
               </div>
            </div> */}
         </div>
      </div>

      {/* <h2 style={{ paddingTop: "50px" }}>Current Message:</h2>
      <p>{message}</p>

      <h2 style={{ paddingTop: "18px" }}>New Message:</h2>

      <div>
        <input
          type="text"
          placeholder="Update the message in your smart contract."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <p id="status">{status}</p>

        <button id="publish" onClick={onUpdatePressed}>
          Update
        </button>
      </div> */}
    </div>
  );
};

export default SnowGlobe;
