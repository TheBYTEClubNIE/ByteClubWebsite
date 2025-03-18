"use client";
import React from 'react'
import Main from '../components/Ideathon/Main'
import AboutUs from '../components/Ideathon/IdeaAbout';
import IdeaFooter from '../components/Ideathon/ideaFooter';
import IdeaFAQs from '../components/Ideathon/IdeaFAQs';
import { ByteTimeline } from '../components/ByteHackathon/ByteTimeline';
import IdeaTeamInfo from '../components/Ideathon/IdeaTeamInfo';
// import IdeaNavbar from '../components/Ideathon/IdeaNavbar';
// import Navbar from '../components/Navbar/Navbar';

const Page = () => {
    return (
        <div>

            <Main />
            <AboutUs/>
            <IdeaFAQs/>
            <ByteTimeline/>
            <IdeaTeamInfo/>
            <IdeaFooter/>
        </div>
    )
}

export default Page
