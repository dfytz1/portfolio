import ImageCarousel from '@/components/ImageCarousel';
import Image from 'next/image';

export default function Project5() {
  const images = [
    {
      src: '/images/projects/textile/image1.png',
      alt: 'Textile Panels Image 1'
    },
    {
      src: '/images/projects/textile/image2.png',
      alt: 'Textile Panels Image 2'
    },
    {
      src: '/images/projects/textile/image3.png',
      alt: 'Textile Panels Image 3'
    },
    {
      src: '/images/projects/textile/image4.png',
      alt: 'Textile Panels Image 4'
    },
    {
      src: '/images/projects/textile/image5.png',
      alt: 'Textile Panels Image 5'
    },
    {
      src: '/images/projects/textile/image6.png',
      alt: 'Textile Panels Image 6'
    },
    {
      src: '/images/projects/textile/image7.png',
      alt: 'Textile Panels Image 7'
    },
    {
      src: '/images/projects/textile/image9.jpg',
      alt: 'Textile Panels Image 9'
    },
    {
      src: '/images/projects/textile/image10.jpg',
      alt: 'Textile Panels Image 10'
    },
    {
      src: '/images/projects/textile/image11.jpg',
      alt: 'Textile Panels Image 11'
    },
    {
      src: '/images/projects/textile/image12.jpg',
      alt: 'Textile Panels Image 12'
    }
  ];

  return (
    <div className="max-w-4xl p-4">
      <h1 className="text-3xl font-mono mb-6 text-gray-700">TEXTILE PANELS</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-mono mb-4 text-gray-700">Overview</h2>
          <p className="font-mono text-gray-700">
            Cloth membrane panels made fully in Rhino and Grasshopper. As input algorithm takes triangular meshes or surfaces, as output - excels with parts lists, valid closed 3d models of each part, production drawings per each part, part nesting.
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
              <Image
                src="/images/projects/textile/image8.png"
                alt="Textile Panels Additional View"
                className="w-full h-full object-contain"
                width={1000}
                height={600}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 