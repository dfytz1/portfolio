export default function About() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">About Me</h1>
      <div className="space-y-4">
        <div className="w-48 h-48 bg-gray-200 rounded-lg mb-4">
          {/* Photo will go here */}
        </div>
        <div className="space-y-4">
          <p>Your bio will go here...</p>
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-gray-800">Contact</h2>
            <p>Email: your.email@example.com</p>
            {/* Add more contact information */}
          </div>
        </div>
      </div>
    </div>
  );
} 