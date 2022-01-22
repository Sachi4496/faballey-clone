import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Navbar } from "../Navbars/Nav/Navbar";
import "./ProductDetails.css";

export const ProductDetails = () => {
  const [product, setProduct] = useState({
    image: [],
  });
  console.log("product:", product);

  const { id } = useParams();

  const getProductDetails = async () => {
    const response = await fetch(`http://localhost:2345/productDetail/${id}`);
    let data = await response.json();
    // console.log("data:", data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  const addToBag = (product) => {
    let id = "61eba3b515af8cdf6e65a3d7";
    console.log("id:", id);
    try {
      fetch(`http://localhost:2345/users/updateCart/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data:", data);
        });
    } catch (err) {
      console.log("err:", err);
    }
    // if (isAuth) {
    //   dispatch(addBAG(product));
    // } else {
    //   alert("Login First");
    // }
  };

  return (
    <>
      <Navbar />
      <div className="m-auto w-11/12 flex flex-row">
        <div className="img-div">
          {product.image.map((each_img, i) => (
            <div key={i}>
              {" "}
              <img src={each_img} alt="" />{" "}
            </div>
          ))}
        </div>

        <div className="stickyda">
          <p style={{ color: "rgb(252, 100, 134)", margin: "0px" }}>
            Free shipping on orders above INR 3000
          </p>
          <h1 style={{ fontSize: "18px", margin: "0px" }}>
            {product.productName}
          </h1>
          <p style={{ fontSize: "18px", margin: "0px", fontWeight: "bolder" }}>
            ₹{product.price}
          </p>
          <p style={{ color: "#03bb5c", margin: "0px" }}>
            Inclusive of all taxes
          </p>
          <p>SKU: DRS04279Z</p>
          <p>COLOUR: BLUE</p>
          <img
            src="https://i.ibb.co/F7x7QNz/Capture.jpg"
            alt="size and clr img"
          />
          <div>
            <button
              onClick={() => addToBag(product)}
              className="my-button border-2 w-44 h-12 mr-5"
            >
              ADD TO BAG
            </button>
            <button className="my-button no-color border-2 w-40 h-12">
              ADD TO WISHLIST
            </button>
          </div>
          <br />
          <img src="https://i.ibb.co/gD9n23b/Capture.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

// export default ProductDetails;
