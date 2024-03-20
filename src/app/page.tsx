"use client";

import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import HeaderContent from "./components/slides/header/HeaderContent";
import AboutMe from "./components/slides/about/AboutMe";
import Navbar from "./components/general/Navbar";
import BgDetails from "./components/details/BgDetails";

export default function Home() {
    const swiperRef = useRef(null) as any;
    const [currentIndex, setCurrentIndex] = useState(0);

    function renderBullet(index: number, className: string) {
        return `<span class="bg-emerald-600 w-3 h-3 ${className}"></span>`;
    }

    return (
        <>
            {/* { currentIndex != 0 ? <Navbar /> : null } */}
            <Swiper
                ref={swiperRef}
                style={{ height: "100vh", border: "none", outline: "none" }}
                slidesPerView={1}
                direction="vertical"
                mousewheel
                pagination={{
                    clickable: true,
                    renderBullet,
                    type: "bullets",
                }}
                speed={800}
                modules={[Mousewheel, Pagination]}
                onSlideChange={() => setCurrentIndex(swiperRef.current?.swiper?.realIndex)}
            >
                <SwiperSlide className="flex items-center justify-center bg-white" data-index="1">
                    <HeaderContent />
                </SwiperSlide>
                <SwiperSlide className="bg-white text-black p-24">
                    {/* About me */}
                    <AboutMe />
                    <div className="absolute bottom-10 left-40 transform scale-x-[-1]"><BgDetails option={1} colorPath="5793D0" height="240" width="280" /></div>
                    <div className="absolute -top-1/4 -right-10 w-64 h-64 rounded-full flex items-center justify-center shadow-lg filter blur-3xl opacity-75 bg-gradient-to-br from-emerald-500 to-emerald-600"></div>
                </SwiperSlide>
                <SwiperSlide className="bg-white text-black">
                    <div className="absolute -top-[4%] -left-24 w-64 h-64 rounded-full flex items-center justify-center shadow-lg filter blur-3xl opacity-75 bg-gradient-to-br from-emerald-500 to-emerald-600"></div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
