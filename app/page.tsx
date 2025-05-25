import { Header } from "@/components/header/Header";
import React from "react";
import Image from "next/image";
import banner from "../public/HeroSection.png";
import icon1 from "../public/Logo(1).png";
import icon2 from "../public/Logo(2).png";
import icon3 from "../public/Logo(3).png";
import icon4 from "../public/Logo(4).png";
import icon5 from "../public/Logo(5).png";
import icon6 from "../public/Logo(6).png";
import icon7 from "../public/Logo(7).png";
import icon8 from "../public/Logo(8).png";
import icon11 from "../public/Icon1(1).png";
import icon12 from "../public/Icon1(2).png";
import icon13 from "../public/Icon1(3).png";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main className="flex flex-col gap-y-[28px]">
        <div>
          <Image
            src={banner}
            alt="banner"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full px-[100px] flex flex-col justify-center items-center gap-[11px]">
          <div className="w-[772px] text-center">
            <h1 className="text-[25px] font-semibold">Our Clients</h1>
            <p className="text-[11px]">We have been working with some Fortune 500+ clients</p>
          </div>
          <div className="w-[800px] flex flex-row justify-between items-center gap-10">
            <Image
              src={icon1}
              alt="icon1"
              width={33}
            />
            <Image
              src={icon3}
              alt="icon3"
              width={33}
            />
            <Image
              src={icon4}
              alt="icon4"
              width={33}
            />
            <Image
              src={icon5}
              alt="icon5"
              width={33}
            />
            <Image
              src={icon6}
              alt="icon6"
              width={33}
            />
            <Image
              src={icon7}
              alt="icon7"
              width={33}
            />
            <Image
              src={icon8}
              alt="icon8"
              width={33}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-[25px] font-semibold">Manage your entire community in a single system</h1>
            <p className="text-[11px]">Who is Nextcent suitable for?</p>
          </div>
          <div className="w-full">
            <div className="w-full flex flex-row justify-center items-center">
              <div className="w-[208px] h-[182px] break-words text-center flex flex-col justify-center items-center gap-[5px] border px-[22px] py-[16px]">
                <Image
                  src={icon11}
                  alt="icon11"
                />
                <h2 className="text-[19px] font-bold">Membership Organisations</h2>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
              </div>
              <div className="w-[208px] h-[182px] break-words text-center flex flex-col justify-center items-center gap-[5px] border px-[22px] py-[16px]">
                <Image
                  src={icon12}
                  alt="icon12"
                />
                <h2 className="text-[19px] font-bold">National Associations</h2>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
              </div>
              <div className="w-[208px] h-[182px] break-words text-center flex flex-col justify-center items-center gap-[5px] border px-[22px] py-[16px]">
                <Image
                  src={icon13}
                  alt="icon13"
                />
                <h2 className="text-[19px] font-bold">Clubs And Groups</h2>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
