import React from 'react';
import New from './New';

function About() {
  return (
    <div className="flex min-h-screen">
      <div className="fixed left-0 top-0 bottom-0 w-[10%] bg-gray-800">
      <New/>
      </div>
      {/* Content Section */}
<div className="flex flex-col md:flex-row bg-black p-10 md:p-20 w-full ml-[10%]">
  {/* About Me Section */}
  <div className="text-white text-center md:text-left w-full mb-8">
    <h1 className="text-white text-3xl font-semibold mb-4">About Me</h1>
    <p className="text-lg">
      I am a UI/UX Developer and Designer with a passion for creating exceptional user experiences.
      I have a strong attention to detail and a deep understanding of usability and responsive design principles.
    </p>
    {/* Professional Skills Section */}
  <div className="text-white text-start w-full md:w-1/2 mt-16">
    <p className="text-lg font-medium justify-start items-center ml-1">Professional Skills</p>
    <ul className="list-disc pl-6 text-lg">
      <li>Front-End Development (HTML, CSS, JavaScript , React-js)</li>
      <li>Front-End Designing (Figma, Adobe Photoshop, Adobe Illustrator)</li>
    </ul>
  </div>
   {/* Education Section */}
   <div className="text-white text-center md:text-left w-full md:w-1/2 mt-16">
    <h3 className="text-lg font-bold mb-4">Education</h3>
    <ul className="list-disc pl-6 text-lg">
      <li>Bachelor of Technology in Electronics and Communication Engineering (ECE), GMRIT.<ol>2020-2024 CGPA:7.54</ol> </li>
      <li> Intermediate: Narayana Junior College <ol>2018-2020 CGPA:6.90</ol></li>
      <li>10th class:Narayana E-Techno School <ol>2017-2018 CGPA:7.3</ol></li>
    </ul>
  </div>
  </div>
</div>

    </div>
  );
}

export default About;
