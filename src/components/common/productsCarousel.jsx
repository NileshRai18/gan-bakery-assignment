import React from 'react'
import Carousel from 'react-multi-carousel';
import { NavLink } from 'react-router-dom'
import 'react-multi-carousel/lib/styles.css';

const ProductsCarousel = ({ carouselData }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
    <div className='container py-10'>
      {carouselData && carouselData.length && <Carousel
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        arrows={false}>
        {carouselData.map(item => {
          return <>
            <div className="d-flex flex-column flex-md-row bg-red-100 rounded-2xl m-3 p-3">
              <img
                className="img-fluid h-40 w-40 px-2 m-auto"
                src={item.image}
                alt={item.title}
              />
              <div className='m-auto mx-0 px-2'>
                <div className='text-3xl font-bold text-amber-900 py-2'>{item.title}</div>
                <div className='text-black'>{item.subTitle}</div>
                <div className='text-amber-900 py-2'>With an exclusive price of ₹ <span className='font-bold'>{item.price}</span></div>
              </div>
            </div>
          </>
        })}
      </Carousel>}
      <div className='text-center py-4 text-xl'>
      <div className='pb-3'>We have wider range of products. We have wider range of products. We have wider range of products.</div>
      <NavLink className="nav-link btn btn-outline-danger text-red-400 text-sm inline py-2 px-3 btn-sm" to="/product">Explore More <i className="fa fa-long-arrow-right ml-1"></i></NavLink>
      </div>
      </div>
    </>
  );
};

export default ProductsCarousel;
