import React from 'react';
import './Exchange.css'; // Import CSS file for styling
// import nftBackground from './nft-background.png'; // Import background image

 // eslint-disable-next-line
function Exchanges() {
  return (
    <div className="exchange">
      {/* <div className="exchange__background" style={{ backgroundImage: `url(${nftBackground})` }}></div> */}
      <div className="exchange__content">
        <h1 className="exchange__title">NFT Exchange</h1>
        <p className="exchange__info">
          {/* eslint-disable-next-line */}
          Non-fungible tokens (NFTs) are unique digital assets that represent ownership of a specific item, such as artwork or collectibles. NFTs have gained popularity in recent years due to their ability to provide verifiable ownership and scarcity in the digital realm.
        </p>
        {/* eslint-disable-next-line */}
        <button className="exchange__button" onClick={() => window.location.href = 'http://localhost:8080'}>Go to NFT Exchange</button>
      </div>
    </div>
  );
}

export default Exchanges;
