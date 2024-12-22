import YouTubeEmbed from '@/components/YouTubeEmbed';

export default function Project2() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-mono mb-6 text-gray-700">STICK SYSTEM</h1>
      
      <div className="space-y-8">
        {/* Overview Section */}
        <section>
          <h2 className="text-xl font-mono mb-4 text-gray-700">Overview</h2>
          <p className="font-mono text-gray-700">
            Stick facade system, made in Rhino and Grasshopper. Uses Schuco catalogue. As input takes lines for transoms and mullions - from revit elements/rhino/autocad. Uses attribute system in rhino to assign Schuco element and stretch it to correct size, trim screwholes and create details in the places of intersection. As output - creates excel sheets, Revit families. All duplicate geometry assigned to one family and placed in Revit model as instances
          </p>
        </section>

        {/* Technologies Used */}
        <section>
          <h2 className="text-xl font-mono mb-4 text-gray-700">Technologies Used</h2>
          <ul className="list-disc list-inside font-mono text-gray-700">
            <li>Rhino inside Revit</li>
            <li>Rhino + Grasshopper</li>
            <li>C#</li>
          </ul>
        </section>

        {/* Images Section */}
        <section>
          <h2 className="text-xl font-mono mb-4 text-gray-700">Project Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-video bg-gray-200 rounded-lg"></div>
            <div className="aspect-video bg-gray-200 rounded-lg"></div>
          </div>
        </section>

        {/* Video Demo */}
        <section>
          <h2 className="text-xl font-mono mb-4 text-gray-700">Video Demo</h2>
          <YouTubeEmbed videoId="NbwyVoN2naU" />
        </section>
      </div>
    </div>
  );
} 