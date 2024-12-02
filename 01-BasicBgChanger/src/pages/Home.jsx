import React, { useState } from "react";

function Home() {
  const [Color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen flex items-end"
      style={{ backgroundColor: Color }}
    >
      <div className="bg-white sm:flex sm:flex-row justify-center sm:justify-evenly flex-wrap rounded-lg shadow-lg max-w-[1120px] sm:mx-auto h-auto my-[3rem] flex-col px-[2rem] sm:p-0 ">
        <button
          className="bg-white border-2 border-black text-black rounded-3xl m-3 p-2"
          onClick={() => {
            setColor("white");
          }}
        >
          White
        </button>
        <button
          className="bg-red-700 border-2 border-black text-white rounded-3xl m-3 p-2"
          onClick={() => {
            setColor("red");
          }}
        >
          Red
        </button>
        <button
          className="bg-green-700 border-2 border-black text-white rounded-3xl m-3 p-2"
          onClick={() => {
            setColor("green");
          }}
        >
          Green
        </button>
        <button
          className="bg-blue-700 border-2 border-black text-white rounded-3xl m-3 p-2"
          onClick={() => {
            setColor("blue");
          }}
        >
          Blue
        </button>
        <button
          className="bg-purple-800 border-2 border-black text-white rounded-3xl m-3 p-2"
          onClick={() => {
            setColor("purple");
          }}
        >
          Purple
        </button>
        <button
          className="bg-gray-700 border-2 border-black text-white rounded-3xl m-3 p-2"
          onClick={() => {
            setColor("gray");
          }}
        >
          Gray
        </button>
        <button
          className="bg-yellow-700 border-2 border-black text-white rounded-3xl m-3 p-2"
          onClick={() => {
            setColor("yellow");
          }}
        >
          Yellow
        </button>
        <button
          className="bg-lime-700 border-2 border-black text-white rounded-3xl m-3 p-2"
          onClick={() => {
            setColor("lime");
          }}
        >
          Lime
        </button>
        <button
          className="bg-black border-2 border-black text-white rounded-3xl m-3 p-2"
          onClick={() => {
            setColor("black");
          }}
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default Home;
