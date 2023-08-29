import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  const sections = [
    { key: "primaryTechnologies", displayName: "Primary Technologies" },
    { key: "databaseAndStorage", displayName: "Database & Storage" },
    { key: "frameworksAndLibraries", displayName: "Frameworks & Libraries" },
    { key: "others", displayName: "Others" },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center bg-hero-pattern bg-cover bg-center"
    >
      <h3 className="md:absolute top-24 uppercase tracking-[20px] text-[#c084fc] text-2xl">
        About
      </h3>

      <motion.img
        className="-mb-20 md:mb-0 flex-shrink-0 h-32 w-32
				object-cover rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        src={urlFor(pageInfo.heroImage).url()}
        alt="Jordan Black"
      />

      <div className=" overflow-y-scroll  md:overflow-y-auto space-y-10 px-5 md:px-10 max-h-64 md:max-h-full bg-[#242424]/80 rounded-lg py-3 max-w-2xl scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#a855f7]/80">
        <h4 className="text-4xl font-semibold text-[#c084fc]">
          Here is a{"  "}
          <span className="underline decoration-white/80">little</span> context
          about me.
        </h4>
        <p className="text-sm justify-center font-semibold text-left ">
          {pageInfo.backgroundInfo}
        </p>

        {sections.map((section) => (
          <div key={section.key} className="space-y-2">
            <h5 className="text-lg font-bold underline text-[#c084fc]">
              {section.displayName}:
            </h5>
            <p className="text-sm font-medium">{pageInfo[section.key]}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default About;
