'use client'
import "./loading.css"

import ParticleSystem from "../ParticleSystem";

const Loading = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Particle background */}
            <div className="absolute inset-0 z-0">
                <ParticleSystem />
            </div>

            {/* Typewriter text */}
            <div className="typewriter relative z-10">
                <h1 className="text-border text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    BUILD YOUR TECHNICAL EXPERTISE
                </h1>
            </div>
        </div>
    )
}

export default Loading