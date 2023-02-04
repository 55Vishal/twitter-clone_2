import React, { useState } from "react";
import style from "./ProfileSection.module.css";
import WestIcon from "@mui/icons-material/West";
import CustomButton from "../../../Atom/Button/CustomButton";
import { useNavigate } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { FaBirthdayCake } from "react-icons/fa";
import { myTweets } from "../../../Recoil/Atom1/Atom";
import { useRecoilValue } from "recoil";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SyncIcon from "@mui/icons-material/Sync";
import { AiFillHeart} from 'react-icons/ai';
import PollIcon from "@mui/icons-material/Poll";
import UploadIcon from "@mui/icons-material/Upload";
import VerifiedIcon from '@mui/icons-material/Verified';
import { Avatar } from "@mui/material";
import RightContainer2 from "../../rightContainer/RightContainer2/RightContainer2";




function ProfileSection() {
   
   const PersonalTweets=useRecoilValue(myTweets)
    console.log(PersonalTweets,"Profile Section")
  let Data = JSON.parse(localStorage.getItem("user0"));
  const nevigate = useNavigate();
  const [likesCount, setLikesCount] = useState(0);
  const [colour, setColour]= useState(false)

  function  fetchData()
  {
    // setPost(tweetPosts)
  }
 
  function handleLike() {
    setLikesCount(likesCount ? likesCount-1 : likesCount+1 );
    setColour(!colour)
    }
 
  function handleUserProfile() {
    //setNewProfile()
    alert("kkkk")
  }
  
 function xyz (dataName)  {
    console.log(dataName);
    // setNewProfile(dataName)
    nevigate("/Profile2")
    };
 
  return (
    <>
    <div className={style.wrapper}>
      <div className={style.feed__header}>
        <p onClick={()=> nevigate("/home") }><WestIcon /></p>
        <h2>{Data.Name}</h2>
      </div>
        <img className={style.container} src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" />
      <div>
        <span className={style.Avatarsection}>
          <img
            className={style.img}
            src="https://cdn.pixabay.com/photo/2018/11/13/22/01/avatar-3814081__480.png"/>
          <CustomButton customCss={style.btn} buttonText={"Edit profile"} />
        </span>
      </div>

      <div className={style.textcontaint}>
        <h4>{Data.Name}</h4>
        <p>{`${"@"}${Data.Name}`}</p>
        <p><GoLocation />India <span><FaBirthdayCake />{Data.Date} {Data.Month} {Data.Year}</span></p>
        <p style={{marginTop:"1.5rem"}}>2000 Followers <span>154 Following</span></p>
      </div>
    </div>
    <div className={style.replies}>
      <h4>Tweet</h4>
      <h4>Tweet & replies</h4>
      <h4>Media</h4>
      <h4>Likes</h4>
    </div>
    {PersonalTweets.map((data) => {
        return (
          <div className={style.wrapper}>
            <div className={style.container1}>
              <div  onClick={ ()=>xyz(({
                name  : data.name,
                handlerName : data.handlerName  ,
                organization : data.organization,
                tweetText : data.tweetText,
                tweetPic : data.tweetPic,
              
                tweetCount : data.tweetCount,
                retweetCount : data.retweetCount,
                likesCount : data.likesCount,
                viewsCount : data.viewsCount,
                followers : data.followers,
                followings : data.followings,
              
                
                
              } )) } >
              
                <Avatar   className={style.avatar} src={data.tweetPic} />
               
              </div>

              <div className={style.innercontainer}>
                <span className={style.text}>
                  <h3>{data.name}<VerifiedIcon style={{color:"blue"}}/></h3>
                  
                </span>
                <p>{data.handlerName}</p>
                <br/>
                <p>{data.tweetText}</p>
              </div>
            </div>

            <div className={style.img1}>
              <img
                style={{ width: "30rem", height: "30rem",borderRadius:"15px" }}
                alt="Picture"
                src={data.tweetPic}
              />
            </div>
            <div className={style.icons}>
                  <span>
                    {data.tweetCount}
                    <ChatBubbleOutlineIcon />
                  </span>
                  <span>
                    {data.retweetCount}
                    <SyncIcon />
                  </span>
                  <span>
                    {data.likesCount}{likesCount}
                    <AiFillHeart  onClick={handleLike} 
                       style={colour ? {color: 'red'} : {color: 'rgb(102, 102, 192)' }} 
                       className={style.like}
                    />
                    
                  </span>
                  <span>
                    {data.viewsCount}
                    <PollIcon />
                  </span>

                  <UploadIcon />
                </div>
          </div>
        );
      })}
       
      <RightContainer2 />
    </>
  );
}

export default ProfileSection;
