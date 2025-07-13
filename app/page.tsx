import { Header } from "@/components/header/Header";
import React from "react";
import Image from "next/image";
import icon1 from "../public/Logo(1).png";
import icon3 from "../public/Logo(3).png";
import icon4 from "../public/Logo(4).png";
import icon5 from "../public/Logo(5).png";
import icon6 from "../public/Logo(6).png";
import icon7 from "../public/Logo(7).png";
import icon8 from "../public/Logo(8).png";
import icon11 from "../public/Icon1(1).png";
import icon12 from "../public/Icon1(2).png";
import icon13 from "../public/Icon1(3).png";
import img9 from "../public/image9.png";
import img18 from "../public/image18.png";
import img19 from "../public/image19.png";
import img20 from "../public/image20.png";
import frame35 from "../public/Frame35.png";
import illustration from "../public/Illustration.png";
import panaImg from "../public/pana.png";

import { Footer } from "@/components/header/Footer";

export default function Home() {

  return (
    <div className="w-full bg-white">
      <Header />
      <main className="w-full flex flex-col gap-y-[40px] text-dgrey">
        {/*banner*/}
        <div className="w-full px-[30px] md:px-[250px] py-[62px]  bg-silver">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-[72px]">
            <div className=" flex flex-col gap-[22px] items-start">
              <h1 className=" text-[30px] md:text-[60px] font-semibold">Lessons and insights <span className="text-primary"> <br />from 8 years</span></h1>
              <p className=" text-grey">Where to grow your business as a photographer: site or social media?</p>
              <button className="w-[145px] bg-primary text-white px-[22px] py-[10px] rounded-md">Register</button>
            </div>
            <div className="">
              <Image
                src={illustration}
                alt="banner"
                className=" h-auto"
                width={400}
              />
            </div>
          </div>
        </div>
        {/*icons*/}
        <div className="w-full px-[30px] md:px-[250px] flex flex-col justify-center items-center gap-[20px] ">
          <div className="md:w-[50%] text-center">
            <h1 className="text-[22px] md:text-[25px] font-semibold">Our Clients</h1>
            <p className="text-[11px]">We have been working with some Fortune 500+ clients</p>
          </div>
          <div className="w-full md:w-[50%] flex flex-row justify-between items-start md:items-center gap-10 flex-wrap">
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
        <div className="w-full ">
          <div className="w-full flex flex-col gap-[20px] px-[30px] md:px-[250px]">
            <div className="text-center">
              <h1 className="text-[22px] md:text-[25px] font-semibold">Manage your entire community in a single system</h1>
              <p className="text-[11px]">Who is Nextcent suitable for?</p>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between items-center flex-wrap">
              <div className="w-full md:w-[208px] h-[196px] break-words text-center flex flex-col justify-center items-center gap-[5px]  px-[22px] py-[16px] rounded-md">
                <Image
                  src={icon11}
                  alt="icon11"
                />
                <h2 className="text-[19px] font-bold">Membership Organisations</h2>
                <p className="text-[10px]">Our membership management software provides full automation of membership renewals and payments</p>
              </div>
              <div className="w-full md:w-[208px] h-[196px] break-words text-center flex flex-col justify-center items-center gap-[5px]  px-[22px] py-[16px] rounded-md">
                <Image
                  src={icon12}
                  alt="icon12"
                />
                <h2 className="text-[19px] font-bold">National Associations</h2>
                <p className="text-[10px]">Our membership management software provides full automation of membership renewals and payments</p>
              </div>
              <div className="w-full md:w-[208px] h-[196px] break-words text-center flex flex-col justify-center items-center gap-[5px]  px-[22px] py-[16px] rounded-md">
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
        <div className="w-full flex flex-col md:flex-row items-center justify-between px-[30px] md:px-[250px]  gap-[54px] ">
          <div className="w-full md:w-3/12">
            <Image
              src={frame35}
              alt="frame35"
              className="w-full h-auto"
              width={226}
            />
          </div>
          <div className="w-full md:w-9/12  flex flex-col justify-start gap-y-[22px]">
            <h1 className="text-[22px] md:text-[25px] font-semibold">The unseen of spending three years at Pixelgrade</h1>
            <p className=" text-[9px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ea veniam natus et officia inventore possimus dolorem quis fuga repudiandae. Repellendus doloremque, voluptatem repellat rerum recusandae mollitia autem alias laboriosam.</p>
            <button className="w-[145px] bg-primary text-white px-[22px] py-[10px] rounded-md">Learn More</button>
          </div>
        </div>
        {/*data info*/}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-[54px] px-[30px] md:px-[250px] py-[44px] bg-silver">
          <div className="w-full text-left ">
            <h1 className="text-[22px] md:text-[25px] font-semibold text-dgrey">Helping a local <span className="text-primary"> <br />business reinvent itself</span></h1>
            <p className="text-[11px]">We reached here with our hard work and dedication</p>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-[27px] ">
            <div className="w-full flex flex-row md:flex-row items-center justify-center  md:justify-start gap-[20px] flex-wrap">
              <div className="w-[40%] md:w-[50%] flex flex-col md:flex-row items-center justify-start gap-[11px] ">
                <div>
                  <Image
                    src={frame35}
                    alt="frame35"
                    className="w-full h-auto"
                    width={33}
                  />
                </div>
                <div>
                  <h1 className="text-[20px] font-semibold text-dgrey">2,245,341</h1>
                  <p className="text-[11px] text-grey">Members</p>
                </div>
              </div>
              <div className="w-[40%] md:w-[50%] flex flex-col md:flex-row items-center justify-start gap-[11px] ">
                <div>
                  <Image
                    src={frame35}
                    alt="frame35"
                    className="w-full h-auto"
                    width={33}
                  />
                </div>
                <div>
                  <h1 className="text-[20px] font-semibold text-dgrey">46,328</h1>
                  <p className="text-[11px] text-grey">Clubs</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row md:flex-row items-center justify-center md:justify-start gap-[20px] flex-wrap">
              <div className="w-[40%] md:w-[50%] flex flex-col md:flex-row items-center justify-start gap-[11px]">
                <div>
                  <Image
                    src={frame35}
                    alt="frame35"
                    className="w-full h-auto"
                    width={33}
                  />
                </div>
                <div>
                  <h1 className="text-[20px] font-semibold text-dgrey">828,867</h1>
                  <p className="text-[11px] text-grey">Event Bookings</p>
                </div>
              </div>
              <div className="w-[40%] md:w-[50%] flex flex-col md:flex-row items-center justify-start gap-[11px]">
                <div>
                  <Image
                    src={frame35}
                    alt="frame35"
                    className="w-full h-auto"
                    width={33}
                  />
                </div>
                <div>
                  <h1 className="text-[20px] font-semibold text-dgrey">1,926,436</h1>
                  <p className="text-[11px] text-grey">Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*data info*/}
        <div className="w-full  px-[30px] md:px-[250px] py-[22px]  ">
          <div className="flex flex-col md:flex-row items-center justify-center gap-[54px] ">
            <div className="w-full md:w-3/12  ">
              <Image
                src={panaImg}
                alt="panaImg"
                className="w-full h-auto"
                width={226}
              />
            </div>
            <div className="w-full md:w-9/12  flex flex-col justify-start gap-y-[22px]">
              <h1 className="text-[22px] md:text-[25px] font-semibold">How to design your site footer like we did</h1>
              <p className="text-[9px]">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
              <button className="w-[145px] bg-primary text-white px-[22px] py-[10px] rounded-md">Learn More</button>
            </div>
          </div>
        </div>
        {/*data info*/}
        <div className="w-full flex flex-coll items-center justify-center  px-[30px] md:px-[250px] py-[22px] ">
          <div className="flex flex-col md:flex-row  items-center justify-between  gap-[54px] ">
            <div className="w-full md:w-3/12 px-0 " >
              <Image
                src={img9}
                alt="img9"
                className="w-full h-auto "
                width={226}
              />
            </div>
            <div className="w-full md:w-9/12  flex flex-col justify-start gap-y-[22px]">
              <p className="text-[11px] text-grey">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
              <h2 className="text-[14px] font-semibold">Tim Smith</h2>
              <p className="text-[11px] text-grey">British Dragon Boat Racing Association</p>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col md:flex-row w-9/12  justify-between items-center">
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
                <div className="w-3/12 ">
                  <h2 className="text-[14px] font-semibold text-center">Meet all customers</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*cards*/}
        <div className=" flex flex-col items-center justify-center h-[100%] gap-3 ">
          <div className="w-full flex flex-col gap-3 items-center justify-center px-[30px] md:px-[250px]">
            <div className="w-full  text-center">
              <h1 className="text-[22px] md:text-[44px] font-semibold h-auto">Caring is the new marketing</h1>
            </div>
            <div className="w-full md:w-[25%] text-center">
              <p className="text-[11px] text-grey">The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who&apos;s joining the community, read about how our community are increasing their membership income and lot&apos;s more.​</p>
            </div>
          </div>
          <div className="w-full  px-[30px] md:px-[250px] py-[0px] h-auto ">
            <div className="flex flex-col items-center md:items-start md:flex-row  justify-between gap-20 md:gap-0">
              <div className="w-full md:w-[256px]  rounded-md flex flex-col relative">
                <div className="z-10">
                  <Image
                    src={img18}
                    alt="img18"
                    className="w-full h-auto"
                    width={256}
                  />
                </div>
                <div className="w-[80%]  flex flex-col gap-[11px] p-3 z-30 bg-silver absolute top-36 left-[10%] rounded-md text-grey">
                  <p className="text-[13px] font-semibold text-center">Creating Streamlined Safeguarding Processes with OneRen</p>
                  <a href="#" className="text-[13px] font-semibold text-center text-primary">Read more</a>
                </div>
              </div>
              <div className="w-full md:w-[256px]  rounded-md flex flex-col relative ">
                <div className="z-10">
                  <Image
                    src={img19}
                    alt="img19"
                    className="w-full h-auto"
                    width={256}
                  />
                </div>
                <div className="w-[80%]  flex flex-col gap-[11px] p-3 z-30 bg-silver absolute top-36 left-[10%] rounded-md text-grey">
                  <p className="text-[13px] font-semibold text-center">What are your safeguarding responsibilities and how can you manage them?</p>
                  <a href="#" className="text-[13px] font-semibold text-center text-primary">Read more</a>
                </div>
              </div>
              <div className="w-full md:w-[256px]  rounded-md flex flex-col relative ">
                <div className="z-10">
                  <Image
                    src={img20}
                    alt="img20"
                    className="w-full h-auto"
                    width={256}
                  />
                </div>
                <div className="w-[80%]  flex flex-col gap-[11px] p-3 z-30 bg-silver absolute top-36 left-[10%] rounded-md text-grey">
                  <p className="text-[13px] font-semibold text-center">Revamping the Membership Model with Triathlon Australia</p>
                  <a href="#" className="text-[13px] font-semibold text-center text-primary">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*text area*/}
        <div className="w-full flex flex-col min-h-[209px] items-center justify-center py-[22px] px-[30px] md:px-[0px] gap-[22px]  mt-10">
          <div className="text-center w-full md:w-[40%]">
            <h1 className="text-[22px] md:text-[44px] font-semibold h-auto">Pellentesque suscipit fringilla libero eu.</h1>
          </div>
          <button className="w-[124px]  text-[11px] bg-primary text-white px-[22px] py-[10px] rounded-md">Get a Demo</button>
        </div>
        <Footer />
      </main>
    </div>
  );
}
