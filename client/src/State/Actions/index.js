import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/products");
    dispatch({
      type: "FETCH_ALL_PRODUCTS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/products/get/${id}`);
    dispatch({
      type: "FETCH_PRODUCT_BY_ID",
      payload: data,
    });
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const removeProduct = () => async (dispatch) => {
  dispatch({
    type: "REMOVE_PRODUCT",
  });
};

export const createProduct = (res) => async (dispatch) => {
  try {
    const product = await axios.post("/api/products/create", res);
    dispatch({
      type: "CREATE_PRODUCT",
      payload: product,
    });
    console.log(product);
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const getProductByCategory =
  (category, allProducts) => async (dispatch) => {
    try {
      const data = allProducts.filter(
        (userSearch) => userSearch.category === category
      );
      dispatch({ type: "FETCH_PRODUCT_BY_CATEGORY", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
