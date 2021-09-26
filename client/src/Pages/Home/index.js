import React, { useEffect } from "react";
import Layout from "../../Components/Layout";
import OlxBanner from "../../Assets/olx-banner.png";
import "./style.css";
import Card from "../../Components/Card";
import { useSelector } from "react-redux";
import { getProducts, removeProduct } from "../../State/Actions";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(removeProduct());
  }, [dispatch]);
  const Products = useSelector((data) => data.productReducer.allProducts);
  return (
    <Layout>
      <img
        src={OlxBanner}
        alt="OLX - Buy and Sell for free anywhere in Pakistan with OLX online"
        title="OLX - Buy and Sell for free anywhere in Pakistan with OLX online"
        className="olx__banner"
      />
      <div className="home__cards">
        <h1>Fresh Recommendations</h1>
        <div className="home__body">
          {Products.map((product) => {
            return (
              <div key={product._id}>
                <Card
                  Price={product.price.toLocaleString()}
                  Category={product.category}
                  Time={product.createdAt}
                  Featured={product.featured}
                  detailedProduct={product._id}
                  adTitle={product.adTitle}
                  Address={product.address}
                  CardImg={product.images.map((item) => item.base64)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
