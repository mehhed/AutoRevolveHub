import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // this use state for catagoris
  const [categoris, setcategoris] = useState([]);

  // this use state for gallery
  const [gallery, setGallery] = useState([]);

  // this use state for Employ
  const [Employ, setEmploy] = useState([]);

  useEffect(() => {
    fetch("categori.json")
      .then((req) => req.json())
      .then((res) => setcategoris(res));
    // load gallery data
    fetch(
      "https://auto-revolve-hub-server-a917p2u3u-mehheds-projects.vercel.app/car"
    )
      .then((gal) => gal.json())
      .then((galleryData) => setGallery(galleryData));

    // load employ data
    fetch(
      "https://auto-revolve-hub-server-a917p2u3u-mehheds-projects.vercel.app/Employ"
    )
      .then((gal) => gal.json())
      .then((Emp) => setEmploy(Emp));
  }, []);
  // const categoris = useLoaderData();

  return (
    <div>
      {/* banner section */}
      <div>
        <div
          className="hero "
          style={{
            backgroundImage:
              "url(https://raw.githubusercontent.com/mehhed/assignment-img/main/images.jpeg)",
          }}>
          <div className="hero-overlay bg-opacity-20"></div>
          <div className="hero-content text-center text-neutral-content py-5 md:py-10 lg:py-20">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Welcome to </h1>
              <h1 className="mb-5 text-4xl font-bold">Auto Revolve Hub</h1>
              <p className="mb-5 text-start">
                Your Ultimate Automotive Hub for Innovation and Inspiration!
                Explore the latest in automotive technology, design, and
                performance. Join us on a journey of discovery and stay in the
                driver's seat of the future!"
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      {/*  catagores section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10   px-5">
        {categoris.map((data) => (
          <>
            <Link to={`/categoris/${data.Categoris_name}`}>
              <div className="text-center p-5 rounded-lg shadow-inner shadow-slate-200 text-3xl flex flex-col justify-center gap-5 items-center">
                <img src={data.logo} alt="" />
                <h1>{data.Categoris_name}</h1>
              </div>
            </Link>
          </>
        ))}
      </div>
      {/* gallery section  */}
      <div className="">
        <h1 className="text-center text-3xl font-bold py-5">Our Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5  ">
          {gallery.slice(0, 12).map((gl) => (
            <>
              <div className="h-40 relative rounded-lg gallery-img-contaner shadow-inner  shadow-slate-200">
                <img src={gl.Image} className="h-full mx-auto" alt="" />
                <div className="absolute top-0 right-0 text-3xl font-bold text-purple-400 w-full h-full flex justify-center items-center bg-black bg-opacity-50 rounded-lg gallery-img-name">
                  {gl.name}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      {/* Executive Team section  */}
      <div className="px-5 py-10">
        <h1 className="text-4xl text-center">
          Executive <span className="text-red-400">Team</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {Employ.map((on) => (
            <>
              <div className="shadow-lg p-5 rounded-lg">
                <img src={on.img} alt="" />
                <h2 className="text-center text-xl mt-5">{on.name}</h2>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
