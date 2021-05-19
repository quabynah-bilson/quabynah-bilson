/*
 * File: resume.js                                                             *
 * Project: quabynah-codelabs                                                  *
 * Created Date: Monday, May 17th 2021, 1:41:09 pm                             *
 * Author: Quabynah Bilson                                                     *
 * -----                                                                       *
 * Last Modified: Monday, 17th May 2021 3:58:13 pm                             *
 * Modified By: Quabynah Bilson                                                *
 * -----                                                                       *
 * Copyright (c) 2021 Quabynah Codelabs LLC                                    *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                                   *
 * ----------	---	---------------------------------------------------------  *
 */

function Resume() {
  return (
    <section className="w-full h-full max-w-6xl mx-auto" id="resume">
      <h2 className="section-header text-3xl">Resume</h2>
      <div className="grid grid-rows-1 lg:grid-cols-2 lg:grid-rows-2">
        <div className="flex flex-col">Work experience</div>
        <div className="flex flex-col">Education</div>
        <div className="flex flex-col">Skills</div>
      <div className="flex flex-col">Online courses</div>
      </div>
    </section>
  );
}

export default Resume;
