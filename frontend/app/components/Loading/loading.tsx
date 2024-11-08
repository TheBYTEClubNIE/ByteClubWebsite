'use client'
import "./loading.css"
import { Vortex } from "../ui/vortex";


const Loading = () => {
    return (
        <div className="relative h-screen w-screen overflow-hidden">
        <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
            
            <div className="typewriter relative flex justify-center items-center h-screen">
                <div>
                    <h1 className="loadingg overflow-hidden hidden lg:block sm:text-4xl md:text-5xl lg:text-7xl ">Build Your Technical Expertise</h1>
                    <h1 className="loadingg overflow-hidden lg:hidden block text-2xl sm:text-5xl md:text-6xl lg:text-7xl ">The BYTE club</h1>
                </div>
            </div>
        </Vortex>
        </div>


    )
}

export default Loading