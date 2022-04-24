import React from "react";
import Image from "../Images/about-us-back.png";

function AboutUs() {
  return (
    <div>
      <div className="container-fluid mt-5" id="about">
        <div className="row align-items-center">
          <div className="col-1"></div>
          <div className="col-12 col-md-5">
            <img src={Image} alt="" style={{ width: "100%" }} />
          </div>
          <div className="col-12 col-md-5 d-flex flex-column text-white justify-content-center">
            <p
              className="p-0 m-0"
              style={{ fontSize: 15, fontFamily: "chronicalight" }}
            >
              ABOUT US
            </p>
            <h2 style={{ fontSize: 50 }}>
              Welcome to <br />
              CCGBTCONE <br />
              NFT Club
            </h2>
            <p className="text-desc">
              Welcome to CCGBTCONE NFT Club. CCGBTCONE is a vintage collectible
              minted July 26th 2017 on the Bitcoin blockchain through the
              Counterparty protocol. It's part of the Oasis Mining collection
              which consists of 66 different cards from different artists.
              <br />
              <br />
              It's one of the first Waifu NFT's minted on the blockchain and was
              used in multiple occasions by Elon Musk in his Twitter posts and
              even as his PFP.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://opensea.io/collection/emblem-vault?search%5BsortAscending%5D=true&search%5BsortBy%5D=PRICE&search%5BstringTraits%5D%5B0%5D%5Bname%5D=Oasis%20Mining&search%5BstringTraits%5D%5B0%5D%5Bvalues%5D%5B0%5D=CCGBTCONE"
              className="btn header-button me-md-5"
            >
              Buy on Opensea
            </a>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
