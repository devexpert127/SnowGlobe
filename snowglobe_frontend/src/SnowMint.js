import React from "react";
import { useEffect, useRef, useState } from "react";
import {
  helloWorldContract,
  connectWallet,
  updateMessage,
  loadCurrentMessage,
  getCurrentWalletConnected,
} from "./util/interact.js";

require('dotenv').config();

const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const REACT_APP_ALCHEMY_KEY = process.env.REACT_APP_ALCHEMY_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(REACT_APP_ALCHEMY_KEY);

const contract = require("./abi.json");

const contractAddress = "0xEfb80e4A75338d6606B2C5ac085d6F8FE9316598";
const nftContract = new web3.eth.Contract(contract, contractAddress);


// Random component
const Completionist = () => <span>You are good to go!</span>;

const SnowMint = () => {
       //state variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("No connection to the network."); //default message
  const [newMessage, setNewMessage] = useState("");
  const [totalCount, setTotalCount] = useState("");
  const [remainTime, setRemainTime] = useState(0);

  
    // We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed
    const Ref = useRef(null);
  
    // The state for our timer
    const [timer, setTimer] = useState('0days 00:00:00');
  
  
    const getTimeRemaining = (e) => {
      console.log(e);
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 * 60 * 60) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        return {
            total, days, hours, minutes, seconds
        };
    }
  
  
    const startTimer = (e) => {
        let { total, days, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        setRemainTime(total);
        if (total >= 0) {
            setTimer(
                days + 'days ' +
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
  
  
    const clearTimer = (e) => {
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
        var startDate = new Date();
        var endDate = new Date(2021, 9, 0);
        deadline.setSeconds((endDate.getTime() - startDate.getTime()) / 1000);
        // deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    }
  
  //called only once
  useEffect(async () => {
   //  const message = await loadCurrentMessage();
   //  setMessage(message);
   //  addSmartContractListener();
    const { address, status } = await getCurrentWalletConnected();

    setWallet(address);
    setStatus(status);
    setTotalCount(0);
    nftContract.methods.totalMint().call().then(function (value) {
      setTotalCount(value);
    });

    addWalletListener();
    clearTimer(getDeadTime());

  }, []);

  function addSmartContractListener() {
    helloWorldContract.events.UpdatedMessages({}, (error, data) => {
      if (error) {
        setStatus("😥 " + error.message);
      } else {
        setMessage(data.returnValues[1]);
        setNewMessage("");
        setStatus("🎉 Your message has been updated!");
      }
    });
  }

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onUpdatePressed = async () => {
    const { status } = await updateMessage(walletAddress, newMessage);
    setStatus(status);
  };

  function renderMintUI() {
    return remainTime > 0 ? 
    <div>
      <h1 style={{marginTop:100 + 'px'}}>Countdown to Launch...</h1>
      <h1 style={{marginBottom:100 + 'px',marginTop:100 + 'px'}}>{timer}</h1>

    </div>
        : 
        <div>
<div className="numberminted">
        <div className="number">{totalCount}/7,840</div>
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
          </div>;
}

        return (
           <div className="mint-block">
              <div id="connect-btn" data-v-15d4ed88="">
                     <button id="walletButton" onClick={connectWalletPressed}>
                        {walletAddress.length > 0 ? (
                        String(walletAddress).substring(0, 6) +
                        "..." +
                        String(walletAddress).substring(38)
                        ) : (
                        <span>Connect</span>
                        )}
                    </button>
                     </div>
                <section id="mint">
                <div className="container">
                  {renderMintUI()}
                
                     
                   

                </div>
             </section>
             </div>
);
}

export default SnowMint;