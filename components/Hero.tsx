
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import { BackgroundCircles } from "@/components/index";
import heroImg from "public/extraImages/vishal-godalkar.jpg"; // Replace with your image if needed

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hey, Vishal Godalkar here.",
      "I build full-stack web apps.",
      "I'm passionate about solving real-world problems.",
      "I love learning and sharing tech.",
    ],
    loop: true,
    delaySpeed: 1000,
    typeSpeed: 50,
    deleteSpeed: 20,
  });

  return (
    <div className="pt-16 md:pt-28 h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <Image
        width={250}
        height={300}
        className="relative h-32 w-32 rounded-full mx-auto object-cover"
        src={heroImg}
        alt="vishal godalkar profile image"
        priority={true}
        loading="eager"
      />

      <div className="z-20">
        <h2 className="text-sm text-gray-800 dark:text-gray-400 uppercase tracking-[8px] md:tracking-[15px] pb-2 font-outfit">
          Full-Stack Developer
        </h2>
        <h1 className="pt-2 text-3xl md:text-4xl lg:text-6xl font-semibold px-16 text-black dark:text-gray-200">
          <span className="mr-3 font-outfit text-black dark:text-gray-200">
            {text}
          </span>
          <Cursor cursorBlinking={false} />
        </h1>

        {/* Navigation Buttons + Resume Button */}
        <div className="pt-4 lg:pt-4 font-outfit px-4 md:px-0 flex flex-col items-center space-y-4">
          {/* Top Row Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#about">
              <button className="heroButton">about</button>
            </Link>
            <Link href="#experience">
              <button className="heroButton">experience</button>
            </Link>
            <Link href="#skills">
              <button className="heroButton">skills</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton">projects</button>
            </Link>
            <Link href="#blogs">
              <button className="heroButton">achievement</button>
            </Link>
          </div>

          {/* Resume Button */}
          <Link
            href="/VishalGodalkar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200">
              View Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
