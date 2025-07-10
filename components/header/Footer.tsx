import React from "react";
import logo from "../../public/Logo.png";
import Image from "next/image";


export function Footer() {
    return (
        <footer className="min-h-[229px] text-white w-full flex flex-row items-center justify-between px-[150px] py-[44px] gap-[43px] bg-secondary">
            <div className="w-4/12 border">
                <div>
                    <Image
                        alt="Logo"
                        src={logo}
                        width={132}
                    />
                </div>
                <p className="text-[9px]">Copyright © 2020 Landify UI Kit.</p>
                <p className="text-[9px]">All rights reserved</p>
                <div className="flex flex-row">
                    <Image
                        alt="Logo"
                        src={logo}
                        width={20}
                    />
                    <Image
                        alt="Logo"
                        src={logo}
                        width={20}
                    />
                    <Image
                        alt="Logo"
                        src={logo}
                        width={20}
                    />
                    <Image
                        alt="Logo"
                        src={logo}
                        width={20}
                    />
                </div>
            </div>
            <div className="w-6/12 flex flex-row items-start justify-start gap-[20px] border">
                <div className="w-full ">
                    <h2 className="text-[14px] font-semibold">Company</h2>
                    <nav className="flex flex-col justify-start items-start text-[9px]">
                        <ul>About us</ul>
                        <ul>Blog</ul>
                        <ul>Contact us</ul>
                        <ul>Pricing</ul>
                        <ul>Testimonials</ul>
                    </nav>
                </div>
                <div className="w-full ">
                    <h2 className="text-[14px] font-semibold">Support</h2>
                    <nav className="flex flex-col justify-start items-start text-[9px]">
                        <ul>Help center</ul>
                        <ul>Terms of service</ul>
                        <ul>Legal</ul>
                        <ul>Privacy policy</ul>
                        <ul>Status</ul>
                    </nav>
                </div>
                <div>
                    <h2 className="text-[14px] font-semibold">Stay up to date</h2>
                    <input type="email" className="border px-2"/>
                </div>
            </div>
        </footer>


    )
}