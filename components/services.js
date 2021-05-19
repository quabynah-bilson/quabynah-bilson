/*
 * File: services.js                                                           *
 * Project: quabynah-codelabs                                                  *
 * Created Date: Monday, May 17th 2021, 9:48:05 am                             *
 * Author: Quabynah Bilson                                                     *
 * -----                                                                       *
 * Last Modified: Monday, 17th May 2021 3:39:56 pm                             *
 * Modified By: Quabynah Bilson                                                *
 * -----                                                                       *
 * Copyright (c) 2021 Quabynah Codelabs LLC                                    *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                                   *
 * ----------	---	---------------------------------------------------------  *
 */
import Image from "next/image";
import { kServices } from "../utils/data";

function Services() {
  return (
    <section className="w-full flex flex-col space-y-8" id="services">
      <h2 className="section-header text-3xl">Services</h2>
      <div className="flex relative items-center">
        {/* services */}
        <div className="services-container">
          {kServices.map((service, index) => (
            <div key={index} className="service-card">
              {/* banner image */}
              <div className="banner-img-container">
                <Image
                  objectFit={"cover"}
                  objectPosition={"center"}
                  src={service.banner}
                  alt={service.credits}
                  // layout={"fill"}
                  height="200"
                  width="300"
                  loading={"lazy"}
                  className="banner-img"
                />
                {/* <img
                  src={service.banner}
                  alt={service.credits}
                  className="w-full h-full"
                /> */}
              </div>

              {/* title */}
              <h5 className="font-semibold text-lg lg:text-xl text-primary dark:text-white px-6 py-4">
                {service.title}
              </h5>

              {/* description */}
              <p className="mt-2 text-base text-gray-600 dark:text-gray-100 px-6 py-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
