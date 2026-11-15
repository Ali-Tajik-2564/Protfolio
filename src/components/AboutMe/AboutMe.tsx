import React from 'react';
export default function AboutMe() {
  return (
    <div className="w-full flex flex-col items-center space-y-12 justify-start p-14 bg-linear-to-br backdrop-blur-md from-[#28223A] via-[#2A1F30] to-[#1D1A1A] ">
      <div className="w-auto flex flex-col items-center justify-evenly space-y-4">
        <p className="w-auto text-[3rem] text-(--purple-deep) ">About Me</p>
        <span className="w-28 h-1 rounded-xl bg-(--purple-main)"></span>
      </div>
      <div className="w-full flex items-center justify-evenly ">
        <div className="w-5/12 h-auto flex flex-col items-start justify-starts bg-(--charcoal-medium) border border-(--purple-main)  rounded-xl space-y-3 p-8">
          <div className="w-full h-auto flex items-center justify-start space-x-5 pb-4 p-2   border-b-2 border-(--charcoal-light)">
            <div className="w-28! h-24! rounded-lg border-2 border-(--purple-main) "></div>
            <div className="w-full flex flex-col items-start justify-evenly space-y-2">
              <p className="text-lg text-white ">Ali tajik </p>
              <p className="text-base text-(--blue-main) ">
                Frontend & Backend Engineer
              </p>
              <div className="w-full flex items-center space-x-8 justify-start">
                <p className="text-xs text-gray-300">Tehran ,Iran</p>
                <p className="text-xs text-gray-300">Available for work</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start space-y-2 ">
            <p className="text-base text-(--purple-main) ">BIOGRAPHY</p>
            <p className="text-sm text-gray-100 ">
              im a passionate frontend developer with over 3 years of experience
              building modern web applications. i specialize in Next.js, React,
              Nodejs, Nestjs, and TypeScript creating scalable, performant, and
              beautiful interfaces. My goal is to bridge the gap between design
              and development, delivering exceptional user experiences that make
              a difference
            </p>
          </div>
          <div className="w-full flex items-center justify-center mt-2">
            <div className="w-9/10   flex items-center justify-center p-4 text-center bg-(--charcoal-dark)  text-base border border-(--purple-deep) rounded-md">
              <p className="text-sm text-gray-300 font-sans ">
                {'\"Clean code, clean design, clean solutions.\"'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
