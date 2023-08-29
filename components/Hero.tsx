import Image from "next/image";
import React from "react";
import {
	Cursor,
	useTypewriter,
} from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
	pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
	const [text, count] = useTypewriter({
		words: [
			`Hi, my name is ${pageInfo.name}.`,
			"Full Stack Developer",
			"Mental Health Advocate",
			"Father",
			"Designer",
			"Creator",
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
			<BackgroundCircles />
			<Image
				className="relative rounded-full h-32 w-32 mx-auto object-cover"
				src={urlFor(pageInfo.heroImage).url()}
				alt="Jordan Black"
				width={128}
				height={128}
			/>
			<div className="z-20">
				<h2 className="text-sm uppercase text-[#C084FC] pb-2 tracking-[15px]">
					{pageInfo.role}
				</h2>
				<h1 className="text-4xl lg:text-6xl font-semibold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#c084fc" />
				</h1>
				<div className="pt-5 text-[#d8b4fe]">
					<Link href="#about">
						<button className="heroButton">
							{" "}
							About{" "}
						</button>
					</Link>
					<Link href="#workexperience">
						<button className="heroButton">
							Experience
						</button>
					</Link>
					<Link href="#skills">
						<button className="heroButton">
							Skills
						</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">
							Projects
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}