import React, { useState,useRef } from "react";
import style from "./whatHappening.module.css";
import { FaGlobe, FaImage, FaMapMarker } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { CgSmileMouthOpen } from "react-icons/cg";
import { BiUserCircle } from "react-icons/bi";
import CustomButton from "../../Atom/Button/CustomButton";
import {tweetPosts} from "../../ConstData/ConstData";
import { useRecoilState } from "recoil";
import { isTweetPost, myTweets} from "../../Recoil/Atom1/Atom";

function WhatHappening() {
 
  let Data = JSON.parse(localStorage.getItem("user0"));
  const [storeArray,setStoreArray]=useState("")
  const [image,setImage]=useState("")
  const [loginStatus,setLoginStatus] = useRecoilState(isTweetPost);
  const [personalTweets, setPersonalTweets]= useRecoilState(myTweets)
  const [tweetsMy, setTweetsMy]= useState("")
  const inputRef=useRef(null)
  const Icons = [
    { id: 0, icon: <FaGlobe /> },
    { id: 1, icon: <FaImage />, action : 'pickImage' },
    { id: 2, icon: <FaMapMarker /> },
    { id: 3, icon: <FiCamera /> },
    { id: 4, icon: <CgSmileMouthOpen /> },
    { id: 5, icon: <BiUserCircle /> },
  ];

  function takeTweet(e)
  {
    setStoreArray(e.target.value)
    setTweetsMy(e.target.value)
    console.log(tweetsMy)
  }
  function handleOnClickIcon(action){
    if(action === 'pickImage'){
      inputRef.current.click()
    }
  }
  function handleOnSelectImage(e){
    let reader=new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result)
     
    }
    reader.readAsDataURL(e.target.files[0])
  }
  
  function handleNewTweet()
  {
  let newObj={
      name  : Data.Name,
      handlerName :  Data.Email,
      organization : 'United States government organization',
      tweetText : storeArray,
      tweetPic : image,
      tweetCount : 0,
      retweetCount : 0 ,
      likesCount : 0,
      viewsCount : 0,
      followers : 200,
      followings : 400,
      joinedDate : '22 dec 2022'

    }
   
    tweetPosts.unshift(newObj);
    setLoginStatus(loginStatus+1);
    setImage("")
    setStoreArray("")
    inputRef.current.value("")
    setPersonalTweets([newObj,...personalTweets])
    setTweetsMy(" ")
  }
  
  

  return (
    <>
      <div className={style.parentContainer}>
        <div className={style.main}>
          <div className={style.wrapper}>
            <textarea  placeholder="What's happening?"
              rows={8}
              cols={60}
              value={tweetsMy}
              onChange={takeTweet} 
             />
            
            <div className={style.privacy}>
              <FaGlobe />
              <span>Everyone can reply</span>
            </div>
             {image && 
             <div className={style.imageWrapper}>
               <img
                  src={image}
                  height='50%'
                  width='50%'
                  alt="img"

            />
            </div>
            }
            <div className={style.bottom}>
              {Icons.map((menu) => {
                return (
                  
                  <ul className={style.icons}key={menu.id}>
                  <span style={{ zIndex : "1"}}  onClick={ ()=>
                    handleOnClickIcon(menu.action)}> <li>{menu.icon}</li></span>
                    
                  </ul>
                
                );
              })}
            </div>
           </div>
           <CustomButton
             buttonText="Tweet"
             btnNext={handleNewTweet} 
             customCss={style.button}
           />
           <input
            type='file'
            hidden
            ref={inputRef}
            onChange={handleOnSelectImage}
            name='tweetPic'
          />
        </div>
      </div>
    </>
  );
}

export default WhatHappening;