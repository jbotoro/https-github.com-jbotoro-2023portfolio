import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";
import { useMediaQuery } from "react-responsive";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  const mediaQuery = useMediaQuery({ query: "(max-width: 480px)" });
  const [isSmallScreen, setIsSmallScreen] = useState(mediaQuery);

  useEffect(() => {
    setIsSmallScreen(mediaQuery);
  }, [mediaQuery]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="flex relative flex-col text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center items-center pb-20 w-full sm:max-w-[600px] mx-auto"
    >
      <h3 className="mb-20 sm:mt-5 md:mb-5 md:mt-20 uppercase tracking-[20px] text-[#c084fc] text-sm mobile:text-2xl text-center w-full">
        Skills
      </h3>
      {!isSmallScreen && (
        <h3 className="mb-5 uppercase tracking-[20px] text-gray-500 text-sm mobile:text-2xl text-center">
          Hover for proficiency
        </h3>
      )}

      <div className="mt-5 sm:mt-10 grid grid-cols-4 gap-5 grid- justify-items-center">
        {skills.map((skill) => (
          <Skill key={skill._id} skill={skill} isMobile={isSmallScreen} />
        ))}
      </div>
    </motion.div>
  );
}


export default Skills;
