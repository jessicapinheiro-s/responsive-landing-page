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
import { Footer } from "@/components/header/Footer";

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
        <div className="w-full  border py-[0px ]">
          <div className="flex flex-row items-center justify-center">
            <Image
              src={frame35}
              alt="frame35"
              className="w-full h-auto"
              width={300}
            />
            <div>
              <h1 className="text-[25px] font-semibold">How to design your site footer like we did</h1>
              <p className="text-[9px]">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
        {/*data info*/}
        <div className="w-full flex flex-coll items-center justify-center border px-[100px] py-[22px] ">
          <div className="flex flex-row  items-start justify-between border gap-[54px]">
            <div className="w-3/12 border">
              <Image
                src={frame35}
                alt="frame35"
                className="w-full h-auto border"
                width={226}
              />
            </div>
            <div className="w-9/12 border">
              <p className="text-[11px]">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
              <h2 className="text-[14px] font-semibold">Tim Smith</h2>
              <p className="text-[11px]">British Dragon Boat Racing Association</p>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row w-9/12 border justify-between items-center">
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
                <div className="w-3/12 border">
                  <h2 className="text-[14px] font-semibold text-center">Meet all customers</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*cards*/}
        <div className="border flex flex-col items-center justify-center h-[100%] gap-3">
          <div className="w-full flex flex-col gap-3 items-center justify-center">
            <div className="w-full border text-center">
              <h1 className="text-[44px] font-semibold h-auto">Caring is the new marketing</h1>
            </div>
            <div className="w-[25%] text-center">
              <p className="text-[11px]">The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>
          </div>
          <div className="w-full border px-[100px] py-[0px] h-auto">
            <div className="flex flex-row border justify-between border-blue-500">
              <div className="p-10 border border-green-600">
                <div className="w-[256px] border rounded-xl flex flex-col relative border-red-300">
                  <div className="z-10">
                    <Image
                      src={frame35}
                      alt="frame35"
                      className="w-full h-auto"
                      width={256}
                    />
                  </div>
                  <div className="w-full border flex flex-col gap-[11px] p-3 z-30 bg-slate-300 absolute top-48 rounded-xl">
                    <p className="text-[13px] font-semibold text-center">Creating Streamlined Safeguarding Processes with OneRen</p>
                    <a href="#" className="text-[13px] font-semibold text-center">Read more</a>
                  </div>
                </div>
              </div>
              <div className="p-10 border border-green-600">
                <div className="w-[256px] border rounded-xl flex flex-col relative border-red-300">
                  <div className="z-10">
                    <Image
                      src={frame35}
                      alt="frame35"
                      className="w-full h-auto"
                      width={256}
                    />
                  </div>
                  <div className="w-full border flex flex-col gap-[11px] p-3 z-30 bg-slate-300 absolute top-48 rounded-xl">
                    <p className="text-[13px] font-semibold text-center">Creating Streamlined Safeguarding Processes with OneRen</p>
                    <a href="#" className="text-[13px] font-semibold text-center">Read more</a>
                  </div>
                </div>
              </div>
              <div className="p-10 border border-green-600">
                <div className="w-[256px] border rounded-xl flex flex-col relative border-red-300">
                  <div className="z-10">
                    <Image
                      src={frame35}
                      alt="frame35"
                      className="w-full h-auto"
                      width={256}
                    />
                  </div>
                  <div className="w-full border flex flex-col gap-[11px] p-3 z-30 bg-slate-300 absolute top-48 rounded-xl">
                    <p className="text-[13px] font-semibold text-center">Creating Streamlined Safeguarding Processes with OneRen</p>
                    <a href="#" className="text-[13px] font-semibold text-center">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*text area*/}
        <div className="border flex flex-col min-h-[209px] items-center justify-center py-[22px] px-[0px] gap-[22px]">
          <div className="text-center w-[40%] border">
            <h1 className="text-[44px] font-semibold h-auto">Pellentesque suscipit fringilla libero eu.</h1>
          </div>
          <button className="w-[124px] px-[22px] py-[9px] text-[11px] border">Get a Demo</button>
        </div>
        <Footer />
      </main>
    </React.Fragment>
  );
}
