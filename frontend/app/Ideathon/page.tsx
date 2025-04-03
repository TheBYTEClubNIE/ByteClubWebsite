"use client";
import React, { useEffect } from 'react';
import Main from '../components/Ideathon/Main';
import AboutUs from '../components/Ideathon/IdeaAbout';
import IdeaFooter from '../components/Ideathon/ideaFooter';
import IdeaFAQs from '../components/Ideathon/IdeaFAQs';
import { ByteTimeline } from '../components/ByteHackathon/ByteTimeline';
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
        <div>
            <Main />
            <AboutUs />
            <IdeaProblem />
            <IdeaFAQs />
            <ByteTimeline />
            <IdeaTeamInfo />
            <IdeaFooter />
        </div>
    );
};

export default Page;
