"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import HeaderContent from "./components/slides/header/HeaderContent";
import { useEffect, useRef } from "react";

export default function Home() {
    function renderBullet(index: number, className: string) {
        return `<span class="bg-emerald-600 w-3 h-3 ${className}"></span>`;
    }
    
    return (
        <>
            <Swiper
                style={{ height: "100vh", border: 'none', outline: 'none' }}
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
            >
                <SwiperSlide className="flex items-center justify-center bg-white" data-index="1">
                    <HeaderContent />
                </SwiperSlide>
                <SwiperSlide className="bg-white text-black">
                    <div className="absolute -top-1/4 -right-10 w-64 h-64 rounded-full flex items-center justify-center shadow-lg filter blur-3xl opacity-75 bg-gradient-to-br from-emerald-500 to-emerald-600"></div>
                </SwiperSlide>
                <SwiperSlide className="bg-white text-black">
                    <div className="absolute -top-1/4 -right-10 w-64 h-64 rounded-full flex items-center justify-center shadow-lg filter blur-3xl opacity-75 bg-gradient-to-br from-blue-500 to-sky-600"></div>
                </SwiperSlide>
                <SwiperSlide className="bg-white text-black">
                    <div className="absolute -top-1/4 -right-10 w-64 h-64 rounded-full flex items-center justify-center shadow-lg filter blur-3xl opacity-75 bg-gradient-to-br from-blue-500 to-sky-600"></div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
