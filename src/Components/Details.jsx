import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Authentication/Authentication";
import Swal from "sweetalert2";

const Details = () => {
  const data = useLoaderData();
  const [detailsCar] = data;
  const { Image, name, ShortDescription, Price, category, Rating, _id } =
    detailsCar;
  // console.log(data);

  const { currentUser } = useContext(AuthContext);
  const email = currentUser?.email;

  const sendDatabase = { Image, name, Price, category, email };
  function handleCartData() {
    fetch(
      "https://auto-revolve-hub-server-a917p2u3u-mehheds-projects.vercel.app/addTocart",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(sendDatabase),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Added to cart",
        });
      });
  }
  return (
    <div>
      <div className="space-y-5 py-10 px-5">
        <img src={Image} alt="" className="mx-auto" />
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">{name}</h1>
          <button
            className="capitalize btn"
            onClick={currentUser && handleCartData}>
            Add to cart
          </button>
        </div>
        <p className="text-2xl font-bold">Brand : {category}</p>
        <p className="text-4xl font-bold italic">Price : {Price}</p>
        <p className="text-lg italic text-gray-700">
          Details : {ShortDescription}
        </p>
      </div>
    </div>
  );
};

export default Details;
