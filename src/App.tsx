import React from 'react';
import './App.css';
import AppBar from "./components/appBar";
import {theme} from './components/appTheme';
import {Box, ThemeProvider} from '@mui/material';
import {v1} from "uuid";
import VideolistItem from "./components/VideoListItem";
import VideoList from "./components/VideoList";
import Title from "./components/Title";
import VideoPagination from "./components/VideoPagination";
import Footer from "./components/Footer";
import OptionsBar from "./components/OptionsBar";
import OptionsSelectItem from "./components/SearchOptionItem";
import VideoPageDetail from "./components/VideoPageDetail";
import VideoListInTable from "./components/VideoListInTable";

//Temp data for test render menu
const pageAboutID = v1();
const pagePracticeID = v1();
const pageCertificationID = v1();
const pageInstructorDirectoryID = v1();
const pageVODLoginID = v1();

type PageType = {
    title: string,
    id: string
}

type SubpagesType = {
    [key: string]: Array<string>
}

export const pages: Array<PageType> = [
    {title: 'ABOUT', id: pageAboutID},
    {title: 'PRACTICE', id: pagePracticeID},
    {title: 'CERTIFICATION', id: pageCertificationID},
    {title: 'INSTRUCTOR DIRECTORY', id: pageInstructorDirectoryID},
    {title: 'VIDEO ON DEMAND LOGIN', id: pageVODLoginID},
];

export const subPages: SubpagesType = {
    [pageAboutID]: ['YOQI', 'MARISA CRANFILL', 'FOUNDATIONS OF PRACTICE'],
    [pagePracticeID]: ['TEST YOUR QI', 'FREE VIDEOS', 'VIDEOS ON DEMAND', 'YOQI RESOURCE', 'PRACTICE FAQ'],
    [pageCertificationID]: ['TEACHER TRAINING PROGRAM', 'CLASSES &amp; WORKSHOPS', 'UPCOMING LIVE IMMERSIONS', 'TESTIMONIALS', 'HOMEWORK SUBMISSION', 'LIVE IMMERSION ASSISTANCE'],
    [pageInstructorDirectoryID]: [],
    [pageVODLoginID]: [],
}

const settings = ['Profile', 'Account', 'Dashboard', 'Logout', 'Settings'];

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <AppBar
                        pages={pages}
                        subPages={subPages}
                        settings={settings}
                    />
                    <OptionsBar/>
                    <Title/>
                    <VideoList/>
                    <VideoPagination/>
                    <VideoListInTable/>
                    <VideoPageDetail/>
                    <Footer/>
                </div>
            </ThemeProvider>
        </div>
    );
}

export default App;
