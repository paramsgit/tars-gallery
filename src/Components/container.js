import React, { useEffect, useState } from "react";
import { imagesDataApi } from "../utils/constants";
import Card from "./card";
import Loading from "./loading";
import Masonry from "react-masonry-css";
import { useSelector } from "react-redux";
const Container = () => {
  const [imagesData, setimagesData] = useState([]);
  const [dataLoading, setdataLoading] = useState(false);
  const searchValue=useSelector((store)=>store.search.searchInput)
  console.log(searchValue)
  useEffect(() => {
    getImagesData();
    console.log(searchValue)
  }, [searchValue]);

  const getImagesData = async () => {
    setdataLoading(true)
    try {
      const response = await fetch(
        imagesDataApi+`?query=${searchValue}&page=1&per_page=20&client_id=` + process.env.REACT_APP_UNSPLASH_TOKEN
      );
      const data = await response.json();
      console.log(data);
      setimagesData(data.results);
    } catch (error) {
      console.log(error)
    }
    setdataLoading(false)
    
  };

  const breakpoints={
    default:4,
    1100:3,
    900:2,
    700:1
  }
  return (
    <div className={`pt-20 transition-all duration-500 ease-in-out bg-slate-100 dark:bg-[#0f0f0f]`}>
      {dataLoading?<Loading/>:
      <div className="flex flex-wrap justify-evenly p-5">
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {imagesData.length
            ? imagesData.map((e) => <Card key={e.id} imageUrl={e.urls.small_s3} user={e.user} likes={e.likes} wid={e.width} high={e.height}/>)
            : ""}
        </Masonry>
      </div>
            }
    </div>
  );
};

export default Container;
