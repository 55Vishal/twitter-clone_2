import React from "react";
import style from "./RightSide.module.css";
import RightContainer2 from "../../rightContainer/RightContainer2/RightContainer2";
import Trends from "../../rightContainer/RightContainer1/Trends";
import Search from "../../../Atom/Search/search";

function RightSide() {
  return (
    <div className={style.container}>
      <div>
        <Search />
      </div>
      <div>
        <Trends />
      </div>
      <div>
        <RightContainer2 />
      </div>
      <div className={style.copyright}>
        <a href="https://twitter.com/en/tos"> Terms of Services </a>
        <a href="https://twitter.com/en/privacy">Privacy Policy </a>
        <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">
          Cookies Policy{" "}
        </a>
        <a href="https://help.twitter.com/en/resources/accessibility">
          Accessibility{" "}
        </a>
        <a href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo">
          Add info{" "}
        </a>{" "}
        More...
        <p>@2023 Twitter,Inc.           </p>
      </div>
    </div>
  );
}

export default RightSide;
