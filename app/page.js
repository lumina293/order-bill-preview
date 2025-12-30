export default function Home() {
    // Mock order data
    const orderItems = [
        { id: 1, name: "Margherita Pizza", quantity: 2, unitPrice: 12.99 },
        { id: 2, name: "Pepperoni Pizza", quantity: 1, unitPrice: 14.99 },
        { id: 3, name: "Coca-Cola (1L)", quantity: 2, unitPrice: 2.99 }
    ];

    // Calculate line totals
    const calculateLineTotal = (quantity, unitPrice) => {
        return quantity * unitPrice;
    };

    // Format currency
    const formatCurrency = (amount) => {
        return `$${amount.toFixed(2)}`;
    };

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

                {/* Placeholder for Price Breakdown */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <p className="text-gray-600">Price breakdown will appear here...</p>
                </div>
            </main>
        </div>
    );
}