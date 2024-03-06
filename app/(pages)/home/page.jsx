'use client'
import Explore from '@/app/ui/Explore';
import Features from '@/app/ui/Features';
import AboutSection from '@/app/ui/AboutSection';
import Header from '@/app/ui/Header';
import Legacy from '@/app/ui/Legacy';
import React from 'react'
import About from '../about/page';
import Link from 'next/link';

function Home() {
    return (
        <main className="flex flex-col items-center justify-between min-h-screen">
    
          <div className=" place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px]  before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    
            <Header/>
            <Features/>
    
            <Explore/>
           
            <Legacy/>
            <AboutSection/>
          </div>
    
          
        </main>
      );
}

export default Home
