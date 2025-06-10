import axios from 'axios';
import React, { useState } from 'react';

const url = "https://goweather.herokuapp.com/weather";

const WeatherPage = () => {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // fetch data
  const getData = async () => {
    if (!query.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setIsLoading(true);
    setError("");
    setData(null);

    try {
      const response = await axios.get(`${url}/${query.trim()}`);
      setData(response.data);

    } catch (err) {
      if (err.response?.status === 404) {
        setError("City not found.");
      } else {
        setError(`Error fetching data: ${err.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto text-white">
      <h1 className="text-2xl font-bold mb-4">Weather Checker</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter city"
          className="input input-bordered bg-gray-700 w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={getData}
          className="btn bg-blue-600 hover:bg-blue-700 text-white"
        >
          Search
        </button>
      </div>

      {isLoading && <p className="text-gray-300">Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {data && !error && (
        <div className="bg-gray-800 p-4 rounded-lg space-y-2">
          <p><strong>Temperature:</strong> {data.temperature}</p>
          <p><strong>Wind:</strong> {data.wind}</p>
          <p><strong>Description:</strong> {data.description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
