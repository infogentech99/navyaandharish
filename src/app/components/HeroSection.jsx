"use client";

import { useState } from "react";
import LadkiDetails from "../components/LadkiDetails";
import RoseHeroTemp from "../components/RoseHeroTemp";
import BottomNavigation from "../components/BottomNavigation";

export default function HeroSection() {
  const [selectedSide, setSelectedSide] = useState(null);

  return (
    <section id="home" className="relative min-h-screen w-full scroll-mt-0">

      {/* ================= BACKGROUND ================= */}
      <div
        className="fixed inset-0 z-0 h-screen w-full bg-[#faf4e8] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/family-bg5.webp')",
          backgroundColor: "#faf4e8",
        }}
      />

  <div className="pointer-events-none fixed inset-0 z-20 h-screen w-screen">
    {/* <RoseHeroTemp /> */}
  </div>
      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center px-10 py-10 pb-28 sm:px-8 md:px-12 lg:px-16 mt-10">

        {/* ================= GANESH ================= */}
        <div className="mt-4 flex justify-center md:mt-8">
          <img
            src="/assets/ganes.png"
            alt="Shree Ganesh"
            className="w-[100px] sm:w-[65px] md:w-[150px]"
          />
        </div>

        {/* ================= WEDDING LOGO ================= */}
        <div className="mt-8 flex flex-col items-center text-center md:mt-10">
          <img
            src="/assets/wedding-logo3.webp"
            alt="Wedding Logo"
            className="w-[160px] sm:w-[220px] md:w-[280px]"
          />

      
        </div>

      
        
       
          <div className="mt-6 w-full max-w-5xl pb-10 md:mt-16">

            
           
          
              <LadkiDetails />
           

          </div>
    

      </div>
   
    </section>
  );
}