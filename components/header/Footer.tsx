import React from "react";
import logo from "../../public/Logo.png";
import Image from "next/image";


export function Footer() {
    return (
        <footer className="h-[58px] bg-white w-full flex flex-row items-center justify-between px-[100px] py-[11px] gap-[43px]">
            <div className="w-2/12">
                <div>
                    <Image
                        alt="Logo"
                        src={logo}
                        width={100}
                    />
                </div>
                <p>Copyright © 2020 Landify UI Kit.</p>
                <p>All rights reserved</p>
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
            <div className="w-8/12 flex flex-row items-center justify-end gap-[22px]">
                <div className="w-full ">
                    <h2>Company</h2>
                    <nav className="flex flex-row justify-between items-center">
                        <ul>Home</ul>
                        <ul>Features</ul>
                        <ul>Community</ul>
                        <ul>Blog</ul>
                        <ul>Pricing</ul>
                    </nav>
                </div>
                <div className="w-full ">
                    <h2>Support</h2>
                    <nav className="flex flex-row justify-between items-center">
                        <ul>Home</ul>
                        <ul>Features</ul>
                        <ul>Community</ul>
                        <ul>Blog</ul>
                        <ul>Pricing</ul>
                    </nav>
                </div>
                <div>
                    <h2>Stay up to date</h2>
                    <input type="email"/>
                </div>
            </div>
        </footer>


    )
}