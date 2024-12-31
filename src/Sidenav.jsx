import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Sidenav() {
  const [role, setRole] = useState(" I'm a UI/UX Developer");

  useEffect(() => {
    const roles = [" I'm a UI/UX Developer", " I'm a UI/UX Designer"];
    let currentRoleIndex = 0;

    const roleInterval = setInterval(() => {
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      setRole(roles[currentRoleIndex]);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(roleInterval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black">
      <div className="bg-white md:w-[10%] w-full">
        <ul className="flex flex-col gap-10 p-5 list-none text-black">
        <Link to="/Veturu_praneeth_portfolio">  <li className="cursor-pointer hover:bg-blue-400 p-2 rounded">Home</li></Link>
        <Link to="/about">   <li className="cursor-pointer hover:bg-blue-400 p-2 rounded"> About</li></Link>
         <Link to='/skill'> <li className="cursor-pointer hover:bg-blue-400 p-2 rounded">Skills</li></Link>
        <Link to='/port'> <li className="cursor-pointer hover:bg-blue-400 p-2 rounded">Portfolio</li></Link> 
        <Link to='/contact'> <li className="cursor-pointer hover:bg-blue-400 p-2 rounded">Contact</li></Link> 
        <li className="cursor-pointer hover:bg-blue-400 p-2 rounded">
        <a href="Veturu_praneeth.pdf" target="_blank" rel="noopener noreferrer" download className="block text-black" >   Download Resume </a>
      </li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="flex flex-col md:flex-row items-center mt-0 p-10">
        <div className="h-[300px] w-[300px] mb-5 md:mb-0 space-x-4">
          <img src="/photo.jpeg"alt="photo"className="w-full h-full animate-pulse object-cover rounded-full shadow-md"/>
          <br />
          <a href='https://www.linkedin.com/in/praneeth-veturu-630153214/' className='text-white bg-gray-800 p-4 mb-8 rounded ' target='_blank'>Linkedin</a>
          <a href='https://github.com/Veturu-15' className='text-white bg-gray-800 p-4 mb-8 rounded' target='_blank'>GitHub</a>
        </div>
        {/* Text Section */}
        <div className="md:ml-5 text-center md:text-left text-white">
          <h1 className="text-xl font-semibold ">VETURU PRANEETH</h1>
          <h3 id="role" className="text-lg font-medium text-purple-300">{role}</h3>
          <p className="text-base md:text-lg text-cyan-400 text-justify max-w-4xl mx-auto mb-5"> UI/UX Developer and Designer with a strong attention to detail and a passion for creating exceptional user experiences.</p>
        <Link to='/contact'> <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
         Contact me
        </button></Link>

        </div>
      </div>
    </div>
  );
}

export default Sidenav;
