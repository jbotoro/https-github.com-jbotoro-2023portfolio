import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { GetStaticProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";
import { urlFor } from "../sanity";
import { ImageError } from "next/dist/server/image-optimizer";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#c084fc]/80"
    >
      <Head>
        <title>Jordan Black </title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="workexperience" className="snap-start">
        <WorkExperience experiences={experiences} />
      </section>
      <div className="snap-start h-20"></div>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <div className="snap-start h-40"></div>

      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <footer className="sticky bottom-5 w-full ">
        <div className=" hidden mobile:flex items-center justify-center">
          <Link href="#hero">
            <div className="w-10 h-10 rounded-full overflow-hidden relative transition-transform transform hover:scale-105">
              <Image
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain cursor-pointer filter grayscale hover:grayscale-0 "
                src={urlFor(pageInfo.heroImage).url()}
                alt="Hero section"
                width={40}
                height={40}
              />
            </div>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;

// use static props to fetch data from the API
// if we wanted to use server side rendering we would use getServerSideProps

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    // use revalidate to update the page every x amount of seconds
    revalidate: 10,
  };
};
