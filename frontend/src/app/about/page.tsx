"use client";

import React, { useEffect, useState } from "react";
import AchievementSection from "@/components/common/about/AchievementSection";
import OurAgents from "@/components/common/about/OurAgents";
import Header from "@/components/common/header/Header";
import { HeartLogo } from "@/components/common/header/headerTools";
import CustomerCarePack from "@/components/modules/CustomerCarePack";
import Image from "next/image";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";

export default function About() {
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering only
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Prevents Next.js from rendering components that use "window"
    return null;
  }

  return (
    <section className="w-[92%] md:w-[88%] lg:w-[80%] mx-auto flex flex-col items-center mb-16">
      {/* Header */}
      <div className="w-full flex items-center justify-between gap-4 mt-4 pb-2 border-b border-gray-200">
        <Header />
        <div className="h-[60px] flex gap-4 items-center">
          <HeartLogo />
          <BsCart3 className="w-6 h-5 text-gray-700 hover:text-black cursor-pointer" />
          <Image src="/user.png" width={24} height={24} alt="User" />
        </div>
      </div>

      <div className="w-full mt-14 flex flex-col gap-16">
        {/* Breadcrumb */}
        <div className="flex flex-wrap gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          /
          <Link href="/about" className="text-black font-medium">
            About
          </Link>
        </div>

        {/* Our Story */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Text Column */}
          <div className="flex flex-col gap-7 w-full lg:w-[48%]">
            <h1 className="text-3xl md:text-4xl lg:text-[52px] leading-snug font-semibold text-gray-900">
              Our Story
            </h1>
            <div className="flex flex-col text-gray-700 text-base md:text-[17px] leading-relaxed gap-5">
              <p>
                Launched in 2015, Exclusive is South Asia’s premier online
                shopping marketplace with an active presence in Bangladesh.
                Supported by a wide range of tailored marketing, data, and
                service solutions, Exclusive has 10,500 sellers and 300 brands
                and serves over 3 million customers across the region.
              </p>
              <p>
                With more than 1 million products to offer and growing rapidly,
                Exclusive provides a diverse selection across categories ranging
                from consumer goods to fashion and lifestyle.
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full lg:w-[48%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/two-females.png"
              width={700}
              height={600}
              alt="Two African Female Girls"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Additional Sections */}
        <div className="w-full">
          <AchievementSection />
        </div>
        <div className="w-full">
          <OurAgents />
        </div>
        <div className="w-full">
          <CustomerCarePack />
        </div>
      </div>
    </section>
  );
}
