import React from "react";

const ProductModal = ({ product }) => {
  if (!product) return null;

  return (
<div className="modal-box max-w-5xl w-full p-8 bg-white rounded-xl shadow-2xl relative transition-all">
  {/* Close button */}
  <button
    className="btn-circle absolute right-4 top-4 p-2 rounded-4xl text-gray-500 hover:text-gray-800 hover:bg-gray-300 transition"
    onClick={() => document.getElementById("product_modal").close()}
  >
    ✕
  </button>

  <div className="flex flex-col md:flex-row gap-8 items-start">
    {/* Image */}
    <div className="w-full md:w-1/2">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-[80vh] object-fit"
      />
    </div>

    {/* Product Details */}
    <div className="w-full md:w-1/2 space-y-4 text-left text-gray-800 items-center">
      <h2 className="text-3xl font-bold">{product.title || "NA"}</h2>

      <div className="text-lg">
        <p className="mb-1">
          <span className="font-semibold text-gray-700">Price:</span>{" "}
          <span className="text-green-600">${product.price ?? "NA"}</span>
        </p>
        <p className="mb-1">
          <span className="font-semibold text-gray-700">Category:</span>{" "}
          {product.category || "NA"}
        </p>
        <p className="mb-1">
          <span className="font-semibold text-gray-700">Rating:</span>{" "}
          {product.rating?.rate ?? "NA"} / 5{" "}
          <span className="text-sm text-gray-500">
            ({product.rating?.count ?? "NA"} reviews)
          </span>
        </p>
      </div>

      <p className="text-gray-700 text-base leading-relaxed">
        <span className="font-semibold">Description:</span>{" "}
        {product.description || "NA"}
      </p>
    </div>
  </div>
</div>

  );
};

export default ProductModal;
