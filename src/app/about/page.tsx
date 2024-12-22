'use client';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="min-h-screen flex items-start pt-16">
            <div className="bg-white w-[1000px] h-[600px] flex">
                {/* Left side */}
                <div className="w-1/2 p-8">
                    <h1 className="text-6xl font-mono mb-8">CV</h1>
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-xl font-mono mb-4">SKILLS</h2>
                            <ul className="space-y-2 font-mono">
                                <li>• Parametric modeling</li>
                                <li>• Conventional 3d modeling</li>
                                <li>• Basic Python and C#</li>
                                <li>• Data analysis</li>
                                <li>• BIM integration</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-xl font-mono mb-4">SOFT</h2>
                            <ul className="space-y-2 font-mono">
                                <li>• Grasshopper 3d</li>
                                <li>• Rhinoceros</li>
                                <li>• Rhino Inside Revit</li>
                                <li>• Grasshopper-Archicad</li>
                                <li>• Autocad</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-xl font-mono mb-4">INFO</h2>
                            <ul className="space-y-2 font-mono">
                                <li>• w.giarch@gmail.com</li>
                                <li>• dfytz1@gmail.com</li>
                                <li>• +380507621439</li>
                                <li>• t.me/Dfytz1</li>
                            </ul>
                        </section>
                    </div>
                </div>

                {/* Right side */}
                <div className="w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-8">
                        <Image
                            src="/images/bug-icon.png"
                            alt="Bug icon"
                            width={24}
                            height={24}
                        />
                        <h2 className="text-2xl font-mono">Ivan Grebennikov</h2>
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
                            <h2 className="text-xl font-mono mb-4">ME</h2>
                            <ul className="space-y-2 font-mono">
                                <li>• Hard worker</li>
                                <li>• In love with programming and architecture</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-xl font-mono mb-4">CAREER</h2>
                            <ul className="space-y-2 font-mono text-sm">
                                <li>• 2018-2022 Bachelor degree in architecture</li>
                                <li>• 2021-2022 Architect's assistant (Parametric modeling)</li>
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