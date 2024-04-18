import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.jpg";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.jpg";
import mongo from "../assets/mongo.jpg";
import sql from "../assets/sql.jpg";
import mui from "../assets/material.png";
import flutter from "../assets/flutter.jpg";
import docker from "../assets/docker.png";
import strapi from "../assets/strapi.png";
import azure from "../assets/azure.jpg";
const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: typescript,
      title: "TypeScript",
      style: "shadow-sky-500",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      
      style: "shadow-white",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-green-200",
    },
    {
      id: 8,
      src: mui,
      title: "Material UI",
      style: "shadow-blue-800",
    },

    {
      id: 9,
      src: graphql,
      title: "BootStrap",
      style: "shadow-purple-400",
    },
    {
      id: 10,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 11,
      src: node,
      title: "Node Express JS",
      style: "shadow-green-200",
    },
    {
      id: 12,
      src: mongo,
      title: "mongoDB",
      style: "shadow-green-600",
    },
    {
      id: 13,
      src: sql,
      title: "MySQL",
      style: "shadow-gray-500",
    },
    {
      id: 14,
      src: flutter,
      title: "Flutter",
      style: "shadow-blue-900",
    },
    {
      id: 15,
      src: docker,
      title: "Docker",
      style: "shadow-gray-400",
    },
    {
      id: 15,
      src: strapi,
      title: "Strapi",
      style: "shadow-purple-900",
    },
    {
      id: 16,
      src: azure,
      title: "Azure",
      style: "shadow-sky-800",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen-96 "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          {/* <p className="text-4xl text-black font-bold border-b-4 border-black p-2 inline">
            Experience
          </p> */}
          <p className="py-6 text-4xl">SKILLS</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-5
         gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
