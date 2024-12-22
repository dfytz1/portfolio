import ImageCarousel from '@/components/ImageCarousel';

export default function Project1() {
  const images = [
    {
      src: '/images/unitize/1.png',
      alt: 'Unitize System Image 1'
    },
    {
      src: '/images/unitize/2.png',
      alt: 'Unitize System Image 2'
    },
    {
      src: '/images/unitize/3.png',
      alt: 'Unitize System Image 3'
    },
    // Add more images as needed
  ];

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-mono mb-6 text-gray-700">UNITIZE SYSTEM</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-mono mb-4 text-gray-700">Overview</h2>
          <p className="font-mono text-gray-700">
            A parametric tool for creating unitized facade systems. The tool allows users to generate 
            complex facade patterns while maintaining manufacturing constraints and architectural design intent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-mono mb-4 text-gray-700">Features</h2>
          <ul className="list-disc list-inside space-y-2 font-mono text-gray-700">
            <li>Parametric control of panel dimensions and layouts</li>
            <li>Automatic generation of mullion systems</li>
            <li>Support for various panel types and materials</li>
            <li>Real-time visualization of changes</li>
            <li>Export capabilities for manufacturing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-mono mb-4 text-gray-700">Gallery</h2>
          <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <ImageCarousel images={images} />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-mono mb-4 text-gray-700">Technology</h2>
          <ul className="list-disc list-inside space-y-2 font-mono text-gray-700">
            <li>Grasshopper</li>
            <li>Rhino</li>
            <li>Python</li>
          </ul>
        </section>
      </div>
    </div>
  );
} 