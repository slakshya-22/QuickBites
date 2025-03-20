import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FoodData from '../../data/FoodData'

export const MenuOverview = () => {
  const [sampleItems, setSampleItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const getRandomItems = () => {
      return [...FoodData].sort(() => 0.5 - Math.random()).slice(0, 4)
    }

    setSampleItems(getRandomItems())
  }, [])

  const handleMenuClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      navigate('/menu')
    }, 1000)
  }

  return (
    <div className="p-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-orange-500">🔥 Our Top Picks 🔥</h2>
        <p className="text-gray-600 mt-2 text-lg">Hand-picked just for you!</p>
      </div>

      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-6"
      >
        {sampleItems.map((item) => (
          <div
            key={item.id}
            className="
              bg-white 
              shadow-md 
              rounded-xl 
              overflow-hidden 
              hover:scale-105 
              hover:shadow-xl 
              transition-transform 
              animate-fadeIn"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-36 sm:h-40 w-full object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{item.desc.slice(0, 40)}...</p>

              <p className="text-orange-500 font-bold text-sm">₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleMenuClick}
        className={`mt-8 mx-auto block bg-orange-500 text-white py-2.5 px-6 rounded-md text-lg font-medium hover:bg-orange-600 transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
            Loading...
          </>
        ) : (
          'View Full Menu'
        )}
      </button>
    </div>
  )
}
