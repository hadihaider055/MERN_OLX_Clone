import React, { useEffect } from "react";
import Layout from "../../Components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import "./style.css";
import DescriptionPageLeft from "../../Components/DescriptionPageLeft";
import { getProductById } from "../../State/Actions";
import DescriptionPageRight from "../../Components/DescriptionPageRight";

const DescriptionPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);
  const { selectedProduct } = useSelector((state) => state.productReducer);

  return (
    <Layout>
      <div className="description__pageMain">
        <DescriptionPageLeft
          images={selectedProduct?.images?.map((item)=> item.base64)}
          price={selectedProduct.price}
          description={selectedProduct.description}
          condition={selectedProduct.condition}
          adTitle={selectedProduct.adTitle}
          featured={selectedProduct.featured}
        />
        <DescriptionPageRight
          userName={selectedProduct.name}
          price={selectedProduct.price}
          adTitle={selectedProduct.adTitle}
          address={selectedProduct.address}
          createdAt={selectedProduct.createdAt}
          phoneNumber={selectedProduct.phoneNumber}
        />
      </div>
    </Layout>
  );
};

export default DescriptionPage;
