import React from "react";
import style from "./ProfileSection.module.css";
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import WestIcon from "@mui/icons-material/West";
import CustomButton from "../../../Atom/Button/CustomButton";
import { useNavigate } from "react-router-dom";
import {userProfile} from "../../../Recoil/Atom1/Atom";
// import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";

function ProfileSection() {
   const nevigate = useNavigate();
   const unknownProfileData=useRecoilValue(userProfile)
  console.log(unknownProfileData.tweetPic)

  
 
  return (
    <div className={style.wrapper}>
      <div className={style.feed__header}>
        <p onClick={()=> nevigate("/") }><WestIcon /></p>
        <h2>{unknownProfileData.Name}</h2>
      </div>
        <img className={style.container} src={unknownProfileData.tweetPic} />
      <div>
        <span className={style.Avatarsection}>
          <img
            className={style.img}
            src = {unknownProfileData.tweetPic}/>
        
         
          <CustomButton customCss={style.btn} buttonText={"Edit profile"} />
        </span>
      </div>

     <div className={style.textcontaint}>
        <h4>{`${"Name:-"}${unknownProfileData.Name}`}</h4>
        <h5>{`${"@"}${unknownProfileData.Email}`}</h5>
        <h5>{`${"Mob no:-"}${unknownProfileData.Phone}`}</h5>
  </div>
    </div>
  );
}

export default ProfileSection;