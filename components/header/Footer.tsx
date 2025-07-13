import React from "react";
import logo from "../../public/LogoWhite.png";
import sendIcon from "../../public/sendIcon.png";
import Image from "next/image";
import igIcon from "../../public/igicon.png"
import twitterIcon from "../../public/twittericon.png";
import webIcon from "../../public/webicon.png";
import youtubeIcon from "../../public/yotubeicon.png";

export function Footer() {
    return (
        <footer className="min-h-[229px] text-silver w-full flex flex-row items-center justify-between px-[250px] py-[44px] gap-[43px] bg-secondary">
            <div className="w-4/12 flex flex-col items-start justify-start gap-[20px] text-[12px]">
                <div>
                    <Image
                        alt="Logo"
                        src={logo}
                        width={150}
                    />
                </div>
                <div>
                    <p className="">Copyright © 2020 Landify UI Kit.</p>
                    <p className="">All rights reserved</p>
                </div>
                <div className=" w-full ">
                    <div className="w-[30%] flex flex-row items-center justify-between">
                        <div className="w-6 h-6  flex flex-col items-center justify-center rounded-3xl -grey">
                            <Image
                                alt="igIcon"
                                src={igIcon}
                                width={12}
                            />
                        </div>
                        <div className="w-6 h-6  flex flex-col items-center justify-center rounded-3xl -grey">
                            <Image
                                alt="webIcon"
                                src={webIcon}
                                width={12}
                            />
                        </div>

                        <div className="w-6 h-6  flex flex-col items-center justify-center rounded-3xl -grey">
                            <Image
                                alt="twitterIcon"
                                src={twitterIcon}
                                width={12}
                            />
                        </div>
                        <div className="w-6 h-6  flex flex-col items-center justify-center rounded-3xl  -grey">
                            <Image
                                alt="youtubeIcon"
                                src={youtubeIcon}
                                width={12}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-6/12 flex flex-row items-start justify-start gap-[20px] ">
                <div className="w-full flex flex-col gap-[16px]">
                    <h2 className="text-[14px] font-semibold">Company</h2>
                    <nav className="flex flex-col justify-start items-start text-[12px] gap-[8px]">
                        <ul>About us</ul>
                        <ul>Blog</ul>
                        <ul>Contact us</ul>
                        <ul>Pricing</ul>
                        <ul>Testimonials</ul>
                    </nav>
                </div>
                <div className="w-full flex flex-col gap-[16px]">
                    <h2 className="text-[14px] font-semibold">Support</h2>
                    <nav className="flex flex-col justify-start items-start text-[12px] gap-[8px]">
                        <ul>Help center</ul>
                        <ul>Terms of service</ul>
                        <ul>Legal</ul>
                        <ul>Privacy policy</ul>
                        <ul>Status</ul>
                    </nav>
                </div>
                <div className="w-full flex flex-col gap-[20px] justify-start items-start ">
                    <h2 className="text-[14px] font-semibold">Stay up to date</h2>
                    <div className="bg-dgrey rounded-md flex flex-row ">
                        <input type="email" className="w-[80%] bg-dgrey  text-lgrey -none outline-none rounded-md p-2" placeholder="Your e-mail address" />
                        <div className="w-[20%]  flex flex-col items-center justify-center" >
                            <Image
                                alt="sendIcon"
                                src={sendIcon}
                                width={20}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    )
}