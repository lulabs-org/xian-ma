export default function Dashboard() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Test Component
          </h2>
          <p className="text-gray-600">
            Welcome to the dashboard! This is a simple test page.
          </p>
          <div className="mt-4 p-4 bg-blue-100 rounded-md">
            <p className="text-blue-800">Test content goes here</p>
          </div>
        </div>
      </div>
    </main>
  );
}
