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
import frame35 from "../public/Frame35.png";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main className="flex flex-col gap-y-[28px]">
        {/*banner*/}
        <div>
          <Image
            src={banner}
            alt="banner"
            className="w-full h-auto"
          />
        </div>
        {/*icons*/}
        <div className="w-full px-[100px] flex flex-col justify-center items-center gap-[11px] border">
          <div className="w-[772px] text-center">
            <h1 className="text-[25px] font-semibold">Our Clients</h1>
            <p className="text-[11px]">We have been working with some Fortune 500+ clients</p>
          </div>
          <div className="w-[800px] flex flex-row justify-between items-center gap-10 flex-wrap">
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
        {/*cards*/}
        <div className="w-full border">
          <div className="text-center">
            <h1 className="text-[25px] font-semibold">Manage your entire community in a single system</h1>
            <p className="text-[11px]">Who is Nextcent suitable for?</p>
          </div>
          <div className="w-full px-[100px]">
            <div className="w-full flex flex-row justify-between items-center flex-wrap">
              <div className="w-[208px] h-[196px] break-words text-center flex flex-col justify-center items-center gap-[5px] border px-[22px] py-[16px]">
                <Image
                  src={icon11}
                  alt="icon11"
                />
                <h2 className="text-[19px] font-bold">Membership Organisations</h2>
                <p className="text-[10px]">Our membership management software provides full automation of membership renewals and payments</p>
              </div>
              <div className="w-[208px] h-[196px] break-words text-center flex flex-col justify-center items-center gap-[5px] border px-[22px] py-[16px]">
                <Image
                  src={icon12}
                  alt="icon12"
                />
                <h2 className="text-[19px] font-bold">National Associations</h2>
                <p className="text-[10px]">Our membership management software provides full automation of membership renewals and payments</p>
              </div>
              <div className="w-[208px] h-[196px] break-words text-center flex flex-col justify-center items-center gap-[5px] border px-[22px] py-[16px]">
                <Image
                  src={icon13}
                  alt="icon13"
                />
                <h2 className="text-[19px] font-bold">Clubs And Groups</h2>
                <p className="text-[10px]">Our membership management software provides full automation of membership renewals and payments</p>
              </div>
            </div>
          </div>
        </div>
        {/*img and text*/}
        <div className="w-full flex flex-row items-center justify-center px-[100px] border">
          <div className="w-4/12">
            <Image
              src={frame35}
              alt="frame35"
              className="w-full h-auto"
              width={300}
            />
          </div>
          <div className="w-6/12">
            <h1 className="text-[25px]">The unseen of spending three years at Pixelgrade</h1>
            <p className=" text-[10px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ea veniam natus et officia inventore possimus dolorem quis fuga repudiandae. Repellendus doloremque, voluptatem repellat rerum recusandae mollitia autem alias laboriosam.</p>
            <button>Learn More</button>
          </div>
        </div>
        {/*data info*/}
        <div className="w-full flex flex-col items-center justify-center px-[100px] border">
          <div className="w-full text-center">
            <h1 className="text-[25px]">Helping a local business reinvent itself</h1>
            <p className="text-[11px]">We reached here with our hard work and dedication</p>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-[27px] ">
            <div className="flex flex-row items-center justify-center gap-[20px]">
              <div className="flex flex-row items-center justify-center gap-[11px]">
                <Image
                  src={frame35}
                  alt="frame35"
                  className="w-full h-auto"
                  width={33}
                />
                <div>
                  <h1 className="text-[20px]">2,245,341</h1>
                  <p className="text-[11px]">Members</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[11px]">
                <Image
                  src={frame35}
                  alt="frame35"
                  className="w-full h-auto"
                  width={33}
                />
                <div>
                  <h1 className="text-[20px]">46,328</h1>
                  <p className="text-[11px]">Clubs</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[20px]">
              <div className="flex flex-row items-center justify-center gap-[11px]"> 
                <Image
                  src={frame35}
                  alt="frame35"
                  className="w-full h-auto"
                  width={33}
                />
                <div>
                  <h1 className="text-[20px]">828,867</h1>
                  <p className="text-[11px]">Event Bookings</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[11px]">
                <Image
                  src={frame35}
                  alt="frame35"
                  className="w-full h-auto"
                  width={33}
                />
                <div>
                  <h1 className="text-[20px]">1,926,436</h1>
                  <p className="text-[11px]">Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*data info*/}
        <div className="w-full flex flex-row items-center justify-center">
          <Image
            src={frame35}
            alt="frame35"
            className="w-full h-auto"
            width={300}
          />
          <div>
            <h1></h1>
            <p></p>
            <button>Learn Mo</button>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
