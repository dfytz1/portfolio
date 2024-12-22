import YouTubeEmbed from '@/components/YouTubeEmbed';

export default function Project2() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Project 2</h1>
      
      <div className="space-y-8">
        {/* Overview Section */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Overview</h2>
          <p className="text-gray-700">
            Project description goes here. Explain what the project does and why you built it.
          </p>
        </section>

        {/* Technologies Used */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Technologies Used</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Technology 1</li>
            <li>Technology 2</li>
            <li>Technology 3</li>
          </ul>
        </section>

        {/* Images Section */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Project Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-video bg-gray-200 rounded-lg"></div>
            <div className="aspect-video bg-gray-200 rounded-lg"></div>
          </div>
        </section>

        {/* Video Demo */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Video Demo</h2>
          <YouTubeEmbed videoId="F-1cuQprgmw" />
        </section>

        {/* Links */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Project Links</h2>
          <div className="space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">Live Demo</a>
            <a href="#" className="text-blue-600 hover:text-blue-800">GitHub Repository</a>
          </div>
        </section>
      </div>
    </div>
  );
} 