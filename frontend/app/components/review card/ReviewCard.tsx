"use client";
import React from 'react';

interface ReviewCardInterface {
  name?: string;
  sem?: string;
  branch?: string;
  text: string;
}

class ReviewCard extends React.Component<ReviewCardInterface> {
  render() {
    const { name, sem, branch, text } = this.props;
    const reviewTitle = name ? `${name}'s Review` : 'Website Review from Our Team'; // Fixed fallback content

    return (
      <div className="relative review-card min-w-52 md:min-w-80 flex flex-col my-6 bg-white shadow-sm border 
        border-slate-200 rounded-lg w-96 max-h-[200px] sm:max-h-[300px] md:max-h-[400px]">
        <div className="p-4">
          <h5 className="mb-2 text-slate-800 text-xl font-semibold">
            {reviewTitle}
          </h5>
          <p className="text-slate-600 leading-normal font-light">
            {text.slice(0, 100)} {/* Use `slice` to ensure consistency */}
          </p>
          {sem && <p className="text-slate-500 text-sm">Semester: {sem}</p>}
          {branch && <p className="text-slate-500 text-sm">Branch: {branch}</p>}
        </div>
      </div>
    );
  }
}

export default ReviewCard;
