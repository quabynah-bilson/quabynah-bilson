/*
 * File: index.js                                                              *
 * Project: quabynah-codelabs                                                  *
 * Created Date: Monday, May 17th 2021, 7:52:22 am                             *
 * Author: Quabynah Bilson                                                     *
 * -----                                                                       *
 * Last Modified: Monday, 17th May 2021 2:57:50 pm                             *
 * Modified By: Quabynah Bilson                                                *
 * -----                                                                       *
 * Copyright (c) 2021 Quabynah Codelabs LLC                                    *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                                     *
 * ----------	---	---------------------------------------------------------    *
 */

import Header from "../components/header";
import Hero from "../components/hero";
import Services from "../components/services";
import Projects from "../components/projects";
import Footer from "../components/footer";
import Resume from "../components/resume";
import Skills from "../components/skills";
import Tools from "../components/tools";
import Testimonials from "../components/testimonials";
import Faqs from "../components/faqs";

function PortfolioHomePage() {
  return (
    <div className="w-screen min-h-screen flex flex-col relative bg-gray-50">
      {/* header */}
      <Header />

      <div className="wrapper">
        {/* hero */}
        <Hero />

        {/* services */}
        <Services />

        {/* resume */}
        <Resume />

        {/* skills */}
        <Skills />

        {/* tools */}
        <Tools />

        {/* works */}
        <Projects />

        {/* testimonials */}
        <Testimonials />

        {/* faqs */}
        <Faqs />

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

export default PortfolioHomePage;
