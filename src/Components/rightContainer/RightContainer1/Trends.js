import React from "react";
import { useState } from "react";
import style from "./Trends.module.css";

import Dialog2 from "../../Dialog2/Dialog2";

import { trendingData } from "../../../ConstData/ConstData";

const Trends = () => {
  const [isNotIntrested, setIsNotIntrested] = useState(trendingData.slice(2))
  const [isShowingAllTrendings , setIsShowingAllTrendings] = useState(false)

    // handle seeAll request
    function handleRequestSeeAll () {
        setIsShowingAllTrendings(!isShowingAllTrendings)
        if(isShowingAllTrendings) {
           return setIsNotIntrested(trendingData.slice(0,2))
        }
        setIsNotIntrested(trendingData)
    }
    
  //     id: 1,
  //     isNotIntrested: false,
  //     country: "Trending in India",
  //     keyword: "#Sachin tendulkar",
  //     totalKeywords: "8000k Tweets",
  //   },
  //   {
  //     id: 2,
  //     isNotIntrested: false,
  //     country: "Trending in India",
  //     keyword: "#Lionel Messi",
  //     totalKeywords: "6000k Tweets",
  //   },
  //   {
  //     id: 3,
  //     isNotIntrested: false,
  //     country: "Trending in Sports",
  //     keyword: "#Neymar",
  //     totalKeywords: "2560k Tweets",
  //   },
  //   {
  //     id: 4,
  //     isNotIntrested: true,
  //     country: "Trending in Sports",
  //     keyword: "#Cristiano Ronaldo",
  //     totalKeywords: "2000k Tweets",
  //   },
  //   {
  //     id: 5,
  //     isNotIntrested: false,
  //     country: "Trending in Sports",
  //     keyword: "#MS Dhoni",
  //     totalKeywords: "2000k Tweets",
  //   },
  // ]);
  
  const [selectedId, setSelectedId] = useState(null);
  const updateId = (id) => setSelectedId(id);

  const HandleClick = () => {
    const tempArr = [];

    isNotIntrested.forEach((el) => {
      if (el.id !== selectedId) {
        tempArr.push(el);
      }
    });

    console.log("temp arr ", tempArr);
    setIsNotIntrested(tempArr);
  };


  return (
    <div className={style.keywords}>
      <div className={style.key}>
        <div className={style.keyword__heading}>
          <h4 className={style.heading4}>What's happening</h4>
        </div>
        {isNotIntrested.map((keyword) => {
          return (
            <div
              className={style.container}
              onClick={() => {
                updateId(keyword.id);
              }}
            >
              <div key={keyword.id}>
                <div className={style.country}>{keyword.country}</div>
                <div className={style.keyword__name}>
                  <strong>{keyword.keyword}</strong>
                </div>
                <div className={style.keyword__tweets}>
                  {keyword.totalKeywords}
                </div>
              </div>
              <div className={style.btn}>
                <Dialog2 onClick={HandleClick} />
              </div>
           
            </div>

          );
        })}

           { 
                isNotIntrested.length && 
                <p className={style.seeAll} 
                    onClick = {handleRequestSeeAll}
                >
                    {isShowingAllTrendings ? 'Show Less' : 'Show More'} 
                </p>
            }
        </div>
      </div>
    
  
  );
};

export default Trends;

