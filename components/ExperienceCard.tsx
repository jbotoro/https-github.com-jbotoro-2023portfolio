import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
	experience: Experience;
};

function ExperienceCard({ experience }: Props) {
	return (
		// when adding new expierence add this style w-[500px] m:w-[600px] xl:w-[900px]
		<article
			className="flex flex-col items-center space-y-4 flex-shrink-0 bg-[#292929] p-5 rounded-lg hover:opacity-100 opacity-80 transition-opacity duration-200 mx-auto"
		>
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover"
				src={urlFor(experience.companyImage).url()}
				alt={experience.company}
			/>
			<div className="text-center md:text-left space-y-2">
				<h4 className="text-lg md:text-2xl font-light">
					{experience.jobTitle}
				</h4>
				<p className="font-bold text-md md:text-xl text-[#c084fc]">
					{experience.company}
				</p>
				<div className="grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 my-2 justify-items-center items-center md:max-w-[600px] mx-auto">
					{experience.technologiesUsed.map((tech) => (
						<Image
							key={tech._id}
							alt={tech.title}
							title={tech.title}
							className="h-12 w-12 md:max-w-[80px] md:max-h-[80px] rounded-full object-contain object-center bg-white"
							src={urlFor(tech.image).url()}
							width={50}
							height={50}
						/>
					))}
				</div>
				<p className="uppercase py-5 text-[#d8b4fe]">
					{new Date(
						experience.dateStarted
					).toDateString()}{" "}
					-{" "}
					{experience.isCurrentlyWorkingHere
						? "Present"
						: new Date(
								experience.dateEnded
						).toDateString()}
				</p>
				<ul className="list-disc space-y-4 ml-5 text-lg ">
					{experience.points.map((point, i) => (
						<li key={i}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	);
}

export default ExperienceCard;
