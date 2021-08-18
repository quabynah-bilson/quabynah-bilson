import Image from "next/image";
import { IoLogoFacebook, IoLogoDribbble, IoLogoTwitter } from "react-icons/io";
import Link from "next/link";
import { useEffect } from "react";

// https://avatars.githubusercontent.com/u/41457025?v=4
function Hero({ user }) {
  return (
    <section className="hero-section max-w-6xl" id="hero">
      {/* avatar */}
      <div className="h-28 w-28">
        <Image
          src={user?.avatar}
          width="100%"
          height="100%"
          className="avatar"
        />
      </div>

      {/* username */}
      <h4 className="username">
        Hi, I'm <strong>{user?.username}</strong> 👋
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
      <button
        className="btn-primary"
        onClick={() => console.log("contact developer")}
      >
        Connect with me
      </button>
    </section>
  );
}

export default Hero;
