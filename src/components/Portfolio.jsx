import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.png";
import turner from "../assets/portfolio/turner.jpg";
import navbar from "../assets/portfolio/navbar.png";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demoLink: "https://clickandshop.prasanthy.in/",
      codeLink: "https://github.com/Prasanthyb/SIMPLE-SHOPPING-CART-WEBSITE-ClickAndShop.git",
    },
    {
      id: 2,
      src: turner,
      demoLink: "https://turnerswebsite.prasanthy.in/",
      codeLink: "https://github.com/Prasanthyb/TURNERS-WEBSITE-CLIENT.git",
    },
    {
      id: 3,
      src: navbar,
      demoLink: "https://to-do-app-react-typescript-ashy.vercel.app/",
      codeLink: "https://github.com/Prasanthyb/ToDo-App-React-Typescript.git",
    },
    {
      id: 4,
      src: reactSmooth,
      demoLink: "https://flutterapp-6c793.web.app/",
      codeLink: "https://github.com/Prasanthyb/FLUTTER-DEVICE-PREVIEW.git",
    },
    {
      id:5,
      src: reactParallax,
      demoLink: "https://technova.prasanthy.in/",
      codeLink: "https://github.com/Prasanthyb/TECHNOVA-AUK-E-COMMERCE-WEBSITE-FRONTEND.git",
    },
    {
      id: 6,
      src: reactWeather,
      demoLink: "https://next-js-prediction-app.vercel.app/",
      codeLink: "https://github.com/Prasanthyb/NEXT-JS--PREDICTION-APP.git",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          {/* <p className="text-4xl text-black font-bold inline border-b-4 border-black">
            Portfolio
          </p> */}
          <p className="py-5 text-4xl">My Personal Projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demoLink} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={codeLink} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
