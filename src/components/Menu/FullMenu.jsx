import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import FoodData from '../../data/FoodData';

export const FullMenu = () => {
  const { addToCart, increaseQuantity, decreaseQuantity, cartItems } = useCart();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', ...new Set(FoodData.map((item) => item.category))];

  const filteredItems = FoodData.filter(
    (item) =>
      (category === 'All' || item.category === category) &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 pt-[5rem] md:pt-[7rem] lg:pt-[8rem]">
      <h1 className="text-3xl sm:text-4xl font-bold text-orange-500 text-center mb-2">
        Full Menu
      </h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for dishes..."
        className="w-full p-2 border border-orange-400 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-3 py-1 rounded-md text-sm font-medium ${category === cat
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-orange-600 hover:text-white'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item) => {
          const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);

          return (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg"
            >
              <img src={item.img} alt={item.name} className="h-32 w-full object-cover" />
              <div className="p-3">
                <h3 className="text-sm font-bold">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.desc.slice(0, 40)}...</p>

                <div className="flex items-center justify-between mt-2">
                  <p className="text-orange-500 font-bold text-sm">₹{item.price}</p>
                  {cartItem ? (
                    <div className="flex items-center gap-2 bg-orange-100 rounded-md px-2 py-1">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="
                                                    bg-orange-500 
                                                    text-white 
                                                    rounded-full 
                                                    w-6 h-6 
                                                    flex items-center justify-center 
                                                    hover:bg-orange-600"
                      >
                        -
                      </button>
                      <span className="text-sm font-bold px-2">{cartItem.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="
                                                    bg-orange-500 
                                                    text-white 
                                                    rounded-full 
                                                    w-6 h-6 
                                                    flex items-center justify-center 
                                                    hover:bg-orange-600"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(item)}
                      className="
                                                bg-orange-500 
                                                text-white 
                                                px-3 py-1 
                                                rounded-md 
                                                hover:bg-orange-600"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No items found.</p>
      )}
    </div>
  );
};
