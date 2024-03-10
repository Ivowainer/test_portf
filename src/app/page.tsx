"use client";

import { useEffect, useRef, useState } from "react";

import type SwiperType from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

export default function Home() {
    return (
        <>
            <Swiper
                style={{ height: "100vh" }}
                slidesPerView={1}
                direction="vertical"
                mousewheel
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        return `<span class="bg-emerald-500 ${className}"></span>`;
                    },
                    type: "bullets",
                }}
                speed={500}
                modules={[Mousewheel, Pagination]}
            >
                <SwiperSlide className="bg-white text-black" data-index="1">
                    Slide 1
                </SwiperSlide>
            </Swiper>
        </>
    );
}
