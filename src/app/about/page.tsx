'use client';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="min-h-screen flex items-start pt-16">
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
                                <li>• Web development</li>
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
                                <li>• github.com/Dfytz1</li>
                            </ul>
                        </section>
                    </div>
                </div>

                {/* Right side */}
                <div className="w-full md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-8">
                        <Image
                            src="/images/bug-icon.png"
                            alt="Bug icon"
                            width={24}
                            height={24}
                        />
                        <h2 className="text-2xl font-mono text-gray-700">Ivan Grebennikov</h2>
                    </div>
                    
                    <Image
                        src="/images/profile-photo.png"
                        alt="Ivan Grebennikov"
                        width={300}
                        height={300}
                        className="mb-8"
                    />

                    <div className="space-y-6">
                        <section>
                            <h2 className="text-xl font-mono mb-4 text-gray-700">ME</h2>
                            <ul className="space-y-2 font-mono text-gray-700">
                                <li>• Hard worker</li>
                                <li>• In love with programming and architecture</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-xl font-mono mb-4 text-gray-700">CAREER</h2>
                            <ul className="space-y-2 font-mono text-sm text-gray-700">
                                <li>• 2018-2022 Bachelor degree in architecture</li>
                                <li>• 2021-2022 Architect&apos;s assistant (Parametric modeling)</li>
                                <li>• 2022-2023 Upwork freelance (Rhino + Grasshopper)</li>
                                <li>• 2023-prnt Ingeneering company based in Tel Aviv (Rhino + Grasshopper)</li>
                                <li>• 2024-prnt International facade company based in France (Rhino + Grasshopper)</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
} 