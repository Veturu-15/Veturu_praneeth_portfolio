import React from 'react';
import { Link } from 'react-router-dom';

function New() {
  return (
    <nav className="hero  h-full">
      <ul className="hero bg-white text-black h-full flex flex-col gap-10 p-5">
      <Link to='/Veturu_praneeth_portfolio'>  <li className="cursor-pointer hover:bg-blue-400 p-2 rounded">Home</li></Link>
      <Link to='/about'> <li className="cursor-pointer hover:bg-blue-400 p-2 rounded">About</li></Link> 
       <Link to='/skill'> <li className="cursor-pointer hover:bg-blue-400 p-2 rounded">Skills</li></Link>
      <Link to='/port'> <li className="cursor-pointer hover:bg-blue-400 p-2 rounded">Portfolio</li></Link> 
      <Link to='/contact'>  <li className="cursor-pointer hover:bg-blue-400 p-2 rounded">Contact</li></Link>
      <li className="cursor-pointer hover:bg-blue-400 p-2 rounded">
        <a href="Veturu_praneeth.pdf" target="_blank" rel="noopener noreferrer" download className="block text-black" >   Download Resume </a>
      </li>

      </ul>
    </nav>
  );
}

export default New;
