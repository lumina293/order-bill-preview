'use client';

import { useState } from 'react';

export default function Home() {
    // Mock order data
    const orderItems = [
        { id: 1, name: "Margherita Pizza", quantity: 2, unitPrice: 12.99 },
        { id: 2, name: "Pepperoni Pizza", quantity: 1, unitPrice: 14.99 },
        { id: 3, name: "Coca-Cola (1L)", quantity: 2, unitPrice: 2.99 }
    ];

    // Fees
    const deliveryFee = 3.99;
    const platformFee = 1.50;
    const taxRate = 0.08; // 8%

    // State for promo code input
    const [promoCode, setPromoCode] = useState('');

    // Calculate line total
    const calculateLineTotal = (quantity, unitPrice) => {
        return quantity * unitPrice;
    };

    // Calculate subtotal
    const calculateSubtotal = () => {
        return orderItems.reduce((sum, item) => {
            return sum + calculateLineTotal(item.quantity, item.unitPrice);
        }, 0);
    };

    // Calculate tax
    const calculateTax = (subtotal) => {
        return subtotal * taxRate;
    };

    // Calculate grand total
    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const tax = calculateTax(subtotal);
        return subtotal + deliveryFee + platformFee + tax;
    };

    // Format currency
    const formatCurrency = (amount) => {
        return `$${amount.toFixed(2)}`;
    };

    const subtotal = calculateSubtotal();
    const tax = calculateTax(subtotal);
    const total = calculateTotal();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Order Bill Preview
                    </h1>
                    <p className="text-sm text-gray-600 mt-1">
                        Review your order details before confirming
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Order Items Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">
                        Order Items
                    </h2>

                    <div className="space-y-4">
                        {orderItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                            >
                                {/* Item Details */}
                                <div className="flex-1">
                                    <h3 className="font-medium text-gray-900">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Qty: {item.quantity} × {formatCurrency(item.unitPrice)}
                                    </p>
                                </div>

                                {/* Line Total */}
                                <div className="text-right ml-4">
                                    <p className="font-semibold text-gray-900">
                                        {formatCurrency(calculateLineTotal(item.quantity, item.unitPrice))}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Promo Code Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">
                        Promo Code
                    </h2>

                    <div className="flex gap-3">
                        <input
                            type="text"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                            placeholder="Enter promo code"
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button
                            onClick={() => console.log('Apply clicked:', promoCode)}
                            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        >
                            Apply
                        </button>
                    </div>
                </div>

                {/* Price Breakdown Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">
                        Bill Summary
                    </h2>

                    <div className="space-y-3">
                        {/* Subtotal */}
                        <div className="flex justify-between text-gray-700">
                            <span>Subtotal</span>
                            <span>{formatCurrency(subtotal)}</span>
                        </div>

                        {/* Delivery Fee */}
                        <div className="flex justify-between text-gray-700">
                            <span>Delivery Fee</span>
                            <span>{formatCurrency(deliveryFee)}</span>
                        </div>

                        {/* Platform Fee */}
                        <div className="flex justify-between text-gray-700">
                            <span>Platform Fee</span>
                            <span>{formatCurrency(platformFee)}</span>
                        </div>

                        {/* Tax */}
                        <div className="flex justify-between text-gray-700">
                            <span>Tax (8%)</span>
                            <span>{formatCurrency(tax)}</span>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-200 my-3"></div>

                        {/* Total */}
                        <div className="flex justify-between text-lg font-bold text-gray-900">
                            <span>Total</span>
                            <span>{formatCurrency(total)}</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}