import AllProjects from "../components/AboutMe/AllProjects";
import Education from "../components/AboutMe/Education";
import Experience from "../components/AboutMe/Experience";
import Fade from "react-reveal/Fade";
import React from "react";

export default function AboutMe() {
  return (
    <div>
      <Fade up>
        <div>
          <h1 className="text-center mt-10 font-primary font-black text-3xl md:text-5xl capitalize text-gray-300 transition duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-400">
            Bio
          </h1>
        </div>
      </Fade>
      <Fade up cascade>
        <div>
          <p className="mx-auto w-full lg:w-3/4 mt-4 font-secondary font-normal text-gray-400 text-xl text-center">
            Diligent software engineer with 5+ years experience in commercial
            application development.
          </p>
          <p className="mx-auto w-full lg:w-3/4 mt-2 font-secondary font-normal text-gray-400 text-xl text-center">
            Eager to join Cyclone Inc. to build innovative and cutting edge
            business solutions for the impressive suite of clients within its
            global reach.
          </p>
          <p className="mx-auto w-full lg:w-3/4 mt-2 font-secondary font-normal text-gray-400 text-xl text-center">
            In previous roles, slashed downtime by 25% and ensured 98% on-time
            project completion. Also identified and dealt with a significant
            process bottleneck that boosted coding efficiency by 35% when
            resolved.
          </p>
        </div>
      </Fade>
      <Education />
      <Experience />
      <AllProjects />
    </div>
  );
}
