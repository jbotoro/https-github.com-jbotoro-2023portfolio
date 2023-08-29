import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:jblack530@gmail.com?subject=${formData.subject}&body= Hi, my name is ${formData.name}. ${formData.message}, I can be reached at ${formData.email}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="mb-2 mt-10 md:mt-0 md:mb-0 md:absolute md:top-20 uppercase tracking-wider text-[#c084fc] text-2xl">
        Contact Me
      </h3>

      <div className="flex flex-col space-y-4 md:space-y-10 w-full">
        <h4 className="text-4xl font-semibold mb-4 text-center">
          Looking for a full stack dev?{" "}
          <span className="underline decoration-[#C084FC]">
            <br />
            Get in touch!
          </span>
        </h4>

        <div className="space-y-4 md:space-y-10">
          <div className="flex items-center space-x-5 justify-center ">
            <PhoneIcon className="h-7 w-7 text-[#C084FC] animate-pulse " />
            <p className="text-2xl">415-316-3516</p>
          </div>

          <div className="flex items-center space-x-5 justify-center ">
            <MapPinIcon className="h-7 w-7 text-[#C084FC] animate-pulse " />
            <a
              href="https://www.linkedin.com/in/jordanblack89/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-2xl cursor-pointer hover:underline">
                LinkedIn
              </p>
            </a>
          </div>

          <div className="flex items-center space-x-5 justify-center ">
            <EnvelopeIcon className="h-7 w-7 text-[#C084FC] animate-pulse " />
            <p className="text-2xl">jblack530@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full md:w-fit mx-auto"
        >
          <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
            <input
              {...register("name")}
              className="contactInput w-full"
              placeholder="Name"
              type="text"
            />
            <input
              {...register("email")}
              className="contactInput w-full"
              placeholder="Email"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            className="contactInput"
            placeholder="Subject"
            type="text"
          />

          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          />

          <button
            className="bg-[#C084FC] py-5 px-10 rounder-md text-black font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
