import React from 'react';
// import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LandingLayout from './landingLayout';
// import Footer from '../components/Footer';

const MainLayout: React.FC = () => {
    return (
        <div className="flex flex-col w-full min-h-screen  text-white">
            <Navbar />
            <main className="w-full h-screen mx-auto px-4 py-8">
                <LandingLayout/>
            </main>

            {/* <Footer /> */}
        </div>
    );
};

export default MainLayout;