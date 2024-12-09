import React from "react";
const srCartImg = [
  "https://img.icons8.com/stickers/100/performance-2.png",
  "https://img.icons8.com/nolan/64/request-service.png",
  "https://img.icons8.com/color/48/design--v1.png",
  "https://img.icons8.com/3d-fluency/94/deployment.png",
  "https://img.icons8.com/color/48/combine.png",
  "https://img.icons8.com/color/48/checked-identification-documents.png",
];

export default function MainPage() {
  return (
    <>
      <section>
        <div>
          <h1 className="flex justify-start items-start mt-20  text-2xl font-bold text-gray-800 mb-2 md:text-4xl ">
            Everything you need to start a website
          </h1>
          <p className="flex justify-start items-start ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            consequuntur.
          </p>
        </div>

        <section className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {srCartImg.map((src, inx) => (
            <div
              key={inx}
              className="mb-10 flex flex-row items-start gap-4 hover:shadow-xl p-6 transition-all"
            >
              <div className="w-12 flex-shrink-0">
                <img className="w-full" src={src} alt={src} />
              </div>

              <div className="flex flex-col">
                <h4 className="text-xl font-medium">
                  Performance Optimization
                </h4>
                <p className="text-gray text-sm">
                  Enhancing React apps by minimizing re-renders, lazy loading
                  components, and utilizing memoization techniques for improved
                  performance and speed.
                </p>
              </div>
            </div>
          ))}
        </section>
        <section className="mt-20 px-10 sm:px-20 md:px-36 lg:px-48 xl:px-60">
          <p>Works with your technologies</p>
          <div className="flex justify-evenly mt-10">
            <img
              src="/images/js.png"
              alt="js"
              className="hover:scale-125  transition-all"
            />
            <img
              src="/images/ts.png"
              alt="ts"
              className="hover:scale-125  transition-all"
            />
            <img
              src="/images/react.png"
              alt="react"
              className="hover:scale-125  transition-all"
            />
            <img
              src="/images/redux.png"
              alt="redux"
              className="hover:scale-125  transition-all"
            />
            <img
              src="/images/tailwind.png"
              alt="tailwind"
              className="hover:scale-125  transition-all"
            />
            <img
              src="/images/nextjs.png"
              alt="nextjs"
              className="hover:scale-125  transition-all"
            />
          </div>
        </section>

        <section className="mt-10 px-0">
          <div className="w-full max-w-[1000px] mx-auto bg-black text-white px-5 sm:px-10 lg:px-20 py-20 rounded-xl flex items-center gap-10 flex-col">
            <h2 className="text-2xl md:text-4xl xl:text-6xl text-center">
              Build faster websites
            </h2>
            <p>
              Pull content from anywhere and serve it fast with Astro's next-gen
              island architecture
            </p>
            <button className="items-center justify-center text-sm font-medium h-10 px-4 py-2 text-black bg-white rounded-sm">
              Get Started
            </button>
          </div>
          <section className="py-20 flex flex-col items-center">
            <p className="text-md">Copyright © 2024. All rights reserved</p>
            <p className="text-sm">Made by Web3Templates</p>
          </section>
        </section>
      </section>
    </>
  );
}
