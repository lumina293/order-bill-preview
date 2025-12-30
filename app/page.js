export default function Home() {
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
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <p className="text-gray-600">Order details will appear here...</p>
                </div>
            </main>
        </div>
    );
}