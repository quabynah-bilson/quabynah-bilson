/*
 * File: hero.js                                                               *
 * Project: quabynah-codelabs                                                  *
 * Created Date: Monday, May 17th 2021, 9:46:22 am                             *
 * Author: Quabynah Bilson                                                     *
 * -----                                                                       *
 * Last Modified: Monday, 17th May 2021 3:21:04 pm                             *
 * Modified By: Quabynah Bilson                                                *
 * -----                                                                       *
 * Copyright (c) 2021 Quabynah Codelabs LLC                                    *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                                   *
 * ----------	---	---------------------------------------------------------  *
 */

import Image from "next/image";
import { IoLogoFacebook, IoLogoDribbble, IoLogoTwitter } from "react-icons/io";
import Link from "next/link";

// https://avatars.githubusercontent.com/u/41457025?v=4
function Hero() {
  return (
    <section className="hero-section max-w-6xl" id="hero">
      {/* avatar */}
      <div className="h-28 w-28">
        <Image
          src={"https://avatars.githubusercontent.com/u/41457025?v=4"}
          width="100%"
          height="100%"
          className="avatar"
        />
      </div>

      {/* username */}
      <h4 className="username">
        Hi, I'm <strong>Quabynah Bilson</strong> 👋
      </h4>

      {/* title */}
      <h1 className="heading">
        Building <strong>mobile</strong> &amp; <strong>web</strong>{" "}
        applications, mockups with the best user experience
      </h1>

      {/* subtitle */}
      <div className="subhead">
        <h5 className="">
          a <strong>Mobile application</strong> &amp;
          <strong> Full Stack developer</strong> based in Accra, Ghana.
        </h5>
        <h5 className="">
          I specialize in creating cross-platform mobile applications, website
          and backend development using modern web technologies and tools
        </h5>
      </div>

      {/* contact me */}
      <button className="btn-primary" onClick={contactDeveloper}>
        Connect with me
      </button>
    </section>
  );
}

// contact developer's account
export async function contactDeveloper() {
  //! contact the developer
  console.log("contacting developer");
}

export default Hero;
