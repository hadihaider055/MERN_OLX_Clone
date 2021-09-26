const initialState = {
  allProducts: [],
  selectedProduct: {},
  productStatus: {},
};

const productReducer = (products = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_PRODUCTS":
      return { ...products, allProducts: action.payload };
    case "FETCH_PRODUCT_BY_ID":
      return { ...products, selectedProduct: action.payload };
    case "REMOVE_PRODUCT":
      return { ...products, selectedProduct: {} };
    case "CREATE_PRODUCT":
      return { ...products, productStatus: action.payload };
    case "FETCH_PRODUCT_BY_CATEGORY":
      return { ...products, searchedProducts: action.payload };
    default:
      return products;
  }
};

export default productReducer;
