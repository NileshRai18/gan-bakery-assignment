import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import filters from "../../data/productFilter"

const Products = (props) => {
  const unFilteredData = props.productsData
  const [data, setData] = useState(props.productsData);
  const [title, setTitle] = useState(props.title);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product))
  }


  const filterProduct = (filterData) => {
    let updatedList = []
    if (filterData.category === 'all') updatedList = [...unFilteredData]
    else if (filterData.category === 'trending') updatedList = unFilteredData.filter((item) => item.trending === true)
    else updatedList = unFilteredData.filter((item) => item.category === filterData.category);
    setTitle(filterData.title)
    setData(updatedList);
  }
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12 pb-5">
            <h2 className="display-5 text-center">{title ? title : <>Latest Products</>}</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          {props.showFilter && filters && filters.length &&
            <div className="buttons text-center pb-5">
              {filters.map(item => {
                return (
                  <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct(item)}>{item.title}</button>
                )
              })}
            </div>}
          {data?.map((product) => {
            return (
              <div id={product.id} key={product.id} className="col-lg-2 col-md-3 col-sm-4 col-xs-6 col-12 mb-4">
                <div className="card text-center h-100" key={product.id}>
                  <img
                    className="card-img-top p-3 h-56 w-56"
                    src={product.image}
                    alt={product.title}
                    height={100}
                  />
                  {product.trending &&
                    <div
                      className="product-banner-trending">
                      Trending
                    </div>
                  }
                  {product.category &&
                    <div
                      className="product-banner-category text-capitalize">
                      {product.category}
                    </div>
                  }
                  <div className="card-body">
                    <h5 className="card-title text-xl font-bold text-amber-900">
                      {product.title}
                    </h5>
                    <p className="card-text">
                      {product.subTitle}
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item lead">₹ {product.price}</li>
                  </ul>
                  <div className="card-body">
                    <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
