export default function PDFAboutPage() {
    return (
        <div className="min-h-screen flex items-start justify-center pt-16">
            <div className="bg-white w-full max-w-[1000px] flex flex-col-reverse md:flex-row">
                {/* Left side */}
                <div className="w-full md:w-1/2 p-8">
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-xl font-mono mb-4 text-gray-700">SKILLS</h2>
                            <ul className="space-y-2 font-mono text-gray-700">
                                <li>• Parametric modeling</li>
                                <li>• Conventional 3d modeling</li>
                                <li>• Basic Python and C#</li>
                                <li>• Data analysis</li>
                                <li>• BIM integration</li>
                                <li>• Architecture visualization</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-xl font-mono mb-4 text-gray-700">SOFT</h2>
                            <ul className="space-y-2 font-mono text-gray-700">
                                <li>• Grasshopper 3d</li>
                                <li>• Rhinoceros</li>
                                <li>• Rhino Inside Revit</li>
                                <li>• Grasshopper-Archicad</li>
                                <li>• Autocad</li>
                                <li>• Unreal Engine</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-xl font-mono mb-4 text-gray-700">CONTACT</h2>
                            <ul className="space-y-2 font-mono text-gray-700">
                                <li>• w.giarch@gmail.com</li>
                                <li>• dfytz1@gmail.com</li>
                                <li>• +380507621439</li>
                                <li>• t.me/Dfytz1</li>
                            </ul>
                        </section>
                    </div>
                </div>

                {/* Right side */}
                <div className="w-full md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-8">
                        <img
                            src="/images/bug-icon.png"
                            alt="Bug icon"
                            width={24}
                            height={24}
                            style={{ width: '24px', height: '24px' }}
                        />
                        <h2 className="text-2xl font-mono text-gray-700">Ivan Grebennikov</h2>
                    </div>
                    
                    <img
                        src="/images/profile-photo.png"
                        alt="Ivan Grebennikov"
                        className="mb-8"
                        style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                    />

                    <div className="space-y-6">
                        <section>
                            <h2 className="text-xl font-mono mb-4 text-gray-700">CAREER</h2>
                            <ul className="space-y-2 font-mono text-sm text-gray-700">
                                <li>• 2018-2022 Bachelor degree in architecture</li>
                                <li>• 2021-2022 Architect&apos;s assistant </li>
                                <li>• 2022-2023 Upwork freelance</li>
                                <li>• 2023-2024 JOT company</li>
                                <li>• 2024-prnt Facade Textile International</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
} 