import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
    const [showPopup, setShowPopup] = useState(false);
    const [deliveryType, setDeliveryType] = useState('Normal Delivery');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const togglePopup = () => setShowPopup(!showPopup);

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const tax = subtotal * 0.05;
    const deliveryCharge = deliveryType === 'Fast Delivery' ? 100 : 50;
    const finalTotal = subtotal + tax + deliveryCharge;

    const handleConfirmOrder = () => {
        const name = document.getElementById('name')?.value.trim();
        const address = document.getElementById('address')?.value.trim();
        const city = document.getElementById('city')?.value.trim();
        const pincode = document.getElementById('pincode')?.value.trim();

        if (!name || !address || !city || !pincode) {
            alert('Please fill in all the required details.');
            return;
        }

        setLoading(true);
        setTimeout(() => {
            const orderDetails = {
                items: cartItems,
                subtotal: subtotal.toFixed(2),
                tax: tax.toFixed(2),
                deliveryCharge: deliveryCharge.toFixed(2),
                finalTotal: finalTotal.toFixed(2),
                customerDetails: { name, address, city, pincode }
            };
            navigate('/order-confirmed', { state: orderDetails });
        }, 2000);
    };

    return (
        <div className="p-6 mt-[100px]">
            <h1 className="text-3xl font-bold text-orange-500 mb-6 text-center">🛒 Your Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-gray-500 text-lg text-center">
                    Your cart is empty. Start adding some delicious items!
                </p>
            ) : (
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-start bg-white shadow-md rounded-lg p-5 border border-orange-300 hover:scale-105 transition-transform"
                        >
                            <div className="w-full">
                                <h2 className="font-semibold text-lg text-orange-600">
                                    {item.name}
                                </h2>
                                <p className="text-gray-500 mt-1">
                                    ₹{item.price} x {item.quantity}
                                </p>
                            </div>

                            <div className="flex items-center gap-2 mt-3 w-full">
                                <button
                                    onClick={() => decreaseQuantity(item.id)}
                                    className="bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-600 active:scale-90"
                                >
                                    −
                                </button>

                                <span className="font-medium text-lg">{item.quantity}</span>

                                <button
                                    onClick={() => increaseQuantity(item.id)}
                                    className="bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-600 active:scale-90"
                                >
                                    +
                                </button>
                            </div>

                            <button
                                className="bg-red-500 text-white w-full mt-3 py-2 rounded-md hover:bg-red-600 active:scale-90 shadow-md"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {cartItems.length > 0 && (
                <div className="mt-8 p-5 bg-orange-100 text-orange-700 rounded-lg shadow-md border border-orange-300">
                    <p className="text-2xl font-bold text-center">Total: ₹{subtotal.toFixed(2)}</p>

                    <div className="flex justify-center mt-4">
                        <button
                            className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 active:scale-90 shadow-md"
                            onClick={togglePopup}
                        >
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            )}

      
            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-md flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
                        <h2 className="text-2xl font-bold text-orange-500 text-center mb-4">
                            Enter Your Details
                        </h2>

                        
                        <div className="bg-orange-100 p-4 rounded-md mb-4">
                            <p className="font-semibold">Subtotal: ₹{subtotal.toFixed(2)}</p>
                            <p>Tax (5%): ₹{tax.toFixed(2)}</p>
                            <p>Delivery Charge: ₹{deliveryCharge.toFixed(2)}</p>
                            <hr className="my-2 border-orange-400" />
                            <p className="font-bold text-lg">Total: ₹{finalTotal.toFixed(2)}</p>
                        </div>

                   
                        <div className="flex flex-col gap-4">
                            <input id="name" type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                            <input id="address" type="text" placeholder="Address" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                            <div className="flex gap-4">
                                <input id="city" type="text" placeholder="City" className="w-2/3 px-4 py-2 border border-gray-300 rounded-md" />
                                <input id="pincode" type="text" placeholder="Pincode" className="w-1/3 px-4 py-2 border border-gray-300 rounded-md" />
                            </div>

                            <select
                                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                onChange={(e) => setDeliveryType(e.target.value)}
                            >
                                <option>Normal Delivery</option>
                                <option>Fast Delivery</option>
                            </select>

                            <div className="flex justify-between mt-4">
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                    onClick={togglePopup}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                                    onClick={handleConfirmOrder}
                                >
                                    Confirm Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {loading && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-md flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-orange-500 mb-4">
                            Processing Your Order...
                        </h2>
                        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-orange-500 border-solid"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
