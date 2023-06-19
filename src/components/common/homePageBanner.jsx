import React from "react";
import homePageBannerData from "../../data/homePageBanner"
import BannerCard from "./bannerCards"

const HomePageBanner = () => {
  return (
    <>
      <div className="py-20 home-page-banner">
        <div className="d-flex flex-column flex-lg-row justify-center ">
          {homePageBannerData && homePageBannerData.length && homePageBannerData.map(item =>
            <BannerCard key={item.id} cardData={item} />)}
        </div>
      </div>
    </>
  );
};

export default HomePageBanner;
