import ImageCarousel from '@/components/ImageCarousel';

export default function Project4() {
  const images = [
    {
      src: '/images/projects/honeycomb/image1.png',
      alt: 'Honeycomb Panels Image 1'
    },
    {
      src: '/images/projects/honeycomb/image2.png',
      alt: 'Honeycomb Panels Image 2'
    },
    {
      src: '/images/projects/honeycomb/image3.png',
      alt: 'Honeycomb Panels Image 3'
    },
    {
      src: '/images/projects/honeycomb/image4.png',
      alt: 'Honeycomb Panels Image 4'
    }
  ];

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-mono mb-6 text-gray-700">HONEYCOMB PANELS</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-mono mb-4 text-gray-700">Overview</h2>
          <p className="font-mono text-gray-700">
            Custom-shaped honeycomb panels made fully in Rhino and Grasshopper from 3d point cloud. Optimized by shape and size. Output - manufacturing drawings with qr codes
          </p>
        </section>

        <section>
          <h2 className="text-xl font-mono mb-4 text-gray-700">Technologies Used</h2>
          <ul className="list-disc list-inside space-y-2 font-mono text-gray-700">
            <li>Rhino + Grasshopper</li>
            <li>C#</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-mono mb-4 text-gray-700">Gallery</h2>
          <div className="space-y-6">
            <div className="w-full aspect-video bg-white rounded-lg overflow-hidden">
              <ImageCarousel images={images} />
            </div>
            
            <div className="w-full h-[600px] bg-white rounded-lg overflow-hidden">
              <img
                src="/images/projects/honeycomb/image5.png"
                alt="Honeycomb Panels Additional View"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 