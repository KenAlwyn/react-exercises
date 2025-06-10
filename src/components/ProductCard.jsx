import React from "react";
import { Star } from "lucide-react";

const ProductCard = ({ product, handleClick }) => {
  return (
    <div
      className="bg-white rounded-sm shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4 flex flex-col cursor-pointer"
      onClick={() => handleClick(product)}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
      />
      <h2 className="font-semibold text-lg text-gray-800 line-clamp-2 mb-1">
        {product.title}
      </h2>
      <p className="text-sm text-gray-500 mb-2 capitalize">
        {product.category}
      </p>

      <div className="flex justify-between items-center mt-auto">
        <span className="text-lg font-bold text-green-600">
          ${product.price}
        </span>
        <div className="flex items-center gap-1 text-sm text-yellow-500">
          <Star size={16} fill="currentColor" />
          <span>{product.rating.rate}</span>
          <span className="text-gray-400">({product.rating.count})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
