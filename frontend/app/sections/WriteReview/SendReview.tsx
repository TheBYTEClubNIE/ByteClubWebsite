import React from 'react'
import WriteReview from './WriteReview'
import "./WriteReview.scss"
// import MsgBox from '@/app/components/MsgBox'


const SendReview = () => {

  return (
    <div className="h-full pt-28 bg-stone-950">
 
      <div className="text-6xl max-md:text-4xl text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold shadow-md shadow-green-300/10 pb-2 mb-4">Send Review</div>

      <div className='flex items-center pb-16'>
        <div className='w-1/2 inline-block relative max-[800px]:hidden '>
          <div className="h-auto border-2 rounded-2xl animate__delay-1s backdrop-blur-lg border-gradient-to-r from-indigo-500 to-purple-600 border-opacity-15 w-4/5 mx-16 px-8 py-4  bg-opacity-20 bg-slate-200 hover:scale-105 transition-all duration-500 ease-in-out">
            <div className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-bold text-4xl text-transparent my-4 bg-clip-text mx-4 '>Write a Review about the Website</div>
            <div className="text-md mx-4 drop-shadow-md shadow-red-600">Your feedback matters to us! Let us know about your experience with The BYTE Club. Share your thoughts on usability, design, or specific features you found helpful. We’re always looking to improve, and your review can help us make this site better for everyone!</div>
          </div>
        </div>

        <WriteReview />
      </div>


      <div className="wave-container max-md:hidden">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(69, 69, 69, 0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(41, 37, 37, 0.612)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(19, 17, 17, 0.212)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#000000" />
          </g>
        </svg>
      </div>

    </div>
  )
}

export default SendReview
