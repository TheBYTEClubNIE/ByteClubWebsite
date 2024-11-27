'use client';

import React, { useState, useEffect } from 'react';
import './WriteReview.scss';
import { useForm } from 'react-hook-form';

type FormData =  {
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

    // const [formData, setFormData] = useState<FormData>({
    //     name: '',
    //     email: '',
    //     isStudent: 'yes',
    //     message: '',
    // });

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const { name, value } = e.target;
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };



    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log('Form data submitted:', formData);
    // };

    const {register, handleSubmit, formState: { errors }} = useForm<FormData>();

    const onSubmit = handleSubmit(async (data) => {
        try {
            const response = await fetch('/api/sendReviewEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            const result = await response.json();
    
            if (response.ok) {
                console.log(result.message);
                handleFlip();
            } else {
                console.error(result.message);
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    });
    

    




    return (
        <div className="flip-card-3D-wrapper" id='feedback'>
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
                    <form onSubmit={onSubmit}>
                        <div className="input-group">
                            <input {...register("name", { maxLength: 20 })} type="text" name="name"  />
                            <label className='input-label'>Name</label>
                            {errors.name && <span className='text-red-600 text-xs p-0'>Max Lenght is 20</span>}
                        </div>
                        <div className="input-group">
                            <input {...register("email", { pattern: /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/ })} type='text' name="email"  />
                            <label className='input-label'>E-mail</label>
                            {errors.email && <span className='text-red-600 text-xs p-0'>Should be in this format example@email.com</span>}
                        </div>
                        <div className="flex justify-evenly w-4/5 mx-auto text-white">
                            <label className="flex items-center text-white">
                                <input {...register("isStudent", {required: true})} type="radio" name="isStudent" value="yes" className="mr-2"/> Student
                            </label>
                            <label className=" flex items-center text-white">
                                <input {...register("isStudent", {required: true})} type="radio" name="isStudent" value="no"  className="mr-2" /> Not a Student
                            </label>

                        </div>
                            {errors.isStudent && <span className='text-red-600 text-xs p-0'>This feild is required</span>}
                        <div className="input-group">
                            <textarea {...register("message",{required: true})} name='message' />
                            <label className='textarea-label'>Message</label>
                            {errors.message && <span className='text-red-600 text-xs p-0'>This field is required</span>}
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
