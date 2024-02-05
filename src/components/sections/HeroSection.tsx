import React from "react";
import MainButton from "../common/MainButton";

function HeroSection() {
  return (
    <section className="flex justify-between flex-col md:flex-row gap-4 items-center">
      <div>
        <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[4.375rem] text-darkBlue">
        Smile Brighter and Live Healthier
        </p>
        <p className="text-[1.375rem] font-[500]">
        Elevate Your Oral Health with Our Caring Team – Your Journey to a Brighter, Healthier Smile Starts Here!
        </p>
        <div className="flex gap-[1.75rem] items-center mt-[3rem]">
          <MainButton text="Get Started" classes="shadow-none w-[10.125rem]" />
          <div className="flex gap-[1.56rem] items-center">
            <img className="w-[50px]" src="/images/arrow-right.png" alt="play icon" />
            <p className="font-bold text-normal">Learn More</p>
          </div>
        </div>
      </div>
      <div>
        <img
          src="/images/happy_guy.png"
          alt="girl with bright smile"
        />
      </div>
    </section>
  );
}

export default HeroSection;
