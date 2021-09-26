import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";

const SearchPage = () => {
  const history = useHistory();
  const Products = useSelector(
    (state) => state.productReducer.searchedProducts
  );
  if (Products.length === 0) {
    history.push("/");
  }
  return (
    <Layout>
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
                CardImg={product.images.base64}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default SearchPage;
