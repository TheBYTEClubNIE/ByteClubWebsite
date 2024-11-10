'use client';

import React, { useState, useEffect } from 'react';
import './WriteReview.css';

interface FormData {
    name: string;
    email: string;
    isStudent: string;
    message: string;
}

const WriteReview = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [buttonsVisible, setButtonsVisible] = useState(false);

    useEffect(() => {
        // Set button visibility to true after component mounts
        setButtonsVisible(true);
    }, []);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        isStudent: 'yes',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="flip-card-3D-wrapper">
            <div id="flip-card" className={isFlipped ? 'do-flip' : ''}>
                <div className="flip-card-front">
                    <div>
                    <div className='text-xl p-4'>
                        Some random text
                    </div>
                    <button className='button-85-front'
                        id=""
                        onClick={handleFlip}
                        style={{ visibility: buttonsVisible ? 'visible' : 'hidden' }}
                    >
                        Write A Review
                    </button>
                    </div>
                </div>
                <div className="flip-card-back">
                    <div className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-bold text-2xl text-transparent my-4 bg-clip-text'>Write A Review</div>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input type="text" name="name" value={formData.name} onChange={handleChange} />
                            <label className='input-label'>Name</label>
                        </div>
                        <div className="input-group">
                            <input type="email" name="email" value={formData.email} onChange={handleChange} />
                            <label className='input-label'>E-mail</label>
                        </div>
                        <div className="flex justify-evenly w-4/5 mx-auto text-white">
                            <label className="flex items-center text-white">
                                <input type="radio" name="isStudent" value="yes" checked={formData.isStudent === 'yes'} onChange={handleChange} className="mr-2"/> Student
                            </label>
                            <label className=" flex items-center text-white">
                                <input type="radio" name="isStudent" value="no" checked={formData.isStudent === 'no'} onChange={handleChange} className="mr-2" /> Not a Student
                            </label>
                        </div>
                        <div className="input-group">
                            <textarea name='message' value={formData.message} onChange={handleChange} required />
                            <label className='textarea-label'>Message*</label>
                        </div>
                        <div className='input-group'>
                            <button className='button-85-back'
                                id=""
                                style={{ visibility: buttonsVisible ? 'visible' : 'hidden' }}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WriteReview;
