"use client";
import React, { useEffect } from 'react';
import Main from '../components/Ideathon/Main';
import AboutUs from '../components/Ideathon/IdeaAbout';
import IdeaFooter from '../components/Ideathon/ideaFooter';
import IdeaFAQs from '../components/Ideathon/IdeaFAQs';
import IdeaTeamInfo from '../components/Ideathon/IdeaTeamInfo';
import IdeaProblem from '../components/Ideathon/ideaProblem';

const Page = () => {
    useEffect(() => {
        const hasReloaded = sessionStorage.getItem("hasReloaded");

        if (!hasReloaded) {
            sessionStorage.setItem("hasReloaded", "true");
            window.location.reload();
        }
    }, []);

    return (
        <div className='bg-gray-900'>
            <Main />
            <AboutUs />
            <IdeaProblem />
            <IdeaFAQs />
            <IdeaTeamInfo />
            <IdeaFooter />
        </div>
    );
};

export default Page;
