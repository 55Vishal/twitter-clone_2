import React, { useState } from "react";
import style from "./ProfileSection.module.css";
import WestIcon from "@mui/icons-material/West";
import CustomButton from "../../../Atom/Button/CustomButton";
import { useNavigate } from "react-router-dom";
import { userProfile } from "../../../Recoil/Atom1/Atom";
import { useRecoilValue } from "recoil";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SyncIcon from "@mui/icons-material/Sync";
import { AiFillHeart } from "react-icons/ai";
import PollIcon from "@mui/icons-material/Poll";
import UploadIcon from "@mui/icons-material/Upload";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Avatar } from "@mui/material";
import RightContainer2 from "../../rightContainer/RightContainer2/RightContainer2";

function ProfileSection() {
  const nevigate = useNavigate();
  const unknownProfileData = useRecoilValue(userProfile);
  const [likesCount, setLikesCount] = useState(0);
  const [colour, setColour] = useState(false);

  function tweetsUnknown() {}
  function handleLike() {
    setLikesCount(likesCount ? likesCount - 1 : likesCount + 1);
    setColour(!colour);
  }

  return (
    <div className={style.wrapper}>
      <div className={style.feed__header}>
        <p onClick={() => nevigate("/home")}>
          <WestIcon />
        </p>
        <h2>
          {unknownProfileData.name}
        </h2>
      </div>
      <img className={style.container} src={unknownProfileData.tweetPic} />
      <div>
        <span className={style.Avatarsection}>
          <img className={style.img} src={unknownProfileData.tweetPic} />

          <CustomButton customCss={style.btn} buttonText={"Edit profile"} />
        </span>
      </div>

      <div className={style.textcontaint}>
        <h4>
          {unknownProfileData.name}
        </h4>
        <p>
          {unknownProfileData.handlerName}
        </p>
        <p>
          {unknownProfileData.organization}
        </p>
        <p>
          {unknownProfileData.joinedDate}
        </p>
       <p style={{marginTop:"1.5rem"}}>
          {`${unknownProfileData.followers} ${"Followers"}`}
            <span>{`${unknownProfileData.followings} ${"Following"}`}</span>
        </p>
      </div>
      <div className={style.replies}>
        <h4 onClick={tweetsUnknown}>Tweet</h4>
        <h4>Tweet & replies</h4>
        <h4>Media</h4>
        <h4>Likes</h4>
      </div>

      <div className={style.wrapper}>
        <div className={style.container1}>
          <Avatar className={style.avatar} src={unknownProfileData.tweetPic} />

          <div className={style.innercontainer}>
            <span className={style.text}>
              <h3>
                {unknownProfileData.name}
                <VerifiedIcon style={{ color: "blue" }} />
              </h3>
            </span>
            <p>
              {unknownProfileData.handlerName}
            </p>
            <br/>
            <p>
              {unknownProfileData.tweetText}
            </p>
          </div>
        </div>

        <div className={style.img1}>
          <img
            style={{ width: "30rem", height: "30rem", borderRadius: "15px" }}
            alt="Picture"
            src={unknownProfileData.tweetPic}
          />
        </div>
        <div className={style.icons}>
          <span>
            {unknownProfileData.tweetCount}
            <ChatBubbleOutlineIcon />
          </span>
          <span>
            {unknownProfileData.retweetCount}
            <SyncIcon />
          </span>
          <span>
            {unknownProfileData.likesCount}
            {likesCount}
            <AiFillHeart
              onClick={handleLike}
              style={
                colour ? { color: "red" } : { color: "rgb(102, 102, 192)" }
              }
              className={style.like}
            />
          </span>
          <span>
            {unknownProfileData.viewsCount}
            <PollIcon />
          </span>

          <UploadIcon />
        </div>
      </div>
      {/* {unknownProfileData.tweets[0].tweetText} */}
      {/* <h4>{unknownProfileData.tweets[0].tweetText}</h4> */}
      <RightContainer2 />
    </div>
  );
}

export default ProfileSection;
