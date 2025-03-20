import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderConfirmed = () => {
    const location = useLocation();
    const orderDetails = location.state;

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-green-100">
            <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full text-center">
            
                <div className="flex items-center justify-center">
                    <div className="bg-green-500 text-white text-6xl rounded-full p-4 shadow-[0_0_20px_5px_rgba(34,197,94,0.5)]">
                        ✔️
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-green-600 mt-4">Order Confirmed!</h1>
                <p className="text-gray-600 mt-2">Thank you for your order. We're preparing it for delivery.</p>

             
                <div className="mt-6 bg-green-50 p-5 rounded-lg text-left shadow-inner">
                    <h2 className="font-bold text-xl text-green-700 mb-3">Order Summary</h2>
                    <div className="text-gray-700">
                        <p className="flex justify-between">
                            <span>Subtotal:</span>
                            <span className="font-medium">₹{orderDetails.subtotal}</span>
                        </p>
                        <p className="flex justify-between">
                            <span>Tax:</span>
                            <span className="font-medium">₹{orderDetails.tax}</span>
                        </p>
                        <p className="flex justify-between">
                            <span>Delivery Charges:</span>
                            <span className="font-medium">₹{orderDetails.deliveryCharge}</span>
                        </p>
                        <hr className="my-3 border-green-300" />
                        <p className="flex justify-between font-bold text-green-600 text-lg">
                            <span>Final Total:</span>
                            <span>₹{orderDetails.finalTotal}</span>
                        </p>
                    </div>
                </div>

                <button
                    className="bg-green-500 text-white px-6 py-2 rounded-lg mt-6 hover:bg-green-600 transition-transform active:scale-95 shadow-md"
                    onClick={() => window.location.href = '/'}
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default OrderConfirmed;
