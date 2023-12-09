import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/Authentication";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const Cart = () => {
  const [carts, setCart] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const email = currentUser?.email;
  useEffect(() => {
    fetch(
      `https://auto-revolve-hub-server-a917p2u3u-mehheds-projects.vercel.app/addTocart/${email}`
    )
      .then((req) => req.json())
      .then((res) => setCart(res));
  }, [email]);
  // console.log(carts);

  function handleDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://auto-revolve-hub-server-a917p2u3u-mehheds-projects.vercel.app/addTocart/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((req) => req.json())
          .then((res) => {
            if (res.deletedCount) {
              const newCart = carts.filter((one) => one._id !== id);
              setCart(newCart);
            }
            // setCart()
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });

    // console.log("delete comming soon...");
  }
  return (
    <div className="h-full">
      {carts.length > 0 || (
        <div className="text-center text-red-400 text-4xl font-bold h-full flex justify-center items-center">
          No items selected
        </div>
      )}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 py-5">
        {carts.length > 0 &&
          carts.map((one) => (
            <>
              <div className="card card-side bg-base-100  shadow-xl grid grid-cols-1 md:grid-cols-2">
                <figure>
                  <img src={one.Image} alt="" className="w-full" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{one.name}</h2>
                  <h2 className="text-xl">Brand : {one.category}</h2>
                  <p>Price : {one.Price}</p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn text-red-500 text-2xl "
                      onClick={() => handleDelete(one._id)}>
                      <RiDeleteBin6Line></RiDeleteBin6Line>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Cart;
