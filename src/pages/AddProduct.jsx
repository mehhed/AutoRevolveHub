import React from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  function handleAddItems(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.Name.value;
    const Image = form.Image.value;
    const Price = form.Price.value;
    const Rating = form.Rating.value;
    const ShortDescription = form.ShortDescription.value;
    const category = form.category.value;
    const BrandName = form.BrandName.value;

    console.log({
      name,
      Image,
      Price,
      ShortDescription,
      category,
      Rating,
      BrandName,
    });

    const car = {
      name,
      Image,
      Price,
      ShortDescription,
      category,
      Rating,
      BrandName,
    };
    fetch(
      "https://auto-revolve-hub-server-a917p2u3u-mehheds-projects.vercel.app/addItem",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(car),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "item add successfull",
        });
      });
  }
  return (
    <div>
      <h1 className="text-center text-4xl my-5 font-bold">Add a new item</h1>
      <div className="bg-[#efefef] p-5 rounded-lg">
        <form onSubmit={handleAddItems}>
          <div className="grid lg:grid-cols-2 grid-cols-1  gap-5">
            <div>
              <label htmlFor="Name" className="text-lg font-bold">
                Name
              </label>
              <input
                type="text"
                name="Name"
                id="Name"
                className="w-full p-4 rounded-lg"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label htmlFor="Image" className="text-lg font-bold">
                Image url
              </label>
              <input
                type="text"
                name="Image"
                id="Image"
                className=" w-full p-4 rounded-lg"
                placeholder="Image url"
                required
              />
            </div>
            <div>
              <label htmlFor="BrandName" className="text-lg font-bold">
                Brand Name
              </label>
              <input
                type="text"
                name="BrandName"
                id="BrandName"
                placeholder="Brand Name"
                className=" w-full p-4 rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="Price" className="text-lg font-bold">
                Price
              </label>
              <input
                type="text"
                name="Price"
                id="Price"
                className=" w-full p-4 rounded-lg"
                placeholder="Price"
                required
              />
            </div>
            <div>
              <label htmlFor="ShortDescription" className="text-lg font-bold">
                Short Description
              </label>
              <input
                type="text"
                name="ShortDescription"
                id="ShortDescription"
                className=" w-full p-4 rounded-lg"
                placeholder="Short Description"
                required
              />
            </div>
            <div>
              <label htmlFor="Rating" className="text-lg font-bold">
                Rating
              </label>
              <input
                type="text"
                name="Rating"
                id="Rating"
                className=" w-full p-4 rounded-lg"
                placeholder="Rating"
                required
              />
            </div>
            <div>
              <label htmlFor="category" className="text-lg font-bold">
                Category
              </label>
              <select
                name="category"
                required
                id="category"
                className="w-full p-4 rounded-lg">
                <option value="">select Category</option>
                <option value="Toyota">Toyota</option>
                <option value="Ford">Ford</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Tesla">Tesla</option>
                <option value="Honda">Honda</option>
              </select>
            </div>
          </div>
          <button className="w-full py-5 bg-blue-600 rounded-lg text-white text-2xl font-semibold mt-5">
            Add item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
