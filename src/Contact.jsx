import React from 'react';
import New from './New';

function Contact() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 w-[10%] bg-gray-800">
        <New />
      </div>

      {/* Main Content */}
      <div className="movie-card ml-[10%] flex-grow p-6 bg-black flex justify-center">
        <form className="flex flex-col gap-6 w-full max-w-md">
          <div>
            <label htmlFor="first-name" className="block text-white mb-2">
              First Name:
            </label>
            <input
              id="first-name" type="text"placeholder="Enter your first name"className="w-full border border-gray-300 rounded p-2 required" />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-white mb-2">
              Last Name:
            </label>
            <input id="last-name"type="text" placeholder="Enter your last name"className="w-full border border-gray-300 rounded p-2 required" />
          </div>
          <div>
            <label htmlFor="Email" className="block text-white mb-2">
              Email:
            </label>
            <input id="email"type="text" placeholder="Enter your Email id"className="w-full border border-gray-300 rounded p-2 required" />
          </div>
          <div>
            <label htmlFor="phone-number" className="block text-white mb-2">
              Phone Number:
            </label>
            <input id="phone-number" type="tel" placeholder="Enter your phone number" className="w-full border border-gray-300 rounded p-2 required" />
          </div>
          <div>
            <label htmlFor="message" className="block text-white mb-2">Your Message:</label>
             <textarea placeholder="Your Message"className="w-[400px] h-[200px] border border-gray-300 rounded p-2" ></textarea>
          </div>
            <button className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-[150px]">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
