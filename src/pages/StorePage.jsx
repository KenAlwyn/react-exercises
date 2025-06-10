import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

const url = "https://fakestoreapi.com/products/";

const StorePage = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [selectedProduct, setSelectedProuct] = useState(null)
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const getProducts = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.get(url);
      const data = response.data;
      setProducts(data);
      setDisplayedProducts(data);

      const uniqueCategories = [...new Set(data.map((p) => p.category))];
      setCategories(uniqueCategories);
    } catch (err) {
      setError(`Error fetching products: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [selectedCategory]);

  const applyFilters = () => {
    let filtered = [...products];

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setDisplayedProducts(filtered);
  };

  const handleSearch = () => {
    applyFilters();
  };

  const openModal = (product) => {
    setSelectedProuct(product);
    document.getElementById("product_modal").showModal();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Store</h1>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
        <input
          type="text"
          placeholder="Search product..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input input-bordered w-full md:max-w-sm"
        />
        <button
          onClick={handleSearch}
          className="btn bg-blue-600 text-white hover:bg-blue-700"
        >
          Search
        </button>

        <select
          className="select select-bordered w-full md:max-w-xs"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Content */}
      {isLoading ? (
        <div className="text-center text-gray-500">Loading products...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <>
          {displayedProducts.length === 0 ? (
            <div className="text-center text-gray-500">No products found.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} handleClick={openModal} />
              ))}
            </div>
          )}
        </>
      )}

    <dialog id="product_modal" className="modal">
        <ProductModal product={selectedProduct}/>
    </dialog>

    </div>
  );
};

export default StorePage;
