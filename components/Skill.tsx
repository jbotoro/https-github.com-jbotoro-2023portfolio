import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
  isMobile: boolean;
};

function Skill({ directionLeft, skill, isMobile }: Props) {
  const [mobile, setMobile] = useState(isMobile);
  const [isTextVisible, setTextVisibility] = useState(false);
  useEffect(() => {
    setMobile(isMobile);
  }, [isMobile]);

  const initialProps = mobile
    ? { opacity: 1, x: 0 }
    : {
        x: directionLeft ? -200 : 200,
        opacity: 0,
      };

  const transitionProps = mobile
    ? {}
    : {
        transition: {
          duration: 1,
        },
        whileInView: {
          opacity: 1,
          x: 0,
        },
      };

  if (mobile) {
    return (
      <div
        className="relative flex cursor-pointer h-12 w-12 md:w-28 md:h-28 xl:w-32 xl:h-32"
        onClick={() => setTextVisibility(!isTextVisible)}
      >
        <img
          src={urlFor(skill.image).url()!}
          alt={skill.title}
          className={`rounded-full border border-gray-500 object-contain object-center h-full w-full bg-white ${isTextVisible ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        />
        <div
          className={`absolute top-0 left-0 flex flex-col items-center justify-center h-full w-full ${
            isTextVisible ? "opacity-100" : "opacity-0"
          } ${isTextVisible ? 'bg-white' : ''} ${isTextVisible ? 'rounded-full' : ''} transition-opacity duration-300`}
        >
          <p className="text-[0.5rem] sm:text-[0.625rem] font-medium text-black">
            {skill.title}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="group relative flex cursor-pointer h-12 w-12 mobile:h-24 mobile:w-24 md:w-28 md:h-28 xl:w-32 xl:h-32">
        <motion.img
          initial={initialProps}
          src={urlFor(skill.image).url()!}
          alt={skill.title}
          className="rounded-full border border-gray-500 object-contain object-center h-full
                        w-full filter group-hover:grayscale
                        transition-all duration-300 ease-in-out bg-white"
          {...transitionProps}
        />
        <div
          className="absolute sm:opacity-0 sm:hover:opacity-80
        transition duration-300 ease-in-out bg-white h-full w-full rounded-full z-0 top-0 left-0"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-[5px]">
            {!mobile && (
              <p className="text-[2rem] font-bold text-black opacity-100">
                {skill.progress}
              </p>
            )}
            <p className="text-[0.5rem] sm:text-[0.625rem] font-medium text-black opacity-100">
              {skill.title}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
