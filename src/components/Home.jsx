import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import Loader from "./Loader";

// const img1 ="https://rukminim1.flixcart.com/image/416/416/xif0q/computer/m/b/n/-original-imagfdf4xnbyyxpa.jpeg?q=70";
// const img2 ="https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/7/v/m/-original-imagn9uksahyzrng.jpeg?q=70";

const Home = () => {
  //   const productList = [
  //     { name: "Mac book", price: 12000, imgSrc: img1, id: "abcd" },
  //     { name: "Black Shoes", price: 490, imgSrc: img2, id: "efgh" },
  //   ];

  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState([]);
  const [loading, setLoading] = useState(true);

  const productList = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setMyData(response.data);
      setLoading(false);
    } catch (error) {
      setIsError(error.message);
      // setLoading(false);
    }
  };

  useEffect(() => {
    productList();
  }, []);

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    // console.log(options);
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added to Cart");
  };

  return (
    <div className="home">
      {loading ? (
        <Loader />
      ) : (
        <>
          {isError === "" && <h2>{isError}</h2>}
          {myData.map((i) => (
            // <ProductCard
            //   key={i.id}
            //   imgSrc={i.imgSrc}
            //   name={i.name}
            //   price={i.price}
            //   id={i.id}
            //   handler={addToCartHandler}
            // />

            <ProductCard
              key={i.id}
              image={i.image}
              title={i.title}
              price={i.price}
              id={i.id}
              handler={addToCartHandler}
            />
          ))}
        </>
      )}
    </div>
  );
};

// const ProductCard = ({ name, id, price, handler, imgSrc }) => (
//   <div className="productCard">
//     <img src={imgSrc} alt={name} />
//     <p>{name}</p>
//     <h4>$ {price}</h4>
//     <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
//       Add to Cart
//     </button>
//   </div>
// );

const ProductCard = ({ title, id, price, handler, image }) => (
  <div className="productCard">
    <img src={image} alt={title} />
    <p>{title}</p>
    <h4>$ {price}</h4>
    <button onClick={() => handler({ title, price, id, quantity: 1, image })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
