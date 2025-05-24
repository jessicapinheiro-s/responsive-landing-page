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
      <main>
        <div>
          <Image
            src={banner}
            alt="banner"
          />
        </div>
        <div>
          <div>
            <h1>Our Clients</h1>
            <p>We have been working with some Fortune 500+ clients</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <Image
              src={icon1}
              alt="icon1"
            />
            <Image
              src={icon2}
              alt="icon2"
            />
            <Image
              src={icon3}
              alt="icon3"
            />
            <Image
              src={icon4}
              alt="icon4"
            />
            <Image
              src={icon5}
              alt="icon5"
            />
            <Image
              src={icon6}
              alt="icon6"
            />
            <Image
              src={icon7}
              alt="icon7"
            />
            <Image
              src={icon8}
              alt="icon8"
            />
          </div>
        </div>
        <div>
          <div>
            <h1>Manage your entire community in a single system</h1>
            <p>Who is Nextcent suitable for?</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div>
              <div>
                <Image
                  src={icon11}
                  alt="icon11"
                />
                <h2>Membership Organisations</h2>
              </div>
              <div>
                <Image
                  src={icon12}
                  alt="icon12"
                />
                <h2>National Associations</h2>
              </div>
              <div>
                <Image
                  src={icon13}
                  alt="icon13"
                />
                <h2>Clubs And Groups</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
