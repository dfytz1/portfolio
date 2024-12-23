import ImageCarousel from '@/components/ImageCarousel';

export default function Project1() {
  const images = [
    {
      src: '/images/projects/unitize/image1.png',
      alt: 'Unitize System Image 1'
    },
    {
      src: '/images/projects/unitize/image2.png',
      alt: 'Unitize System Image 2'
    },
    {
      src: '/images/projects/unitize/image3.png',
      alt: 'Unitize System Image 3'
    },
    {
      src: '/images/projects/unitize/image4.png',
      alt: 'Unitize System Image 4'
    }
  ];

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-mono mb-6 text-gray-700">UNITIZE SYSTEM</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-mono mb-4 text-gray-700">Overview</h2>
          <p className="font-mono text-gray-700">
            Parametric tool for creating any unitize systems or aluminium panels on facades in Revit. Can create corner units with different angles. Inputs for the algorithm is unit sample that we want to scale, and grid we would like to populate. Grid can be extracted from Revit curtain walls, provided from dwg or made in Rhino. As an output you get Revit families with uploaded units, scaled and placed to match provided grid. The algorithm creates new family for each unit of different size. Materials and parameters can be applied. Excel tables with materials can be exported.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-mono mb-4 text-gray-700">Technologies Used</h2>
          <ul className="list-disc list-inside space-y-2 font-mono text-gray-700">
            <li>Rhino + Grasshopper</li>
            <li>Rhino inside Revit</li>
            <li>C#</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-mono mb-4 text-gray-700">Gallery</h2>
          <div className="w-full aspect-video bg-white rounded-lg overflow-hidden">
            <ImageCarousel images={images} />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-mono mb-4 text-gray-700">Demo Video</h2>
          <div className="w-full aspect-video bg-white overflow-hidden">
            <iframe
              src="https://player.vimeo.com/video/1041595847"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    </div>
  );
} 