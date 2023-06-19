import React from 'react'

const BannerCard = ({cardData}) => {
  return (
    <> 
       <div className="card border-0 d-flex flex-row rounded-none w-auto md:w-1/5 mx-auto mx-lg-0 px-3 px-sm-4 px-md-5 px-lg-3 py-3 py-lg-4">
          <img
            className="card-img img-fluid h-40 w-40 px-2"
            src={cardData.image}
            alt={cardData.title}
          />
          <div className='m-auto mx-0 px-2'>
          <div className='text-3xl font-bold text-amber-900 py-2'>{cardData.title}</div>
          <div className='text-black'>{cardData.subTitle}</div>
          </div>
        </div>
    </>
  );
};

export default BannerCard;
