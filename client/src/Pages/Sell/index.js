import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./style.css";
import { CategoryData } from "./data";
import ProfilePic from "../../Assets/dummy.png";
import { createProduct } from "../../State/Actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileBase64 from "react-file-base64";

const SellPage = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [userForm, setUserForm] = useState({
    category: "",
    adTitle: "",
    description: "",
    images: [],
    address: "",
    name: "",
    price: "",
    phoneNumber: "",
    featured: "false",
  });
  const onChangeHandler = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };
  const productStatus = useSelector(
    (state) => state.productReducer.productStatus?.status
  );
  const history = useHistory();
  const authUser = localStorage.getItem("authToken");
  useEffect(() => {
    if (authUser === null) {
      history.push("/");
    }
  }, [history, authUser]);

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(createProduct(userForm));
    setUserForm({
      category: "",
      adTitle: "",
      description: "",
      images: [],
      address: "",
      name: "",
      price: "",
      phoneNumber: "",
      featured: "",
    });
      setError("Ad created successfully!");
      toast.success("Ad created successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    } 
  };
  return (
    <Layout>
      {error && (
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />
      )}
      <div className="sell__main">
        <div className="sell__header">
          <h3>Post your Ad</h3>
        </div>
        <div className="sell__form">
          <form onSubmit={submitForm}>
            <div className="sell__form__category">
              <h3>Select Category*</h3>
              <select
                onChange={onChangeHandler}
                value={userForm.category}
                name="category"
                required
              >
                {CategoryData.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="sell__form__details">
              <h3>Include some Details</h3>
              <div className="sell__ad__title">
                <label htmlFor="ad__title">Ad title*</label>
                <input
                  type="text"
                  name="adTitle"
                  id="ad__title"
                  maxLength="70"
                  value={userForm.adTitle}
                  onChange={onChangeHandler}
                  required
                />
                <p>
                  Mention the key features of your item (e.g. brand, model, age,
                  type)
                </p>
              </div>
              <div className="sell__ad__description">
                <label htmlFor="sell__ad__description">Description*</label>
                <textarea
                  name="description"
                  id="sell__ad__description"
                  maxLength="4096"
                  required
                  onChange={onChangeHandler}
                  value={userForm.description}
                />
                <p>Include condition, features and reason for selling</p>
              </div>
            </div>
            <div className="sell__form__price">
              <h3>Set a Price</h3>
              <div className="sell__ad__price">
                <label htmlFor="sell__ad__price">Price*</label>
                <input
                  type="number"
                  name="price"
                  id="sell__ad__price"
                  required
                  onChange={onChangeHandler}
                  value={userForm.price}
                />
              </div>
            </div>
            <div className="sell__form__image">
              <h3>UPLOAD A PHOTO</h3>
              <div className="sell__ad__image">
                <FileBase64
                  type="file"
                  multiple={false}
                  onDone={(base64) => {
                    setUserForm({ ...userForm, images: base64 });
                  }}
                  className="filebase"
                />
              </div>
            </div>
            <div className="sell__form__location">
              <h3>Confirm your location</h3>
              <div className="sell__form__address">
                <label htmlFor="sell__form__address">Address*</label>
                <input
                  type="text"
                  name="address"
                  id="sell__form__address"
                  maxLength="70"
                  required
                  onChange={onChangeHandler}
                  value={userForm.address}
                />
                <p>
                  Include State, City, Nearest Location. (Including State name
                  will help to search your ad easily)
                </p>
              </div>
            </div>
            <div className="sell__form__review">
              <h3>Review your details</h3>
              <div className="sell__form__info">
                <img src={ProfilePic} alt="Profile" />
                <div className="name__input">
                  <label htmlFor="sell__form__review">Name*</label>
                  <input
                    type="text"
                    name="name"
                    id="sell__form__review"
                    maxLength="70"
                    required
                    onChange={onChangeHandler}
                    value={userForm.name}
                  />
                </div>
              </div>
              <div className="sell__ad__phoneNumber">
                <h3>Let's verify your account</h3>
                <label htmlFor="sell__ad__phoneNumber">
                  Mobile Phone Number*
                </label>
                <input
                  type="number"
                  name="phoneNumber"
                  id="sell__ad__phoneNumber"
                  required
                  onChange={onChangeHandler}
                  value={userForm.phoneNumber}
                />
              </div>
              <div className="sell__form__feature">
                <h4>Feature your ad?</h4>
                <div className="form__radio">
                  <input
                    type="radio"
                    name="featured"
                    id="formRadios1"
                    value="true"
                    onChange={onChangeHandler}
                    required
                  />
                  <label htmlFor="formRadios1">Yes</label>
                  <input
                    type="radio"
                    name="featured"
                    id="formRadios2"
                    value="false"
                    onChange={onChangeHandler}
                  />
                  <label htmlFor="formRadios2">No</label>
                </div>
              </div>
              <p>
                To feature your ad, will charge 5% from the selling price of the
                product.
              </p>
            </div>
            <div className="sell__form__submit">
              <button type="submit">Post now</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SellPage;
