import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CatagriCard from "../Components/CatagriCard";

const CategorisItems = () => {
  const [sliderImg, setSliderImg] = useState([]);
  const data = useLoaderData();
  const { categori } = useParams();
  console.log(categori);

  useEffect(() => {
    fetch(
      `https://auto-revolve-hub-server-a917p2u3u-mehheds-projects.vercel.app/slider/${categori}`
    )
      .then((req) => req.json())
      .then((res) => setSliderImg(res));
  }, [categori]);

  return (
    <div className="h-full">
      {/* slider  */}
      <div className="shadow-inner shadow-slate-500 rounded-lg">
        <div className="carousel w-full ">
          {sliderImg.map((one, index) => (
            // eslint-disable-next-line react/jsx-key
            <div id={`item${index + 1}`} className="carousel-item w-full ">
              <div className="flex justify-center flex-col-reverse  lg:flex-row gap-5 items-center w-full">
                <div className="flex-grow flex justify-center">
                  <div className="space-y-5">
                    <h1 className="text-3xl font-bold">{one.name}</h1>
                    <h1 className="text-2xl font-bold">{one.categori}</h1>
                    <div className="flex gap-5 text-2xl">
                      <p>Price :</p>
                      <p className="line-through"> {one.oldPrice}</p>
                      <p>{one.newPrice}</p>
                    </div>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="text-right">
                    <img src={one.img} className="mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full  py-2 gap-2">
          {sliderImg.map(
            (
              one,
              index // console.log(index + 1)
            ) => (
              <>
                <a href={`#item${index + 1}`} className="btn btn-xs">
                  {index + 1}
                </a>
              </>
            )
          )}
        </div>
      </div>
      {data.length < 1 ? (
        <div className="text-4xl text-center text-red-500 font-bold my-10 border-y-2 py-5">
          items not available
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 my-10">
            {data.map((one) => (
              <CatagriCard key={one} sendData={one}></CatagriCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CategorisItems;
