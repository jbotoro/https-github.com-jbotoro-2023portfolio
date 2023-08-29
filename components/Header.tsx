import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  const [emailHovered, setEmailHovered] = useState(false);
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => {
          const [hovered, setHovered] = useState(false);

          return (
            <div
              key={social._id}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <SocialIcon
                url={social.url}
                fgColor={hovered ? "#d8b4fe" : "gray"}
                bgColor="transparent"
              />
            </div>
          );
        })}
      </motion.div>
      <Link href="#contact" legacyBehavior={true}>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <div
            onMouseEnter={() => setEmailHovered(true)}
            onMouseLeave={() => setEmailHovered(false)}
          >
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor={emailHovered ? "#d8b4fe" : "gray"}
              bgColor="transparent"
            />
          </div>
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 hover:text-[#d8b4fe]">
            Contact me
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
