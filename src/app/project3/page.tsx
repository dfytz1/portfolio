import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import ImageCarousel from '@/components/ImageCarousel';

export default function Project3() {
  // Regular images for carousel
  const standaloneImages = [
    {
      src: '/images/projects/paneling-tool/image5.png',
      alt: 'Paneling Tool Additional View'
    }
  ];

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-mono mb-6 text-gray-700">PANELING TOOL</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-mono mb-4 text-gray-700">Overview</h2>
          <p className="font-mono text-gray-700">
            The algorithm that can create flat patterns and production drawings of aluminium facade panels. Uses 2d or 3d data as input. Different profiles and panel types can be uploaded. Works in web via Shapediver direct embedding. Exports as DWG and DXF with correct layers in hebrew.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-mono mb-4 text-gray-700">Gallery</h2>
          <div className="space-y-6">
            {/* Before/After Pair */}
            <div className="w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
              <BeforeAfterSlider
                beforeImage="/images/projects/paneling-tool/image3.png"
                afterImage="/images/projects/paneling-tool/image4.png"
                beforeAlt="Before paneling - Second example"
                afterAlt="After paneling - Second example"
              />
            </div>

            {/* Single Image */}
            <div className="w-full h-[600px] rounded-lg overflow-hidden">
              <img
                src="/images/projects/paneling-tool/image5.png"
                alt="Paneling Tool Additional View"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section>
          <h2 className="text-xl font-mono mb-4 text-gray-700">Demo Video</h2>
          <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/F-1cuQprgmw"
              title="Paneling Tool Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-mono mb-4 text-gray-700">Technology</h2>
          <ul className="list-disc list-inside space-y-2 font-mono text-gray-700">
            <li>Rhino + grasshopper + plug-ins</li>
            <li>Shapediver platform</li>
            <li>Web platform</li>
          </ul>
        </section>
      </div>
    </div>
  );
} 