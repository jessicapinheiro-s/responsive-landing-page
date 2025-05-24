import React from "react";
import logo from "../../public/Logo.png";
import Image from "next/image";


export function Header() {
    return (
        <header className="bg-white w-full flex flex-row items-center justify-between px-[100px] py-[11px] gap-[43px]">
            <div>
                <Image
                    alt="Logo"
                    src={logo}
                />
            </div>
            <div>
                <nav className="flex flex-row justify-center items-center">
                    <ul>Home</ul>
                    <ul>Features</ul>
                    <ul>Community</ul>
                    <ul>Blog</ul>
                    <ul>Pricing</ul>
                </nav>
            </div>
            <div>
                <button className="bg-primary text-white">Registrer Now</button>
            </div>
        </header>


    )
}