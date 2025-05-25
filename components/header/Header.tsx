import React from "react";
import logo from "../../public/Logo.png";
import Image from "next/image";


export function Header() {
    return (
        <header className="h-[58px] bg-white w-full flex flex-row items-center justify-between px-[100px] py-[11px] gap-[43px]">
            <div className="w-2/12">
                <Image
                    alt="Logo"
                    src={logo}
                    width={100}
                />
            </div>
            <div className="w-8/12 flex flex-row items-center justify-end gap-[22px]">
                <div className="w-full ">
                    <nav className="flex flex-row justify-between items-center">
                        <ul>Home</ul>
                        <ul>Features</ul>
                        <ul>Community</ul>
                        <ul>Blog</ul>
                        <ul>Pricing</ul>
                    </nav>
                </div>
                <div>
                    <button className="bg-primary text-white px-[22px] py-[10px]">Registrer Now</button>
                </div>
            </div>
        </header>


    )
}