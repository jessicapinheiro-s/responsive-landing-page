import React from "react";
import logo from "../../public/Logo.png";
import Image from "next/image";


export function Header() {
    return (
        <header className="bg-white w-full px-[250px] py-[12px]  ">
            <div className="flex flex-row items-center justify-between gap-[43px] ">
                <div className="w-2/12  ">
                    <Image
                        alt="Logo"
                        src={logo}
                        width={150}
                    />
                </div>
                <div className=" w-10/12 flex flex-row items-center justify-end gap-[22px] ">
                    <div className="w-6/12">
                        <nav className="flex flex-row justify-between items-center">
                            <ul>Home</ul>
                            <ul>Features</ul>
                            <ul>Community</ul>
                            <ul>Blog</ul>
                            <ul>Pricing</ul>
                        </nav>
                    </div>
                    <div >
                        <button className="bg-primary text-white px-[22px] py-[10px] rounded-md">Registrer Now</button>
                    </div>
                </div>
            </div>
        </header>


    )
}