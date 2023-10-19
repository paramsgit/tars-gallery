import React, { useEffect, useState } from "react";
import { imagesDataApi } from "../utils/constants";
import Card from "./card";
import Masonry from "react-masonry-css";
const Container = () => {
  const [imagesData, setimagesData] = useState([]);
  useEffect(() => {
    getImagesData();
  }, []);

  const getImagesData = async () => {
    const response = await fetch(
      imagesDataApi + process.env.REACT_APP_UNSPLASH_TOKEN
    );
    const data = await response.json();
    console.log(data);
    setimagesData(data.results);
    console.log(imagesData);
  };

  const breakpoints={
    default:4,
    1100:3,
    900:2,
    700:1
  }
  return (
    <div className={`transition-all duration-500 ease-in-out bg-slate-100 dark:bg-[#0f0f0f]`}>
      <div className="flex flex-wrap justify-evenly p-5">
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {imagesData.length
            ? imagesData.map((e) => <Card key={e.id} imageUrl={e.urls.regular} user={e.user} likes={e.likes} />)
            : ""}
        </Masonry>
      </div>
    </div>
  );
};

export default Container;
