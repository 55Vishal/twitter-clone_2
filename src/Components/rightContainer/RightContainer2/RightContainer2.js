import React, { useState } from "react";
import { Avatar } from "@mui/material";
import style from "./RightContainer2.module.css";
import CustomButton from "../../../Atom/Button/CustomButton";
import VerifiedIcon from "@mui/icons-material/Verified";
import { userProfiles } from "../../../ConstData/ConstData";

function Righthomebox2() {
  const handleClick = id => {
    const updatedFollowContainer = followContainer.map(item => {
      if (item.id === id) {
        item.followed = !item.followed;
      }
      return item;
    });
    setFollowContainer(updatedFollowContainer);
  };
  const [followContainer, setFollowContainer] = useState(userProfiles.slice(2));
  const [isAskedforAllData, setIsAskedforAllData] = useState(false);

  //
  function hanldeClickShowMore() {
    setIsAskedforAllData(!isAskedforAllData);
    if (isAskedforAllData) {
      return setFollowContainer(userProfiles.slice(0, 2));
    }
    setFollowContainer(userProfiles);
  }

  return (
    <div className={style.container}>
      <h1>Who to follow</h1>
      <div className={style.main}>
        {followContainer.map(menu => {
          return (
            <div className={style.wrapper}>
              <Avatar alt="Remy Sharp" src={menu.src} />
              <div className={style.img}>
                <h3>
                  {menu.text}
                  <span style={{ color: "black" }}>
                    {" "}{menu.tag}{" "}
                  </span>
                  <VerifiedIcon style={{ color: "black", fontSize: "20px" }} />
                </h3>
                <h6>
                  {menu.text2}
                </h6>
              </div>
              <div className={style.btntxt}>
                <CustomButton
                  buttonText={menu.followed ? "Following" : "Follow"}
                  btnNext={() => handleClick(menu.id)}
                  key={menu.id}
                  customCss={style.follwButton}
                  disabled={menu.followed}
                />
              </div>
            </div>
          );
        })}
        <p onClick={hanldeClickShowMore} className={style.ShowMoreText}>
          {isAskedforAllData ? "Show less" : "Show more"}
        </p>
      </div>
    </div>
  );
}

export default Righthomebox2;
