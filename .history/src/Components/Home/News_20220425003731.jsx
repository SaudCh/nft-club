import React from "react";
import "./css/news.css";
import forbes from "../Images/forbes.svg";
import coinDesk from "../Images/coindesk.svg";
import yahoo from "../Images/yahoo.svg";
import market from "../Images/market.svg";
import utoday from "../Images/utoday.svg";
import cnew1 from "../Images/cnews1.svg";
import cnews2 from "../Images/cnews2.svg";
import gape from "../Images/gape.svg";
import yellowBlue from "../Images/yellowBlue.svg";
import trustnodes from "../Images/trustnodes.svg";
import theSilly from "../Images/theSilly.svg";
import globe from "../Images/globe.svg";

function News() {
  return (
    <div className="news-container m-0 p-0 py-3">
      <div className="row">
        <div className="text-center">
          <h1 className="text-white text-center news-heading">
            <span className="heading-gredient">CCGBTCONE</span> IN THE NEWS
          </h1>
          <p className="text-white text-center">
            CCGBTCONE has been featured in well-known online publications due to
            its historical impact and significance. These articles clearly{" "}
            <br />
            depict the great potential of this NFT collection as a historical
            piece
            <br />
            as well as Elon’s interests in it over the years.
          </p>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-2">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.coindesk.com/markets/2018/10/23/elon-musk-sparks-speculation-with-cryptic-crypto-tweet/"
              >
                <img src={coinDesk} alt="" />
              </a>
            </div>

            <div className="col-2">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.forbes.com/sites/billybambrough/2018/10/23/elon-musk-mocks-bitcoin-security-and-scams-with-tongue-in-cheek-tweet/?sh=3a53d0f42184"
              >
                <img src={forbes} alt="" />
              </a>
            </div>

            <div className="col-2">
              <a target="_blank" rel="noreferrer" href="https://au.finance.yahoo.com/news/elon-musk-sends-adult-themed-112320398.html">
                <img src={yahoo} alt="" />
              </a>
            </div>

            <div className="col-2">
              <a target="_blank" rel="noreferrer" href="https://www.marketwatch.com/story/lasereyes-meme-campaign-goes-viral-on-twitter-in-apparent-bid-to-double-bitcoin-price-to-100-000-11614107554">
                <img src={market} alt="" />
              </a>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-2"></div>

            <div className="col-2">
              <a target="_blank" rel="noreferrer" href="#h">
                <img src={utoday} alt="" />
              </a>
            </div>

            <div className="col-2">
              <a target="_blank" rel="noreferrer" href="#h">
                <img src={cnew1} alt="" />
              </a>
            </div>

            <div className="col-2">
              <a target="_blank" rel="noreferrer" href="#h">
                <img src={cnews2} alt="" />
              </a>
            </div>

            <div className="col-2">
              <a target="_blank" rel="noreferrer" href="#h">
                <img src={globe} alt="" />
              </a>
            </div>
          </div>

          <div className="row mt-5 mb-5">
            <div className="col-2"></div>

            <div className="col-2">
              <a target="_blank" rel="noreferrer" href="#h">
                <img src={gape} alt="" />
              </a>
            </div>

            <div className="col-2">
              <a target="_blank" rel="noreferrer" href="#h">
                <img src={yellowBlue} alt="" />
              </a>
            </div>

            <div className="col-2">
              <a target="_blank" rel="noreferrer" href="#h">
                <img src={trustnodes} alt="" />
              </a>
            </div>

            <div className="col-2">
              <a target="_blank" rel="noreferrer" href="#h">
                <img src={theSilly} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
