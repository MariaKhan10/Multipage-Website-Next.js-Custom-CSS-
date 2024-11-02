import Image from "next/image";
import React from "react";
import "./accessories.css"; // Importing the CSS file

const Accessories = () => {
  return (
    <div id="accessories">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          {/* First Image and Details */}
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              className="accessory-image"
              src={"/pictures/image3.png"}
              width={500}
              height={500}
            />
            <div className="accessory-details">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Maria's Royal Attire
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {/* Star Icons */}
                  {Array.from({ length: 4 }).map((_, index) => (
                    <svg
                      key={index}
                      fill="currentColor"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed">Fancy silhouettes and dreamy fabrics...</p>
              {/* Color and Size Options */}
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="color-button" />
                  <button className="color-button bg-gray-700" />
                  <button className="color-button bg-indigo-500" />
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <select className="select-style">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </div>
              </div>
              <div className="flex">
                <span className="price-text">17000/-</span>
                <button className="buy-button">Get it Now</button>
              </div>
            </div>
          </div>

          {/* Second Image and Details */}
          <div className="lg:w-4/5 mx-auto flex flex-wrap mt-12">
            <Image
              alt="ecommerce"
              className="accessory-image"
              src={"/pictures/image4.png"}
              width={500}
              height={500}
            />
            <div className="accessory-details">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Maria's Royal Attire
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                The Dreamer in Silk and Satin
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <svg
                      key={index}
                      fill="currentColor"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed">Luxe, timeless designs woven with charm...</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="color-button" />
                  <button className="color-button bg-gray-700" />
                  <button className="color-button bg-indigo-500" />
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <select className="select-style">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </div>
              </div>
              <div className="flex">
                <span className="price-text">20000/-</span>
                <button className="buy-button">Get it Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accessories;
