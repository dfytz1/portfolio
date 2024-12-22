import YouTubeEmbed from '@/components/YouTubeEmbed';
import ImageCarousel from '@/components/ImageCarousel';

const projectImages = [
    {
        src: "/images/projects/paneling-tool/image1.png",
        alt: "Paneling Tool Interface"
    },
    {
        src: "/images/projects/paneling-tool/image2.png",
        alt: "Panel Generation Process"
    },
    {
        src: "/images/projects/paneling-tool/image3.png",
        alt: "Generated Patterns"
    },
    {
        src: "/images/projects/paneling-tool/image4.png",
        alt: "Generated Patterns"
    },
    // Add as many images as you need
];

export default function Project3() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">PANELING TOOL</h1>
      
      <div className="space-y-8">
        {/* Overview Section */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Overview</h2>
          <p className="text-gray-700">
            The algorithm that can create flat patterns and production drawings of aluminium facade panels. 
            Uses 2d or 3d data as input. Different profiles and panel types can be uploaded. 
            Works in web via Shapediver direct embedding.
          </p>
        </section>

        {/* Technologies Used */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Technologies Used</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Rhino + grasshopper + plug-ins</li>
            <li>Shapediver platform</li>
            <li>Web platform</li>
          </ul>
        </section>

        {/* Images Section */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Project Images</h2>
          <ImageCarousel images={projectImages} />
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