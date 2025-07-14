import ImageCarousel from '@/components/ImageCarousel';

export default function Diploma() {

  return (
    <div className="max-w-4xl p-4">
      <h1 className="text-3xl font-mono mb-6 text-gray-700">DIPLOMA</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-mono mb-4 text-gray-700">Overview</h2>
          <p className="font-mono text-gray-700">
            Bachelor's degree project, presenting exhibition center for the city of Dnipro. The project is a part of the city's development plan and is aimed at creating a new cultural and educational center for the city. Fully made in Rhino inside Revit and Grasshopper. Rendered in UE5.
          </p>
        </section>



        <section>
          <h2 className="text-xl font-mono mb-4 text-gray-700">Gallery</h2>
          <div className="w-full max-w-5xl mx-auto bg-white">
            <ImageCarousel 
              folderPath="/images/projects/diploma"
              imageCount={31}
              baseAltText="Diploma Project Image"
            />
          </div>
        </section>
      </div>
    </div>
  );
} 