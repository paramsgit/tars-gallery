import React, { useEffect, useState } from "react";
import { imagesDataApi } from "../utils/constants";
import Card from "./card";
import Loading from "./loading";
import Masonry from "react-masonry-css";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./modal";
import { OpenModal } from "../utils/appSlice";
import { dummyModal } from "../utils/constants";
import Pagination from "./pagination";
import { per_page_images } from "../utils/constants";

const Container = () => {
  const [imagesData, setimagesData] = useState([]);
  const [dataLoading, setdataLoading] = useState(false);
  const [modalData, setmodalData] = useState(dummyModal);
  const [total_pages, settotal_pages] = useState(1);
  const searchValue = useSelector((store) => store.search.searchInput);
  const isModalOpen = useSelector((store) => store.app.isModalOpen);
  const currentpageNumber = useSelector((store) => store.pageNumber.pageNumber);
  const clientId=process.env.REACT_APP_UNSPLASH_TOKEN
  const dispatch = useDispatch();
  useEffect(() => {
    getImagesData();
  }, [searchValue,currentpageNumber]);

  const getImagesData = async () => {
    setdataLoading(true);
    try {
      const response = await fetch(
        imagesDataApi +
          `?query=${searchValue}&page=${currentpageNumber}&per_page=${per_page_images}&client_id=` +
          clientId
      );
      const data = await response.json();
      console.log(data);
      setimagesData(data.results);
      settotal_pages(data.total_pages);
      window.scrollTo(0, 0);
    } catch (error) {
      console.log(error);
    }
    setdataLoading(false);
  };

  const showmodal = () => {
    dispatch(OpenModal());
  };
  
  const breakpoints = {
    default: 4,
    1100: 3,
    900: 2,
    700: 1,
  };
  return (
    <div
      className={`pt-20 transition-all duration-500 ease-in-out bg-slate-100 dark:bg-[#232323]`}
    >
      <Modal isVisible={isModalOpen} data={modalData} />

      {dataLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap justify-evenly p-5">
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {imagesData.length
              ? imagesData.map((e) => (
                  <div
                    onClick={() => {
                      setmodalData(e);
                      showmodal();
                    }}
                    key={e.id}
                  >
                    <Card data={e} />
                  </div>
                ))
              : ""}
          </Masonry>
        </div>
      )}

      <Pagination total={total_pages} />
    </div>
  );
};

export default Container;
