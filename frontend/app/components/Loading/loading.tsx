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





            <div className="typewriter relative flex justify-center items-center h-screen">
                <div>
                    <h1 className="overflow-hidden text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">Build Your Technical Expertise</h1>
                </div>
            </div>
        </div>


    )
}

export default Loading